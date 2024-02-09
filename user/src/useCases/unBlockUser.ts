import { UserList } from "../database/index.js";

export default function makeUnBlockUser({ userList }: { userList: UserList }) {
    return async function unBlockUser({ id }: { id: string }) {
        return await userList.unBlockUser({ id });
    };
}
