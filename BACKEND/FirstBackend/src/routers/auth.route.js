import express from 'express'
import { RegisterUser,LoginUser } from '../contollers/auth.controller.js';

const AuthRouter = express.Router();

AuthRouter.post("/login",LoginUser)
AuthRouter.post("/register",RegisterUser)
// AuthRouter.get("/logout",Logout)

export default AuthRouter;