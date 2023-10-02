"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const users_model_1 = require("../users/users.model");
const jwt_service_1 = require("../jwt/jwt.service");
const cache_service_1 = require("../cache/cache.service");
const jsonwebtoken_1 = require("jsonwebtoken");
const ttl = 864000 * 100;
const userTokens = "userTokens";
let LoginService = class LoginService {
    constructor(userModel, jwtAuthService, memoryCache) {
        this.userModel = userModel;
        this.jwtAuthService = jwtAuthService;
        this.memoryCache = memoryCache;
    }
    async autoLogin(token) {
        const cacheArray = (await this.memoryCache.get(userTokens)) || [];
        const foundToken = cacheArray.find((item) => item.token === token);
        const decodedToken = (0, jsonwebtoken_1.decode)(token);
        if (foundToken) {
            return this.userModel
                .find()
                .exec()
                .then((users) => {
                const foundUser = users.find((user) => {
                    if (user.email === decodedToken.username) {
                        return user;
                    }
                });
                if (foundUser) {
                    return {
                        name: foundUser.name,
                        email: foundUser.email,
                        token,
                    };
                }
                else {
                    return {
                        message: "token expired",
                    };
                }
            });
        }
        else {
            return {
                message: "incorrect username or password",
            };
        }
    }
    async logout(token) {
        const cacheArray = (await this.memoryCache.get(userTokens)) || [];
        const newCacheArray = cacheArray.filter((item) => item.token !== token);
        console.log(newCacheArray);
        await this.memoryCache.set(userTokens, newCacheArray, ttl);
        return { message: "loggedOut" };
    }
    async login(userData) {
        const token = await this.jwtAuthService.generateToken({
            username: userData.email,
        });
        const setToken = async () => {
            const cacheArray = (await this.memoryCache.get(userTokens)) || [];
            const userId = cacheArray.length - 1 === -1 ? 0 : cacheArray.length - 1;
            console.log(cacheArray);
            await this.memoryCache.set(userTokens, [...cacheArray, { id: userId, token }], ttl);
            console.log(await this.memoryCache.get(userTokens));
        };
        return this.userModel
            .find()
            .exec()
            .then((users) => {
            const foundUser = users.find((user) => {
                if (user.email === userData.email &&
                    user.password === userData.password) {
                    return user;
                }
            });
            if (foundUser) {
                setToken();
                return {
                    message: "success",
                    name: foundUser.name,
                    email: foundUser.email,
                    token,
                };
            }
            else {
                return {
                    message: "token expired",
                };
            }
        });
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(users_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_service_1.JwtAuthService,
        cache_service_1.CacheService])
], LoginService);
//# sourceMappingURL=login.service.js.map