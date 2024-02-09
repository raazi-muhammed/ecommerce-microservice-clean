import { verifyAdminUseCase } from "../useCases/index.js";

export default async function loginController(req) {
    if (!req.headers.authorization) throw new Error("No token found");
    return await verifyAdminUseCase(req.headers.authorization);
}
