import { Injectable } from '@nestjs/common';

@Injectable()
export class AppTwoService {
  getHello(): string {
    return 'App Two works!';
  }
}
