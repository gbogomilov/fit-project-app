import { Controller, Get, Headers } from "@nestjs/common";
import { LoginService } from "./login.service";

@Controller("logout")
export class LogoutController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async autoLogin(@Headers("authorization") authorization: string) {
    return await this.loginService.logout(authorization.split(" ")[1]);
  }
}
