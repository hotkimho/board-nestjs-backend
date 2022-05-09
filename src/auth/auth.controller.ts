import {
  Body,
  Controller,
  Post,
  UseFilters,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpExceptionFilter } from '../httpException.filter';
import { UserService } from '../user/user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignupRequestDto } from './dto/signup.request.dto';
import { User } from '../common/decorators/user.decorator';
import { SigninRequestDto } from './dto/signin.request.dto';

@ApiTags('유저 인증 API')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiTags('sign up')
  @ApiOperation({
    summary: '회원가입 API',
    description: '회원가입된 유저를 생성한다',
  })
  @ApiResponse({
    status: 201,
    description: '회원가입이 성공했습니다.',
  })
  @ApiResponse({
    status: 409,
    description: '회원가입이 실패했습니다.',
  })
  @Post('signup')
  async signUp(@Body() signupRequestDto: SignupRequestDto) {
    return await this.authService.signUp(signupRequestDto);
  }

  @ApiTags('signin')
  @ApiOperation({
    summary: '로그인 API',
    description: '로그인을 실행한다',
  })
  @ApiResponse({
    status: 200,
    description: '로그인이 성공했습니다.',
  })
  @ApiResponse({
    status: 401,
    description: '로그인이 실패했습니다.',
  })
  @Post('signin')
  async signIn(
    @Body() signinRequestDto: SigninRequestDto,
  ): Promise<{ accessToken: string }> {
    console.log('start login');
    return await this.authService.signIn(signinRequestDto);
  }
}
