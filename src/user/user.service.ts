import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async signup(
    username: string,
    password: string,
    email: string,
    nickname: string,
  ) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user) {
      throw new HttpException('사용자가 이미 존재합니다.', 400);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.userRepository.save({
      username,
      password: hashedPassword,
      email,
      nickname,
    });
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOne({
      where: { username },
      select: ['id', 'username', 'password'],
    });
  }
}
