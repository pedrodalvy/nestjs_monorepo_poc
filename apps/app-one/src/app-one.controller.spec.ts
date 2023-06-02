import { Test, TestingModule } from '@nestjs/testing';
import { AppOneController } from './app-one.controller';
import { AppOneService } from './app-one.service';

describe('AppOneController', () => {
  let appOneController: AppOneController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppOneController],
      providers: [AppOneService],
    }).compile();

    appOneController = app.get<AppOneController>(AppOneController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appOneController.getHello()).toBe('Hello World!');
    });
  });
});
