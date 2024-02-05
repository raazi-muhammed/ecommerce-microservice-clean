import { logAdmin as loginAdminEntity } from "../auth/index.js";

export default function makeLoginAdmin({ adminData }) {
    return async function loginUser(input: {
        email: string;
        password: string;
    }) {
        return await loginAdminEntity({ input, adminData: adminData });
    };
}
