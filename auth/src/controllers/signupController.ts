import { signUpUseCase } from "../useCases/index.js";

export default async function signUpController(req) {
    return await signUpUseCase(req.body);
}
