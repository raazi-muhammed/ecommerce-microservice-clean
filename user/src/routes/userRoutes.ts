import express from "express";
import makeCallback from "../lib/expressCallback.js";

export default function makeRoutes({ getAllUsersUseCase }) {
    const router = express.Router();

    router.get("/all-users", makeCallback(getAllUsersUseCase));

    return router;
}
