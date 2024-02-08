import { CartList } from "../database/index.js";

export default function buildRemoveFromCart({
    cartList,
}: {
    cartList: CartList;
}) {
    return async function removeFromCart({ id }: { id: string }) {
        return await cartList.remove({ id });
    };
}
