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
let LoginService = class LoginService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async login(userData) {
        return this.userModel
            .find()
            .exec()
            .then((users) => {
            const foundUser = users.find((user) => {
                if (user.name === userData.username &&
                    user.password === userData.password) {
                    return user;
                }
            });
            return foundUser
                ? {
                    message: 'success',
                    userName: userData.username,
                }
                : {
                    message: 'incorrect username or password',
                };
        });
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(users_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], LoginService);
//# sourceMappingURL=login.service.js.map