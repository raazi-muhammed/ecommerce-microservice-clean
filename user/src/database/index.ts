import userModel from "../models/userModel.js";
import makeUserList from "./userList.js";

export const userList = makeUserList({ database: userModel });

export type UserList = typeof userList;
