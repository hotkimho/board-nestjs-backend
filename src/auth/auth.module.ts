import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { Post } from './entities/post';
import { Comment } from './entities/comment';

@Module({
  providers: [AuthService],
  controllers: [],
  imports: [TypeOrmModule.forFeature([User, Post, Comment])],
})
export class AuthModule {}
