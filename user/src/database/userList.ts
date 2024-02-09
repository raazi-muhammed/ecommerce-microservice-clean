import { UserType } from "../models/userModel.js";

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
        editUser: async ({
            id,
            userInfo,
        }: {
            id: string;
            userInfo: { email: string; username: string };
        }) => {
            return await database.updateOne({ _id: id }, { userInfo });
        },
    });
}
