export default function makeUserList({ database }) {
    return Object.freeze({
        getAll: async () => {
            return await database.find();
        },
    });
}
