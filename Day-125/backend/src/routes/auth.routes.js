import { Router } from "express"
import { login, register, verifyEmail, getMe } from "../controllers/auth.controller.js"
import { registerValidator, loginValidator } from "../validators/auth.validator.js"
import { authUser } from '../middlewares/auth.middleware.js'

const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * body: {
 *   username: string,
 *   email: string,
 *   password: string
 * }
 */
authRouter.post("/register", registerValidator, register)

/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email, password }
 */
authRouter.post("/login", loginValidator, login)


/** 
 * @route GET /api/auth/me
 * @desc Get current user's information
 * @access Private
 */
authRouter.get("/get-me", authUser, getMe)

/**
 * @route GET /api/auth/verify-email
 * @desc Verify user's email address
 * @access Public
 * @query { token}
 */
authRouter.get("/verify-email", verifyEmail)

export default authRouter