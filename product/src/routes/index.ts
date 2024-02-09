import buildRoutes from "./productRoutes.js";
import { verifyUser } from "../lib/verifyUser.js";
import { verifyAdmin } from "../lib/verifyAdmin.js";
import {
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
    addToCartByIdUseCase,
} from "../useCases/index.js";

export default buildRoutes({
    verifyUser,
    verifyAdmin,
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
    addToCartByIdUseCase,
});
