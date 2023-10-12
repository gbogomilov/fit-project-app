import { Module } from "@nestjs/common";
import { caching } from "cache-manager";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "./users/users.controller";
import { UsersService } from "./users/users.service";
import { User, UserSchema } from "./users/users.model";
import { LoginController } from "./login/login.controller";
import { LoginService } from "./login/login.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtAuthService } from "./jwt/jwt.service";
import { CacheService } from "./cache/cache.service";
import { AutoLoginController } from "./login/autologin.controller";
import { LogoutController } from "./login/logout.controller";
import { ExersisesController } from "./exersises/exersises.controller";
import { ExersisesService } from "./exersises/exersises.service";
import { Exersies, ExersiesSchema } from "./exersises/exersises.model";
@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://gbogomilov:g5sQDSQxrREKE78j@cluster0.n35kjmi.mongodb.net/?retryWrites=true&w=majority"
    ),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Exersies.name, schema: ExersiesSchema },
    ]),
    JwtModule.register({ secret: "hard!to-guess_secret" }),
  ],
  controllers: [
    AppController,
    UsersController,
    LoginController,
    AutoLoginController,
    LogoutController,
    ExersisesController,
  ],
  providers: [
    AppService,
    UsersService,
    LoginService,
    JwtAuthService,
    CacheService,
    ExersisesService,
  ],
})
export class AppModule {}
