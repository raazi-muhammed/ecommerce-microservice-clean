import { UserObjectType } from "../modal/userModel.js";

export default function makeUserList({ database }) {
    return Object.freeze({
        add: async function add(userData: UserObjectType) {
            return await database.create(userData);
        },
        findByEmail: async function findByEmail(email: string) {
            return await database.findOne({ email });
        },
    });
}
