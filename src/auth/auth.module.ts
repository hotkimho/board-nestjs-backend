import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { Post } from '../entities/post';
import { Comment } from '../entities/comment';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { LocalSerializer } from './local.serializer';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Post, Comment]),
    PassportModule.register({ session: true }),
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer],
  controllers: [],
  exports: [AuthService],
})
export class AuthModule {}
