import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async validateUser(username: string, password: string) {
    console.log('start validateUser', username, password);
    const user = await this.userRepository.findOne({
      where: { username },
      select: ['id', 'username', 'password'],
    });
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
