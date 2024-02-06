import { UserType } from "../modal/userModel.js";

type LogUser = {
    input: {
        email: string;
        password: string;
    };
    userData: UserType;
};

type BuildLogUser = {
    passwordHash: {
        comparePassword: (
            password1: string,
            password2: string
        ) => Promise<boolean>;
    };
    token: {
        signToken: (data: { email: string; _id: string }) => string;
    };
};

export default function buildLogUser({ passwordHash, token }: BuildLogUser) {
    return async function logUser({ input, userData }: LogUser) {
        if (!input.password) throw new Error("No password");
        if (!input.email) throw new Error("No email");

        const isPasswordCorrect = await passwordHash.comparePassword(
            input.password,
            userData.password
        );

        if (!isPasswordCorrect) throw new Error("Password incorrect");

        const authorizationToken = token.signToken({
            email: userData.email,
            _id: userData._id,
        });

        return Object.freeze({
            userData,
            token: authorizationToken,
        });
    };
}
