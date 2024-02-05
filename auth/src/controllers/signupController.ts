import adaptRequest from "../lib/adaptRequest.js";
import { signUpUseCase } from "../useCases/index.js";

export default async function signUpController(req, res) {
    const httpRequest = adaptRequest(req);
    try {
        const data = await signUpUseCase(req.body);
        res.status(200).json({
            success: true,
            message: "User created",
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
}
