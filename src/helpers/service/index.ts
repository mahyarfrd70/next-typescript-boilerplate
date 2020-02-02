import Axios, { Method, AxiosPromise, AxiosResponse, AxiosInstance } from "axios";
import config from "./config";
import Auth from "../auth";

class Api {
    private static instance;
    private axiosInstance: AxiosInstance;
    private constructor() {
        this.axiosInstance = Axios.create({
            baseURL: config.baseURL,
            headers: config.headers
        });
    }

    static getInstance = (): Api => {
        if (!Api.instance && !(Api.instance instanceof Api)) {
            Api.instance = new Api();
        }
        return Api.instance;
    };

    buildHeaders = (options): object => {
        const headers = {
            ...options?.headers
        };
        if (options && options.auth) {
            headers.Authorization = `${config.tokenType} ${Auth.auth}`;
        }
        return headers;
    };

    axios = (method: Method, url: string, data: object, options): AxiosPromise => {
        return this.axiosInstance({
            method,
            url,
            headers: this.buildHeaders(options) ? this.buildHeaders(options) : {},
            ...(method === "GET" ? { params: data } : { data })
        });
    };

    get = async (path: string, params: object, options = {}): Promise<AxiosResponse | Error> => {
        return await this.axios("GET", path, params, options);
    };
    post = async (path: string, body: object, options = {}): Promise<AxiosResponse | Error> => {
        return await this.axios("POST", path, body, options);
    };
    put = async (path: string, body: object, options = {}): Promise<AxiosResponse | Error> => {
        return await this.axios("PUT", path, body, options);
    };
    delete = async (path: string, options = {}): Promise<AxiosResponse | Error> => {
        return await this.axios("DELETE", path, undefined, options);
    };
}

export default Api.getInstance();
