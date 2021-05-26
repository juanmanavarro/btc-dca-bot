import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram/telegram.service';
import { DcaService } from './dca/dca.service';
import { ScheduleModule } from '@nestjs/schedule';
import { BinanceService } from './binance/binance.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [TelegramService, DcaService, BinanceService, BinanceService],
})
export class AppModule { }
