import makeSignUpUser from "./signUpUser.js";
import { userList } from "../database/index.js";
import makeLoginUser from "./logInUser.js";
import makeLoginAdmin from "./loginAdmin.js";

export const signUpUseCase = makeSignUpUser({ userList });
export const loginUserUseCase = makeLoginUser({ userList });
export const logAdminUseCase = makeLoginAdmin({
    adminData: {
        email: "admin@admin.com",
        password:
            "$2b$10$ob3JIsm4gqtND91KnKhp.eFZKotvwSDqz5WdYfJoZE5ZHW2LpRh8i",
    },
});
