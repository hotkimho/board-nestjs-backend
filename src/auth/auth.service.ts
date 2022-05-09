import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string) {
    console.log('start validateUser', username, password);
    const user = await this.userService.findByUsername(username);
    console.log(user);
    if (!user) {
      return null;
    }
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }
}
