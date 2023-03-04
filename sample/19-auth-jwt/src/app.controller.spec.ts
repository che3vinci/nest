import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, UsersModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
  it('login', () => {
    //===========================================================================
    // $ echo $'{"username":"john","password":"changeme"}' | http POST $'http://localhost:3000/auth/login'   "Content-Type:application/json"  -v
    //返回结果：
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY3NzkyNzUzOCwiZXhwIjoxNjc3OTI3NTk4fQ.d7z8sav2Wn8x_C0zck0WvkqCkRWv8w3WOxZjyZYwluY
    //===========================================================================
  });
  it('profile', () => {
    //默认有效期只有1分钟，所以需要在1分钟内测试
    //$ http get $'http://localhost:3000/profile' Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY3NzkyODcyMCwiZXhwIjoxNjc3OTI4NzgwfQ.L0GlCaRmkh-Ot2HS53NiMqYNDe0-X0TxCJQCocA1hTI"   -v
  });
});
