import makeRoutes from "./userRoutes.js";
import {
    getAllUsersUseCase,
    blockUserUserCase,
    unBlockUserUserCase,
} from "../useCases/index.js";

export default makeRoutes({
    getAllUsersUseCase,
    blockUserUserCase,
    unBlockUserUserCase,
});
