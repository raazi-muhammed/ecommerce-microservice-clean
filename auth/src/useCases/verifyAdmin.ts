import { TokenType } from "../lib/token.js";

export default function buildVerifyAdmin({
    adminData,
    token,
}: {
    adminData: { email: string; password: string };
    token: TokenType;
}) {
    return async function verifyAdmin(inputToken: string) {
        const aToken = token.validateToken(inputToken);
        if (!aToken) throw new Error("Invalid token");

        const tokenData = await token.decodeToken(aToken);

        if (
            tokenData?.email !== adminData?.email ||
            tokenData?.password !== adminData?.password
        ) {
            throw new Error("Invalid admin data");
        }

        return adminData;
    };
}
