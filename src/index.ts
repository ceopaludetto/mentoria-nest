import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./application.module";
import { PrismaService } from "./modules";

async function bootstrap() {
  const application = await NestFactory.create(ApplicationModule);
  application.useGlobalPipes(new ValidationPipe({ transform: true }));

  const prismaService = application.get(PrismaService);
  await prismaService.enableShutdownHooks(application);

  await application.listen(3000);
}

bootstrap();
