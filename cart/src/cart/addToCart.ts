export default function buildMakeCartItem() {
    return function makeCartItem({
        userId,
        product,
    }: {
        userId: string;
        product: Object;
    }) {
        if (!userId) throw new Error("No user data");
        if (!product) throw new Error("No product data");

        return Object.freeze({
            userId,
            product,
        });
    };
}
