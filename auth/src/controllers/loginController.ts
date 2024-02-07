import { loginUserUseCase } from "../useCases/index.js";

export default async function loginController(req) {
    return await loginUserUseCase(req.body);
}
