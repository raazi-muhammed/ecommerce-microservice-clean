import makeSignUpUser from "./signUpUser.useCase.js";
import { userList } from "../database/index.js";
import makeLoginUser from "./logInUser.useCase.js";

export const signUpUseCase = makeSignUpUser({ userList });
export const loginUserUseCase = makeLoginUser({ userList });
