import { PickType } from '@nestjs/swagger';
import { User } from '../entities/user';

export class SigninRequestDto extends PickType(User, [
  'username',
  'password',
] as const) {}
