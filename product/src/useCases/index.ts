import buildAddProduct from "./addProduct.js";
import { productList } from "../database/index.js";
import buildGetAllProducts from "./getAllProducts.js";
import buildDeleteProductById from "./deleteProductById.js";

export const addProductUseCase = buildAddProduct(productList);
export const getAllProductsUseCase = buildGetAllProducts(productList);
export const deleteProductByIdUseCase = buildDeleteProductById(productList);
