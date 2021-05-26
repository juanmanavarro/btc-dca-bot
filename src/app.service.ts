import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Binance from 'binance-api-node';

@Injectable()
export class AppService {

  client: any;

  constructor(private configService: ConfigService) {
    this.client = Binance({
      apiKey: this.configService.get<string>('BINANCE_KEY'),
      apiSecret: this.configService.get<string>('BINANCE_SECRET'),
    });
  }

  async getBalance(): Promise<number> {
    const res = await this.client.accountInfo();

    return parseFloat(res.balances.find(b => b.asset === 'EUR').free);
  }

  async sendOrder(): Promise<any> {
    return await this.client.order({
      symbol: 'BTCEUR',
      side: 'BUY',
      type: 'MARKET',
      quoteOrderQty: '10',
    });
  }
}
