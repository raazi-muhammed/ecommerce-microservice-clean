import { makeUser } from "../auth/index.js";

export default function makeSignUpUser({ userList }) {
    return async function signUpUser(userInfo: {
        username: string;
        password: string;
        email: string;
    }) {
        const user = await makeUser(userInfo);
        if (!user) throw new Error("Make user failed");

        return await userList.add(user);
    };
}
