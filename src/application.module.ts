import { Module } from "@nestjs/common";
import { AuthenticationModule, PrismaModule } from "./modules";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthenticationModule,
  ],
})
export class ApplicationModule {}
