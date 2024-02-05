export default function buildLogAdmin({ passwordHash, token }) {
    return async function logAdmin({ input, adminData }) {
        if (!input.email || !input.password) throw new Error("Invalid input");

        if (input.email !== adminData.email)
            throw new Error("Email is incorrect");

        const isPasswordCorrect = await passwordHash.comparePassword(
            input.password,
            adminData.password
        );

        if (!isPasswordCorrect) throw new Error("Password incorrect");

        const authorizationToken = token.signToken({
            email: adminData.email,
            _id: adminData._id,
            isAdmin: true,
        });
        console.log(authorizationToken);

        return Object.freeze({
            adminData,
            token: authorizationToken,
        });
    };
}
