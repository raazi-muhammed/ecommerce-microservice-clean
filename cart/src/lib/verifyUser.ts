import axios from "axios";

export async function verifyUser(req) {
    return axios
        .get("http://auth:4000/api/auth/current-user", {
            headers: {
                Authorization: req.headers.authorization,
            },
        })
        .then((response) => {
            console.log({ data: response.data.data });
            return response.data.data;
        })
        .catch((err) => {
            console.log(err);
            return null;
        });
}
