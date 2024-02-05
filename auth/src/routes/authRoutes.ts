import express from "express";

export default function makeRoutes({ loginController, signUpController }) {
    const router = express.Router();

    router.post("/login", loginController);
    router.post("/sign-up", signUpController);

    return router;
}
