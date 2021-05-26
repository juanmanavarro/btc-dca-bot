import { Injectable } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { TelegramService } from 'src/telegram/telegram.service';

@Injectable()
export class DcaService {

  constructor(
    private readonly appService: AppService,
    private readonly telegramService: TelegramService
  ) {}

  async order(): Promise<void> {
    try {
      const balance = await this.appService.getBalance();
      if (balance <= 0) {
        throw new Error('Account has insufficient balance for requested action');
      }

      await this.appService.sendOrder();
      this.telegramService.sendMessage('New order sent');
    } catch (error) {
      this.telegramService.sendMessage(error.message);
    }
  }
}
