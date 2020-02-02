import Api from "../service";
import config from "./config";

class Auth {
    private static instance;
    tokenKey = config.tokenKey;
    auth = localStorage.getItem(this.tokenKey) || "";
    private constructor() {}

    static getInstance = (): Auth => {
        if (!Auth.instance && !(Auth.instance instanceof Auth)) {
            Auth.instance = new Auth();
        }
        return Auth.instance;
    };

    getAuth = async (): Promise<object> => {
        if (this.auth) {
            try {
                const response = await Api.get("/user", {
                    auth: true
                });
                return response;
            } catch (err) {
                //@TODO:: checkRefresh token
                this.logout(undefined);
                throw "";
            }
        }
        throw "";
    };

    setAuth = (token: string): void => {
        localStorage.setItem(this.tokenKey, token);
        this.auth = token;
    };

    logout = (callback: Function): void => {
        localStorage.removeItem(this.tokenKey);
        this.auth = "";
        if (callback) {
            callback();
        }
    };
}

export default Auth.getInstance();
