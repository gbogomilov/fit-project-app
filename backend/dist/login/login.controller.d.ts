import { LoginService } from "./login.service";
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(userData: any): Promise<import("../users/users.model").User[]>;
    autoLogin(authorization: string): Promise<import("../users/users.model").User[]>;
}
