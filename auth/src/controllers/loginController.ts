import adaptRequest from "../lib/adaptRequest.js";
import { loginUserUseCase } from "../useCases/index.js";

export default async function loginController(req, res) {
    const httpRequest = adaptRequest(req);
    try {
        const data = await loginUserUseCase(req.body);
        res.status(200).json({
            success: true,
            message: "User Logged in",
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
}
