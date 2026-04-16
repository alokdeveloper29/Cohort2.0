import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { sendEmail } from "../services/mail.service.js";

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { username, email, password }
*/
export const register = async (req, res) => {

    const { username, password, email } = req.body

    const isUserExist = await userModel.findOne({ 
        $or: [{ email }, { username }] 
    })

    if (isUserExist) {
        return res.status(400).json({
            message: "User already exists with this email or username",
            success: false,
            err: "User already exists"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    })

    const emailVerificationToken = jwt.sign({
        email: user.email
    }, process.env.JWT_SECRET)

    await sendEmail({
        to: email,
        subject: "Welcome to Perplexity",
        text: `Hi ${username},\n\nThank you for registering on our platform! We're excited to have you on board. If you have any questions or need assistance, feel free to reach out to our support team. Welcome to the Perplexity community!`,
        html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering on our platform! We're excited to have you on board. If you have any questions or need assistance, feel free to reach out to our support team. Welcome to the Perplexity community!</p>
                <p>Please verify your email by clicking the link below:</p>
                <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>
                <p>Best regards,<br/>The Perplexity Team</p>
        `
    })

    res.status(201).json({
        message: "User registered successfully",
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });

    
}

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 * @body { email, password }
 */
export const login = async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })
    if (!user) {
        return res.status(400).json({
            message: "User not found with this email",
            success: false,
            err: "Email not found"
        })
    }

    if(!user.verified){
        return res.status(400).json({
            message: "Email not verified. Please verify your email before logging in.",
            success: false,
            err: "Email not verified"
        })
    }

    const isMatch = await user.comparePassword(password)
    
    if (!isMatch) {
        return res.status(400).json({
            message: "Invalid email or password",
            success: false,
            err: "Incorrect password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email,
        username: user.username
    }, process.env.JWT_SECRET, { expiresIn: "7d" })

    res.cookie("token", token)

    res.status(200).json({
        message: "Login successful",
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    });
}

/**
 * @route GET /api/auth/me
 * @desc Get current user's information
 * @access Private
 */
export async function getMe(req, res) {
    const userId = req.user.id

    const user = await userModel.findById(userId).select("-password");

    if(!user){
        return res.status(404).json({
            message: "User not found",
            success: false,
            err: "User not found"
        })
    }

    res.status(200).json({
        message: "User details fetched successfully",
        success: true,
        user
    })
}

/**
 * @route GET /api/auth/verify-email
 * @desc Verify user's email address
 * @access Public
 * @query { token }
 */
export async function verifyEmail(req, res) {
    const { token } = req.query;

    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await userModel.findOne({ email: decoded.email })

    if(!user){
        return res.status(400).json({
            message: "Invalid token",
            success: false,
            err: "User not found"
        })
    }

    user.verified = true;

    await user.save()

    const html = 
    `
        <h1>Email Verified</h1>
        <p>Your email has been successfully verified. You can now log in to your account.</p>
        <a href="http://localhost:3000/login">Go to Login</a>
    ` 

    return res.send(html)

    } catch (err) {
        return res.status(400).json({
            message: "Invalid or expired token",
            success: false,
            err: "Invalid token"
        })
    }

}

