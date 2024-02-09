export default function makeUserList({ database }) {
    return Object.freeze({
        getAll: async () => {
            return await database.find();
        },
        blockUser: async ({ id }: { id: string }) => {
            return await database.updateOne(
                { _id: id },
                { isBlocked: true },
                { upsert: true }
            );
        },
        unBlockUser: async ({ id }: { id: string }) => {
            return await database.updateOne(
                { _id: id },
                { isBlocked: false },
                { upsert: true }
            );
        },
    });
}
