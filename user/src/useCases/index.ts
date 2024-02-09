import makeGetAllUsers from "./getAllUsers.js";
import { userList } from "../database/index.js";
import makeBlockUser from "./blockUser.js";
import makeUnBlockUser from "./unBlockUser.js";

export const getAllUsersUseCase = makeGetAllUsers({ userList });
export const blockUserUserCase = makeBlockUser({ userList });
export const unBlockUserUserCase = makeUnBlockUser({ userList });
