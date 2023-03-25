import { Module } from "@nestjs/common";
import { AuthenticationModule } from "./modules";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthenticationModule,
  ],
})
export class ApplicationModule {}
