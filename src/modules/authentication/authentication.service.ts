import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";
import { PrismaService } from "../prisma";
import { User } from "@prisma/client";
import { AuthenticationSignInInput, AuthenticationSignUpInput } from "./dtos";

@Injectable()
export class AuthenticationService {
  public constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService) {}

  public async signIn({ email, password }: AuthenticationSignInInput) {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (!user) throw new UnauthorizedException();
    if (!(await compare(password, user.password))) throw new UnauthorizedException();

    const token = await this.createToken(user);
    return { user, token };
  }

  public async signUp({ name, email, password }: AuthenticationSignUpInput) {
    const user = await this.prismaService.user.create({
      data: { name, email, password: await hash(password, 10) },
    });

    const token = await this.createToken(user);
    return { user, token };
  }

  private async createToken(user: User) {
    return this.jwtService.signAsync({ id: user.id });
  }
}
