"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_model_1 = require("./users/users.model");
const login_controller_1 = require("./login/login.controller");
const login_service_1 = require("./login/login.service");
const jwt_1 = require("@nestjs/jwt");
const jwt_service_1 = require("./jwt/jwt.service");
const cache_service_1 = require("./cache/cache.service");
const autologin_controller_1 = require("./login/autologin.controller");
const logout_controller_1 = require("./login/logout.controller");
const exersises_controller_1 = require("./exersises/exersises.controller");
const exersises_service_1 = require("./exersises/exersises.service");
const exersises_model_1 = require("./exersises/exersises.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb+srv://gbogomilov:g5sQDSQxrREKE78j@cluster0.n35kjmi.mongodb.net/?retryWrites=true&w=majority"),
            mongoose_1.MongooseModule.forFeature([
                { name: users_model_1.User.name, schema: users_model_1.UserSchema },
                { name: exersises_model_1.Exersies.name, schema: exersises_model_1.ExersiesSchema },
            ]),
            jwt_1.JwtModule.register({ secret: "hard!to-guess_secret" }),
        ],
        controllers: [
            app_controller_1.AppController,
            users_controller_1.UsersController,
            login_controller_1.LoginController,
            autologin_controller_1.AutoLoginController,
            logout_controller_1.LogoutController,
            exersises_controller_1.ExersisesController,
        ],
        providers: [
            app_service_1.AppService,
            users_service_1.UsersService,
            login_service_1.LoginService,
            jwt_service_1.JwtAuthService,
            cache_service_1.CacheService,
            exersises_service_1.ExersisesService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map