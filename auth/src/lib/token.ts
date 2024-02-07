import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

type TokenDataType = { email: string; _id: string };
export function signToken(data: TokenDataType) {
    if (!ACCESS_TOKEN_SECRET) throw new Error("No salt for jwt");

    return jwt.sign(data, ACCESS_TOKEN_SECRET);
}

export async function decodeToken(token: string) {
    if (!ACCESS_TOKEN_SECRET) return null;

    return new Promise<TokenDataType | null>((resolve) => {
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                resolve(null);
            } else {
                resolve(user as TokenDataType);
            }
        });
    });
}

export function validateToken(auth: string) {
    const token = auth.split(" ")[1];
    if (!token) throw new Error("Invalid token");

    return token;
}

export type TokenType = {
    signToken: typeof signToken;
    decodeToken: typeof decodeToken;
    validateToken: typeof validateToken;
};
