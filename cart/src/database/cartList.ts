export default function buildCartList({ database }) {
    return Object.freeze({
        add: async (data) => {
            return await database.create(data);
        },
        getAll: async () => {
            return await database.find();
        },
        getUsersCartById: async (userId: string) => {
            return await database.find({ userId });
        },
    });
}
