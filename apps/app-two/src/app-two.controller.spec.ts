import { Test, TestingModule } from '@nestjs/testing';
import { AppTwoController } from './app-two.controller';
import { AppTwoService } from './app-two.service';

describe('AppController', () => {
  let appController: AppTwoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppTwoController],
      providers: [AppTwoService],
    }).compile();

    appController = app.get<AppTwoController>(AppTwoController);
  });

  describe('root', () => {
    it('should return "App Two works!"', () => {
      expect(appController.getHello()).toBe('App Two works!');
    });
  });
});
