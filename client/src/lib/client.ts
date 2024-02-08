import axios from "axios";
import cookies from "js-cookie";
type Options = {
    toast?: { error: (str: string) => void; success: (str: string) => void };
};

export default class API {
    baseUrl: string;
    token: string;
    constructor() {
        this.baseUrl = "http://";
        this.token = cookies.get("__emc-user-token") || "";
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
    product() {
        this.baseUrl += "localhost:4002/api/product";
        return this;
    }
    cart() {
        this.baseUrl += "localhost:4003/api/cart";
        return this;
    }

    async get(url: string, params = {}, options: Options = {}) {
        return axios({
            baseURL: this.baseUrl,
            headers: { Authorization: `Bearer ${this.token}` },
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

    async post(url: string, { data = {}, params = {} }, options: Options = {}) {
        return axios({
            baseURL: this.baseUrl,
            headers: { Authorization: `Bearer ${this.token}` },
            url,
            method: "POST",
            withCredentials: true,
            data,
            params,
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
    async patch(
        url: string,
        { data = {}, params = {} },
        options: Options = {}
    ) {
        return axios({
            baseURL: this.baseUrl,
            headers: { Authorization: `Bearer ${this.token}` },
            url,
            method: "PATCH",
            withCredentials: true,
            data,
            params,
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
