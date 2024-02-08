import { CartList } from "../database/index.js";

export default function buildGetUsersCart({
    cartList,
}: {
    cartList: CartList;
}) {
    return async function getUsersCart({ userId }: { userId: string }) {
        return await cartList.getUsersCartById(userId);
    };
}
