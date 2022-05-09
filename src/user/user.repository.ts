import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user';
import { SignupRequestDto } from '../auth/dto/signup.request.dto';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(signupRequestDto: SignupRequestDto): Promise<void> {
    const { username, password, email, nickname } = signupRequestDto;

    const user = await this.findOne({
      where: { username, email, nickname },
    });
    if (user) {
      throw new BadRequestException('사용자가 이미 존재합니다');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.save({
      username,
      password: hashedPassword,
      email,
      nickname,
    });
  }

  async findByUsername(username: string): Promise<User> {
    return await this.findOne({
      where: { username },
      select: ['id', 'username', 'password'],
    });
  }
}
