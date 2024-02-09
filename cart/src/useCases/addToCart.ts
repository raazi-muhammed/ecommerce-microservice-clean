import { makeCartItem } from "../cart/index.js";
import { CartList } from "../database/index.js";

export default function buildAddToCart({ cartList }: { cartList: CartList }) {
    return async function addToCart({ userId, product }) {
        const cartItem = makeCartItem({ userId, product });

        if (!cartItem) throw new Error("Invalid data");

        const doesExists = await cartList.getProductFromCartByUser({
            userId: cartItem.userId,
            /* @ts-ignore  because product types is not set*/
            productId: cartItem.product?._id,
        });

        if (doesExists.length > 0) throw new Error("Already in cart");

        return await cartList.add(cartItem);
    };
}
