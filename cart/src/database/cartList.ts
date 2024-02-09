export default function buildCartList({ database }) {
    return Object.freeze({
        add: async (data) => {
            return await database.create(data);
        },
        remove: async ({ id }: { id: string }) => {
            return await database.deleteOne({ _id: id });
        },
        getAll: async () => {
            return await database.find();
        },
        getUsersCartById: async (userId: string) => {
            return await database.find({ userId });
        },
        getProductFromCartByUser: async ({
            userId,
            productId,
        }: {
            userId: string;
            productId: string;
        }) => {
            return await database.find({ userId, "product._id": productId });
        },
    });
}
