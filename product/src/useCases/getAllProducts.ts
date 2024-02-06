import { ProductListType } from "../database/index.js";

export default function buildGetAllProducts(productList: ProductListType) {
    return async function getAllProducts() {
        return await productList.getAll();
    };
}
