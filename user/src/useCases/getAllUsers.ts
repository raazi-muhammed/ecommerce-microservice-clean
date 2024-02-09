import { UserList } from "../database/index.js";

export default function makeGetAllUsers({ userList }: { userList: UserList }) {
    return async function getAllUsers() {
        return await userList.getAll();
    };
}
