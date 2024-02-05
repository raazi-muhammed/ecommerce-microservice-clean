import express from "express";

export default function makeRoutes({
    loginController,
    signUpController,
    loginAdminController,
}) {
    const router = express.Router();

    router.post("/login", loginController);
    router.post("/sign-up", signUpController);
    router.post("/admin/login", loginAdminController);

    return router;
}
