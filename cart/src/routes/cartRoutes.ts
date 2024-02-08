import express from "express";
import makeCallback from "../lib/expressCallback.js";

export default function buildCartRoutes({ getAllCartUseCase }) {
    const router = express.Router();

    router.get(
        "/all-cart",
        makeCallback(() => getAllCartUseCase())
    );

    return router;
}
