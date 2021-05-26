import { Injectable } from '@nestjs/common';
const TelegramBot = require('node-telegram-bot-api');
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramService {

  bot: any;

  constructor(private configService: ConfigService) {
    this.bot = new TelegramBot(this.configService.get('TELEGRAM_TOKEN'));
  }

  sendMessage(message: string): void {
    this.bot.sendMessage(this.configService.get('TELEGRAM_CHAT_ID'), message);
  }
}
