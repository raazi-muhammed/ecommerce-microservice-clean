import { ProductListType } from "../database/index.js";
import { addToCartEvent } from "../events/addToCartEvent.js";

export default function buildAddToCart({
    productList,
}: {
    productList: ProductListType;
}) {
    return async function addToCart({
        productId,
        userId,
    }: {
        productId: string;
        userId: string;
    }) {
        if (!productId) throw new Error("Invalid input");

        const product = await productList.getById({ id: productId });
        if (!product) throw new Error("No product found");

        const eventData = { userId: userId, product };
        addToCartEvent(eventData);
        return eventData;
    };
}
