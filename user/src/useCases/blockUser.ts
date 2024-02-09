import { UserList } from "../database/index.js";

export default function makeBlockUser({ userList }: { userList: UserList }) {
    return async function blockUser({ id }: { id: string }) {
        return await userList.blockUser({ id });
    };
}
