type MakeUser = {
    username: string;
    email: string;
};

export default function buildMakeUser() {
    return function makeUser({ username, email }: MakeUser) {
        if (!username) throw new Error("No username");
        if (!email) throw new Error("No email");

        return Object.freeze({
            username: username,
            email: email,
        });
    };
}
