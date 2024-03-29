import express from "express";
import makeCallback from "../lib/expressCallback.js";

export default function makeRoutes({
    loginController,
    signUpController,
    loginAdminController,
    currentUserController,
    verifyAdminController,
}) {
    const router = express.Router();

    router.post("/login", makeCallback(loginController));
    router.post("/sign-up", makeCallback(signUpController));
    router.post("/admin/login", makeCallback(loginAdminController));
    router.get("/current-user", makeCallback(currentUserController));
    router.get("/verify-admin", makeCallback(verifyAdminController));

    return router;
}
