import makeSignUpUser from "./signUpUser.js";
import { userList } from "../database/index.js";
import makeLoginUser from "./logInUser.js";
import makeLoginAdmin from "./loginAdmin.js";
import buildCurrentUser from "./currentUser.js";
import * as token from "../lib/token.js";
import buildVerifyAdmin from "./verifyAdmin.js";

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    console.log("Admin email and password not found");
}
export const signUpUseCase = makeSignUpUser({ userList });
export const loginUserUseCase = makeLoginUser({ userList });
export const currentUserUseCase = buildCurrentUser(userList, token);
export const logAdminUseCase = makeLoginAdmin({
    adminData: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
    },
});
export const verifyAdminUseCase = buildVerifyAdmin({
    adminData: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
    },
    token,
});
