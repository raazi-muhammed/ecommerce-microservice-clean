export default function buildLogAdmin({ passwordHash, token }) {
    return async function logAdmin({ input, adminData }) {
        if (!input.email || !input.password) throw new Error("Invalid input");

        if (input.email !== adminData.email)
            throw new Error("Email is incorrect");

        const isPasswordCorrect = await passwordHash.comparePassword(
            input.password,
            "$2b$10$ob3JIsm4gqtND91KnKhp.eFZKotvwSDqz5WdYfJoZE5ZHW2LpRh8i"
        );

        if (!isPasswordCorrect) throw new Error("Password incorrect");

        const authorizationToken = token.signToken({
            email: adminData.email,
            password: adminData.password,
        });
        console.log(authorizationToken);

        return Object.freeze({
            adminData,
            token: authorizationToken,
        });
    };
}
