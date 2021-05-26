import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { TelegramService } from 'src/telegram/telegram.service';
import { BinanceService } from 'src/binance/binance.service';

@Injectable()
export class DcaService {

  constructor(
    private readonly binanceService: BinanceService,
    private readonly telegramService: TelegramService
  ) {}

  @Cron('0 0 * * 1')
  async order(): Promise<void> {
    try {
      const balance = await this.binanceService.getBalance();
      if (balance <= 0) {
        throw new Error('Account has insufficient balance for requested action');
      }

      await this.binanceService.sendOrder();
      this.telegramService.sendMessage('New order sent');
    } catch (error) {
      this.telegramService.sendMessage(error.message);
    }
  }
}
