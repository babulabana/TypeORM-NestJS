import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//  const port = process.env.PORT || 3002; // change 3001
//   await app.listen(port);
//   console.log(`Application running on port ${port}`);
// }
// bootstrap();
