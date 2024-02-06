import express from "express";
import makeCallback from "../lib/expressCallback.js";

export default function buildRoutes({
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
}) {
    const router = express.Router();
    router.post(
        "/add-product",
        makeCallback(({ body }) => addProductUseCase(body))
    );
    router.get(
        "/all-product",
        makeCallback(async ({ body }) => await getAllProductsUseCase(body))
    );
    router.patch(
        "/delete-product",
        makeCallback(
            async ({ query }) => await deleteProductByIdUseCase(query.id)
        )
    );
    return router;
}
