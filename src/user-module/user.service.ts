import { Injectable } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[];
  getUser(): string {
    return 'Hello World!';
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }
}
