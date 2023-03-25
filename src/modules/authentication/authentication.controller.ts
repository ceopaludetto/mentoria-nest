import { Body, Controller, Post } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationInput } from "./dtos";

@Controller("/auth")
export class AuthenticationController {
  public constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("/login")
  public async login(@Body() body: AuthenticationInput) {
    console.log(body);
    return {};
  }

  @Post("/register")
  public async register() {}
}
