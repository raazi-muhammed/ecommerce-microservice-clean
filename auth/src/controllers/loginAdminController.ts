import { logAdminUseCase } from "../useCases/index.js";

export default async function loginAdminController(req, res) {
    try {
        const data = await logAdminUseCase(req.body);
        res.status(200).json({
            success: true,
            message: "admin logged in",
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
}
