import buildCartRoutes from "./cartRoutes.js";
import {
    getAllCartUseCase,
    getUserCartUseCase,
    removeFromCartUseCase,
} from "../useCases/index.js";
import { verifyUser } from "../lib/verifyUser.js";

export default buildCartRoutes({
    verifyUser,
    getAllCartUseCase,
    getUserCartUseCase,
    removeFromCartUseCase,
});
