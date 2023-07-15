
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //anteponemos esto en el path global de las rutas de las APIs
  app.setGlobalPrefix('api/v2');

  //activamos los validation pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      //transforma la data de los DTOs segun su tipo
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
    }),
  )

  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
