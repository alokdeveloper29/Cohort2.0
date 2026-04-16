import userModel from "../models/user.model.js";
import { sendEmail } from "../services/mail.service.js";
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

    await sendEmail({
        to: email,
        subject: "Welcome to Perplexity",
        text: `Hi ${username},\n\nThank you for registering on our platform! We're excited to have you on board. If you have any questions or need assistance, feel free to reach out to our support team. Welcome to the Perplexity community!`,
        html: `
                <p>Hi ${username},</p>
                <p>Thank you for registering on our platform! We're excited to have you on board. If you have any questions or need assistance, feel free to reach out to our support team. Welcome to the Perplexity community!</p>
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