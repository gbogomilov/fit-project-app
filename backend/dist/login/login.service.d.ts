import { Model } from "mongoose";
import { User } from "../users/users.model";
import { JwtAuthService } from "src/jwt/jwt.service";
import { CacheService } from "src/cache/cache.service";
export declare class LoginService {
    private userModel;
    private readonly jwtAuthService;
    private readonly memoryCache;
    constructor(userModel: Model<User>, jwtAuthService: JwtAuthService, memoryCache: CacheService);
    autoLogin(token: string): Promise<User[]>;
    logout(token: string): Promise<{
        message: string;
    }>;
    login(userData: {
        email: string;
        password: string;
    }): Promise<User[]>;
}
