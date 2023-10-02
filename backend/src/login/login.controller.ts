import { Controller, Post, Body, Get, Headers } from "@nestjs/common";
import { LoginService } from "./login.service";

@Controller("login")
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() userData: any) {
    return await this.loginService.login(userData);
  }
  @Get()
  async autoLogin(@Headers("authorization") authorization: string) {
    console.log(authorization);
    return await this.loginService.autoLogin(authorization);
  }
}
