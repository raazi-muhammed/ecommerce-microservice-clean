import express from "express";
import makeCallback from "../lib/expressCallback.js";
import { addToCartByIdUseCase as addToCartByIdUseCaseOG } from "../useCases/index.js";
export default function buildRoutes({
    verifyUser,
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
    addToCartByIdUseCase,
}: {
    verifyUser: any;
    addProductUseCase: any;
    getAllProductsUseCase: any;
    deleteProductByIdUseCase: any;
    addToCartByIdUseCase: typeof addToCartByIdUseCaseOG;
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
    router.post(
        "/add-to-cart",
        makeCallback(async (req) => {
            const user = await verifyUser(req);

            return await addToCartByIdUseCase({
                productId: req.query?.id,
                userId: user._id,
            });
        })
    );
    return router;
}
