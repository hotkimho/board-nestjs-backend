import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../auth/user.repository';
import { SignupRequestDto } from '../auth/dto/signup.request.dto';
import { SigninRequestDto } from '../auth/dto/signin.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  // constructor(
  //   @InjectRepository(UserRepository)
  //   private userRepository: UserRepository,
  //   private jwtService: JwtService,
  // ) {}
  //
  // async signUp(signupRequestDto: SignupRequestDto): Promise<void> {
  //   return await this.userRepository.createUser(signupRequestDto);
  // }
  //
  // async signIn(
  //   signInRequestDto: SigninRequestDto,
  // ): Promise<{ accessToken: string }> {
  //   const { username, password } = signInRequestDto;
  //   const user = await this.userRepository.findOne({ username });
  //
  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     const payload = { id: user.id };
  //     const accessToken = this.jwtService.sign(payload);
  //     return {
  //       accessToken,
  //     };
  //   }
  //   throw new UnauthorizedException('로그인이 실패했습니다');
  // }
  // async findByUsername(username: string) {
  //   console.log('start findUsername ');
  //   return await this.userRepository.findByUsername(username);
  // }
}
