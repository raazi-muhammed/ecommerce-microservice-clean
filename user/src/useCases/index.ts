import makeGetAllUsers from "./getAllUsers.js";
import { userList } from "../database/indext.js";

export const getAllUsersUseCase = makeGetAllUsers({ userList });
