import express from "express";
import { signup } from "../controller/signup.js";
import { verifyEmail } from "../controller/verifyEmail.js";
import { logout } from "../controller/logout.js";
import { login } from "../controller/login.js";
import { forgotPassword } from "../controller/forgotPassword.js";
import { resetPassword } from "../controller/resetPassword.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { checkAuth } from "../controller/checkAuth.js";

const routes = express.Router();

routes.post("/signup", signup);
routes.post("/login", login);
routes.post("/logout", logout);
routes.post("/verify-email", verifyEmail);
routes.post("/forgot-password", forgotPassword);
routes.post("/reset-password/:token", resetPassword);

routes.get("/check-auth", verifyToken, checkAuth);



export default routes;