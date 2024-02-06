import { ProductListType } from "../database/index.js";
import { ProductObjectType } from "../models/productModel.js";
import { makeProduct } from "../product/indext.js";

export default function buildAddProduct(productList: ProductListType) {
    return async function addProduct(productData: ProductObjectType) {
        const product = makeProduct(productData);
        return await productList.add(product);
    };
}
