import buildLogUser from "./logUser.js";
import buildMakeUser from "./makeUser.js";
import * as passwordHash from "../lib/passwordHash.js";
import * as token from "../lib/token.js";
import buildLogAdmin from "./logAdmin.js";

export const makeUser = buildMakeUser({ passwordHash });
export const logUser = buildLogUser({ passwordHash, token });
export const logAdmin = buildLogAdmin({ passwordHash, token });
