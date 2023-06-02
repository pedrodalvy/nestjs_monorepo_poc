import { Controller, Get } from '@nestjs/common';
import { AppTwoService } from './app-two.service';

@Controller()
export class AppTwoController {
  constructor(private readonly appService: AppTwoService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
