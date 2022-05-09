import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { LocalSerializer } from './local.serializer';
import { UserModule } from '../user/user.module';
import { User } from '../entities/user';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ session: true }),
    UserModule,
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer],
  controllers: [],
  exports: [AuthService],
})
export class AuthModule {}
