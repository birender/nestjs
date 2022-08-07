// Core Library
import { NestFactory } from '@nestjs/core';
// ### For Validation 
// Required Packages npm install class-validator and npm install class-transformer
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(3000);
}
bootstrap(); // Main Function For Call
