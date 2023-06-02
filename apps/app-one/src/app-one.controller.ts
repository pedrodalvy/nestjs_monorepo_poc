import { Controller, Get } from '@nestjs/common';
import { AppOneService } from './app-one.service';

@Controller()
export class AppOneController {
  constructor(private readonly appOneService: AppOneService) {}

  @Get()
  getHello(): string {
    return this.appOneService.getHello();
  }
}
