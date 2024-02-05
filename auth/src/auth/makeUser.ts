type BuildMakeUser = {
    passwordHash: { getHashedPassword: (password: string) => Promise<string> };
};

type MakeUser = {
    username: string;
    email: string;
    password: string;
};

export default function buildMakeUser({ passwordHash }: BuildMakeUser) {
    return async function makeUser({ username, email, password }: MakeUser) {
        if (password.length < 6) throw new Error("Invalid password");
        if (!username) throw new Error("No username");
        if (!email) throw new Error("No email");

        const encryptedPassword = await passwordHash.getHashedPassword(
            password
        );

        return Object.freeze({
            username: username,
            password: encryptedPassword,
            email: email,
        });
    };
}
