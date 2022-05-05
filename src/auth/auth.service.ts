import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signup(
    username: string,
    password: string,
    email: string,
    nickname: string,
  ) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user) {
      throw new Error('이미 존재하는 사용자입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.userRepository.save({
      username,
      password: hashedPassword,
      email,
      nickname,
    });
  }
}
