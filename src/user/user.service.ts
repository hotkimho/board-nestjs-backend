import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { SignupRequestDto } from '../auth/dto/signup.request.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signup(signupRequestDto: SignupRequestDto): Promise<void> {
    return await this.userRepository.createUser(signupRequestDto);
  }

  async findByUsername(username: string) {
    console.log('start findUsername ');
    return await this.userRepository.findByUsername(username);
  }
}
