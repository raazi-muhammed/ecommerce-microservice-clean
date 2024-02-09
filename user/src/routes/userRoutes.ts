import express from "express";
import makeCallback from "../lib/expressCallback.js";
import { editUserUserCase } from "../useCases/index.js";

export default function makeRoutes({
    verifyUser,
    verifyAdmin,
    getAllUsersUseCase,
    blockUserUserCase,
    unBlockUserUserCase,
}) {
    const router = express.Router();

    router.get("/all-users", verifyAdmin, makeCallback(getAllUsersUseCase));
    router.patch(
        "/block-user",
        verifyAdmin,
        makeCallback((req) => blockUserUserCase({ id: req.body?.id }))
    );
    router.patch(
        "/un-block-user",
        verifyAdmin,
        makeCallback((req) => unBlockUserUserCase({ id: req.body?.id }))
    );
    router.put(
        "/edit-user",
        verifyUser,
        makeCallback((req) => editUserUserCase({ userDetails: req.body }))
    );

    return router;
}
