import { makeCartItem } from "../cart/index.js";
import { CartList } from "../database/index.js";

export default function buildAddToCart({ cartList }: { cartList: CartList }) {
    return async function addToCart({ userId, product }) {
        const cartItem = makeCartItem({ userId, product });
        if (!cartItem) throw new Error("Invalid data");

        return await cartList.add(cartItem);
    };
}
