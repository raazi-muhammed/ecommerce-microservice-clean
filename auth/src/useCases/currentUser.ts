import { UserListType } from "../database/index.js";
import { TokenType } from "../lib/token.js";

export default function buildCurrentUser(
    userList: UserListType,
    token: TokenType
) {
    return async function currentUser(authorizationToken: string) {
        let authT = token.validateToken(authorizationToken);
        const data = await token.decodeToken(authT);
        return await userList.findByEmail(data.email);
    };
}
