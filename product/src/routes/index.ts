import buildRoutes from "./productRoutes.js";
import { verifyUser } from "../lib/autherizeUser.js";
import {
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
    addToCartByIdUseCase,
} from "../useCases/index.js";

export default buildRoutes({
    verifyUser,
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
    addToCartByIdUseCase,
});
