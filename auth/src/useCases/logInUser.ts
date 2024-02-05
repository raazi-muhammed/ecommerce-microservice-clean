import { logUser as loginUserEntity } from "../auth/index.js";

export default function makeLoginUser({ userList }) {
    return async function loginUser(input: {
        email: string;
        password: string;
    }) {
        const user = await userList.findByEmail(input.email);
        if (!user) throw new Error("No user found");

        return await loginUserEntity({ input, userData: user });
    };
}
