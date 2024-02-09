import makeRoutes from "./userRoutes.js";
import { verifyUser } from "../lib/verifyUser.js";
import { verifyAdmin } from "../lib/verifyAdmin.js";
import {
    getAllUsersUseCase,
    blockUserUserCase,
    unBlockUserUserCase,
} from "../useCases/index.js";

export default makeRoutes({
    verifyUser,
    verifyAdmin,
    getAllUsersUseCase,
    blockUserUserCase,
    unBlockUserUserCase,
});
