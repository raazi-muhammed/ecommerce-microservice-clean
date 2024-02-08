import express from "express";
import makeCallback from "../lib/expressCallback.js";

export default function buildCartRoutes({
    verifyUser,
    getAllCartUseCase,
    getUserCartUseCase,
}) {
    const router = express.Router();

    router.get(
        "/all-cart",
        makeCallback(() => getAllCartUseCase())
    );
    router.get(
        "/user-cart",
        makeCallback(async (req) => {
            const user = await verifyUser(req);
            if (!user) throw new Error("User not authorized");

            return getUserCartUseCase({ userId: user._id });
        })
    );

    return router;
}
