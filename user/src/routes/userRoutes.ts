import express from "express";
import makeCallback from "../lib/expressCallback.js";

export default function makeRoutes({
    getAllUsersUseCase,
    blockUserUserCase,
    unBlockUserUserCase,
}) {
    const router = express.Router();

    router.get("/all-users", makeCallback(getAllUsersUseCase));
    router.patch(
        "/block-user",
        makeCallback((req) => blockUserUserCase({ id: req.body?.id }))
    );
    router.patch(
        "/un-block-user",
        makeCallback((req) => unBlockUserUserCase({ id: req.body?.id }))
    );

    return router;
}
