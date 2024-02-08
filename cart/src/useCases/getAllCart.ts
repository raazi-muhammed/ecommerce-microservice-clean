import { CartList } from "../database/index.js";

export default function buildGetAllCart({ cartList }: { cartList: CartList }) {
    return async function getAllCart() {
        return await cartList.getAll();
    };
}
