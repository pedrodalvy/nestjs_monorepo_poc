import { Injectable } from '@nestjs/common';

@Injectable()
export class AppOneService {
  getHello(): string {
    return 'App One works!';
  }
}
