import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('유저 인증 API')
export class AuthController {
  @Post('signup')
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
  signUp(): string {
    return 'signup code';
  }

  @Post('signin')
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
  signIn(): string {
    return 'signIn code';
  }
}
