import loginController from "../controllers/login.controller.js";
import signUpController from "../controllers/signup.controller.js";
import makeRoutes from "./auth.routes.js";

export default makeRoutes({ loginController, signUpController });
