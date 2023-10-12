import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'http://192.168.1.23:3000'],
    methods: 'GET, PUT, POST, DELETE, PATCH', // Corregido aquí
    credentials: true
  });
  await app.listen(3001);
}

bootstrap();
