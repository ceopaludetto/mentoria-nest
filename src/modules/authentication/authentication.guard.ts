import { AuthGuard } from "@nestjs/passport";

export class AuthenticationGuard extends AuthGuard("jwt") {}
