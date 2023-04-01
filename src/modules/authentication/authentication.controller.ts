import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationSignInInput, AuthenticationSignUpInput } from "./dtos";
import { AuthenticationGuard } from "./authentication.guard";
import { CurrentUser } from "./authentication.decorator";
import { User } from "@prisma/client";

@Controller("/auth")
export class AuthenticationController {
  public constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("/signin")
  public async signIn(@Body() body: AuthenticationSignInInput) {
    return this.authenticationService.signIn(body);
  }

  @Post("/signup")
  public async signUp(@Body() body: AuthenticationSignUpInput) {
    return this.authenticationService.signUp(body);
  }

  @Get("/profile")
  @UseGuards(AuthenticationGuard)
  public async profile(@CurrentUser() user: User) {
    return user;
  }
}
