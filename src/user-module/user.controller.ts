import { Controller, Get, Post } from '@nestjs/common';
@Controller('user')
export class UserController {
//   constructor() {}

  @Get()
  getHello(): string {
    return 'hello';
  }

  @Post()
  postUser(): string {
    return 'hello';
  }
}
