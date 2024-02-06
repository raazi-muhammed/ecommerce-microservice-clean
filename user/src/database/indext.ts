import userModel from "../models/userModel.js";
import makeUserList from "../database/userList.js";

export const userList = makeUserList({ database: userModel });
