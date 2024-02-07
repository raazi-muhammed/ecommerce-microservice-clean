import { logAdminUseCase } from "../useCases/index.js";

export default async function loginAdminController(req) {
    return await logAdminUseCase(req.body);
}
