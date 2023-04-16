import { Module } from "@nestjs/common";
import { AuthenticationModule, PrismaModule } from "./modules";
import { ConfigModule } from "@nestjs/config";
import { TodoModule } from "./modules/todo";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthenticationModule,
    TodoModule,
  ],
})
export class ApplicationModule {}
