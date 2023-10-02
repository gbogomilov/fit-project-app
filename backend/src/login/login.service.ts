import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../users/users.model";
import { JwtAuthService } from "src/jwt/jwt.service";
import { CacheService } from "src/cache/cache.service";
import { decode } from "jsonwebtoken";

const ttl = 864000 * 100; //milliseconds to clear cache
const userTokens = "userTokens"; // key for token cache

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtAuthService: JwtAuthService,
    private readonly memoryCache: CacheService
  ) {}

  async autoLogin(token: string): Promise<User[]> {
    const cacheArray: Array<{ id: number; token: string }> =
      (await this.memoryCache.get(userTokens)) || [];

    const foundToken = cacheArray.find((item) => item.token === token);
    const decodedToken = decode(token) as unknown as { username: string };

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
            } as unknown as User[];
          } else {
            return {
              message: "token expired",
            } as unknown as User[];
          }
        });
    } else {
      return {
        message: "incorrect username or password",
      } as unknown as User[];
    }
  }

  async logout(token: string): Promise<{ message: string }> {
    const cacheArray: Array<{ id: number; token: string }> =
      (await this.memoryCache.get(userTokens)) || [];

    const newCacheArray = cacheArray.filter((item) => item.token !== token);
    console.log(newCacheArray);

    await this.memoryCache.set(userTokens, newCacheArray, ttl);
    return { message: "loggedOut" };
  }

  async login(userData: { email: string; password: string }): Promise<User[]> {
    const token = await this.jwtAuthService.generateToken({
      username: userData.email,
    });

    const setToken = async () => {
      const cacheArray: Array<{ id: number; token: string }> =
        (await this.memoryCache.get(userTokens)) || [];

      const userId = cacheArray.length - 1 === -1 ? 0 : cacheArray.length - 1;

      console.log(cacheArray);

      await this.memoryCache.set(
        userTokens,
        [...cacheArray, { id: userId, token }],
        ttl
      );

      console.log(await this.memoryCache.get(userTokens));
    };

    return this.userModel
      .find()
      .exec()
      .then((users) => {
        const foundUser = users.find((user) => {
          if (
            user.email === userData.email &&
            user.password === userData.password
          ) {
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
          } as unknown as User[];
        } else {
          return {
            message: "token expired",
          } as unknown as User[];
        }
      });
  }
}
