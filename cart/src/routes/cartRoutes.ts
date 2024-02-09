import express from "express";
import makeCallback from "../lib/expressCallback.js";

export default function buildCartRoutes({
    verifyUser,
    getAllCartUseCase,
    getUserCartUseCase,
    removeFromCartUseCase,
}) {
    const router = express.Router();

    router.get(
        "/all-cart",
        makeCallback(() => getAllCartUseCase())
    );
    router.get(
        "/user-cart",
        verifyUser,
        makeCallback(async (req) => {
            return getUserCartUseCase({ userId: req.currentUser._id });
        })
    );
    router.delete(
        "/remove-from-cart",
        verifyUser,
        makeCallback(async (req) => {
            return removeFromCartUseCase({ id: req.query?.id });
        })
    );

    return router;
}
