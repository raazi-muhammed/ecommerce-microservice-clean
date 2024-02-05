import userModel from "../modal/userModel.js";
import makeUserList from "./userList.js";

export const userList = makeUserList({ database: userModel });
