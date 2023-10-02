import { Controller, Get, Headers } from "@nestjs/common";
import { LoginService } from "./login.service";

@Controller("auto-login")
export class AutoLoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async autoLogin(@Headers("authorization") authorization: string) {
    console.log(authorization.split(" ")[1]);
    return await this.loginService.autoLogin(authorization.split(" ")[1]);
  }
}
