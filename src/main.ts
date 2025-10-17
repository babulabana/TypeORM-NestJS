// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();


import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(3000);
}
bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//  const port = process.env.PORT || 3002; // change 3001
//   await app.listen(port);
//   console.log(`Application running on port ${port}`);
// }
// bootstrap();
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(4000);  // 👈 change port
// }
// bootstrap();
