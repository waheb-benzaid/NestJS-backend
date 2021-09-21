import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './interface/user';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // HTTP Get users
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  // HTTP Post users
  @Post()
  postUser(@Body() user: User): User {
    return this.userService.addUser(user);
  }

  // HTTP Delete users
  @Delete()
  deleteUser(@Param('email') email: string): User[] {
    return this.userService.deleteUser(email);
  }
}
