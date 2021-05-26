import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram/telegram.service';
import { DcaService } from './dca/dca.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, TelegramService, DcaService],
})
export class AppModule {}
