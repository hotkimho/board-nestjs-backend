import { PickType } from '@nestjs/swagger';
import { User } from '../entities/user';

export class SignupRequestDto extends PickType(User, [
  'username',
  'password',
  'nickname',
  'email',
] as const) {}
