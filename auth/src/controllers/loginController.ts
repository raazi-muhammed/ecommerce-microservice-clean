import { loginUserUseCase } from "../useCases/index.js";

export default async function loginController(req) {
    const data = await loginUserUseCase(req.body);
}
