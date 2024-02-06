import { logAdminUseCase } from "../useCases/index.js";

export default async function loginAdminController(req) {
    const data = await logAdminUseCase(req.body);
}
