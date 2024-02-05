export default function makeUserList({ database }) {
    return Object.freeze({
        add: async function add(userData: {
            email: string;
            username: string;
            password: string;
        }) {
            console.log("userData db userlist", userData);

            return await database.create(userData);
        },
        findByEmail: async function findByEmail(email: string) {
            return await database.findOne({ email });
        },
    });
}