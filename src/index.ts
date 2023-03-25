import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./application.module";

async function bootstrap() {
  const application = await NestFactory.create(ApplicationModule);
  application.useGlobalPipes(new ValidationPipe({ transform: true }));

  await application.listen(3000);
}

bootstrap();
