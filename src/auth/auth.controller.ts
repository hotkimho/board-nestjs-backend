import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignupRequestDto } from './dto/signup.request.dto';
import { HttpExceptionFilter } from '../httpException.filter';
import { LocalAuthGuard } from './local.auth.guard';

@Controller('auth')
@UsePipes(ValidationPipe)
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private authService: AuthService) {}
}
