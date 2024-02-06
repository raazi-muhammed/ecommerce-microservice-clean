import buildRoutes from "./productRoutes.js";
import {
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
} from "../useCases/index.js";

export default buildRoutes({
    addProductUseCase,
    getAllProductsUseCase,
    deleteProductByIdUseCase,
});
