import loginController from "../controllers/loginController.js";
import signUpController from "../controllers/signupController.js";
import loginAdminController from "../controllers/loginAdminController.js";
import makeRoutes from "./authRoutes.js";

export default makeRoutes({
    loginController,
    signUpController,
    loginAdminController,
});
