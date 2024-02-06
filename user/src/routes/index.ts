import makeRoutes from "./userRoutes.js";
import { getAllUsersUseCase } from "../useCases/index.js";

export default makeRoutes({ getAllUsersUseCase });
