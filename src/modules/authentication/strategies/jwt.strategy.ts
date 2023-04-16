import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "../../prisma";
import { TokenPayload } from "~/utils/types";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(readonly configService: ConfigService, private readonly prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("AUTH_SECRET"),
    });
  }

  public async validate(payload: TokenPayload) {
    return this.prismaService.user.findUniqueOrThrow({ where: { id: payload.id } });
  }
}
