export default function makeGetAllUsers({ userList }) {
    return async function getAllUsers() {
        return await userList.getAll();
    };
}
