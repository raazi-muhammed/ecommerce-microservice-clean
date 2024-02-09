import { UserList } from "../database/index.js";
import { makeUser } from "../user/index.js";

type EditUser = {
    userDetails: {
        _id: string;
        email: string;
        username: string;
    };
};

export default function buildEditUser({ userList }: { userList: UserList }) {
    return async function editUser({ userDetails }: EditUser) {
        const newUser = makeUser(userDetails);
        if (!newUser) throw new Error("Invalid user details");
        console.log(newUser);

        return await userList.editUser({
            id: userDetails._id,
            userInfo: newUser,
        });
    };
}
