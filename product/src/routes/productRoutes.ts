import express from "express";
import makeCallback from "../lib/expressCallback.js";
export default function buildRoutes({
    verifyUser,
    verifyAdmin,
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
    addToCartByIdUseCase,
}) {
    const router = express.Router();
    router.post(
        "/add-product",
        verifyAdmin,
        makeCallback(({ body }) => addProductUseCase(body))
    );
    router.get(
        "/all-product",
        makeCallback(async ({ body }) => await getAllProductsUseCase(body))
    );
    router.patch(
        "/delete-product",
        verifyAdmin,
        makeCallback(
            async ({ query }) => await deleteProductByIdUseCase(query.id)
        )
    );
    router.post(
        "/add-to-cart",
        verifyUser,
        makeCallback(async (req) => {
            console.log(req.currentUser);

            return await addToCartByIdUseCase({
                productId: req.query?.id,
                userId: req.currentUser?._id,
            });
        })
    );
    return router;
}
