import { signUpUseCase } from "../useCases/index.js";

export default async function signUpController(req) {
    const data = await signUpUseCase(req.body);
}
