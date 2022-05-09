import {
  Controller,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpExceptionFilter } from '../httpException.filter';

@Controller('auth')
@UsePipes(ValidationPipe)
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private authService: AuthService) {}
}
