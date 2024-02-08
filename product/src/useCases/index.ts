import buildAddProduct from "./addProduct.js";
import { productList } from "../database/index.js";
import buildGetAllProducts from "./getAllProducts.js";
import buildDeleteProductById from "./deleteProductById.js";
import buildAddToCart from "./addToCart.js";
import { addToCartEvent } from "../events/index.js";

export const addProductUseCase = buildAddProduct(productList);
export const getAllProductsUseCase = buildGetAllProducts(productList);
export const deleteProductByIdUseCase = buildDeleteProductById(productList);
export const addToCartByIdUseCase = buildAddToCart({
    addToCartEvent,
    productList,
});
