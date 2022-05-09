import { Body, Controller, Post, UseGuards, Response } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignupRequestDto } from '../auth/dto/signup.request.dto';
import { LocalAuthGuard } from '../auth/local.auth.guard';
import { UserService } from './user.service';
import { User } from '../common/decorators/user.decorator';

@ApiTags('유저 인증 API')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

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
  async signUp(@Body() data: SignupRequestDto) {
    return await this.userService.signup(data);
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
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signIn(@User() user): string {
    return user;
  }
}
