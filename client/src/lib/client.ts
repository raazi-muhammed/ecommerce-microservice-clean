import axios from "axios";
type Options = {
    toast?: { error: (str: string) => void; success: (str: string) => void };
};

export default class API {
    baseUrl: string;
    constructor() {
        this.baseUrl = "http://";
        return this;
    }

    auth() {
        this.baseUrl += "localhost:4000/api/auth";
        return this;
    }
    user() {
        this.baseUrl += "localhost:4001/api/user";
        return this;
    }

    async get(url: string, params = {}, options: Options = {}) {
        return axios({
            baseURL: this.baseUrl,
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

    async post(url: string, data = {}, options: Options = {}) {
        return axios({
            baseURL: this.baseUrl,
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
}
