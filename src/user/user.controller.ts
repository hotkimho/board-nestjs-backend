import { Body, Controller, Post, UseGuards, Response } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignupRequestDto } from '../auth/dto/signup.request.dto';
import { UserService } from './user.service';
import { User } from '../common/decorators/user.decorator';

@ApiTags('유저 인증 API')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
}
