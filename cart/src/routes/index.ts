import buildCartRoutes from "./cartRoutes.js";
import { getAllCartUseCase } from "../useCases/index.js";

export default buildCartRoutes({ getAllCartUseCase });
