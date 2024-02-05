import axios from "axios";
const server = "http://localhost:4000/api/auth";

axios.defaults.baseURL = server;
type Options = {
    toast?: { error: (str: string) => void; success: (str: string) => void };
};

async function get(url: string, params = {}, options: Options = {}) {
    return axios({
        url,
        method: "GET",
        withCredentials: true,
        params,
    })
        .then((res) => res.data)
        .catch((err) => {
            console.log(err);
            if (options?.toast) {
                options.toast.error(
                    err.response?.data?.message || "Invalid Details"
                );
            }
        });
}

async function post(url: string, data = {}, options: Options = {}) {
    return axios({
        url,
        method: "POST",
        withCredentials: true,
        data,
    })
        .then((res) => {
            if (options?.toast) {
                options.toast.success(res?.data?.message || "Successful");
            }
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            if (options?.toast) {
                options.toast.error(
                    err.response?.data?.message || "Invalid Details"
                );
            }
            return err.response.data;
        });
}

export default {
    get,
    post,
};
