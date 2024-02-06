import { ProductListType } from "../database/index.js";

export default function buildDeleteProductById(productList: ProductListType) {
    return async function deleteProductById(id: string) {
        return await productList.deleteById({ id });
    };
}
