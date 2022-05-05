import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { commonDate } from './auth.common.date';
import { Post } from './post';
import { Comment } from './comment';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User extends commonDate {
  @ApiProperty({
    example: 1,
    description: '사용자 id',
  })
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @ApiProperty({
    example: 'rlagh123',
    description: '사용자 username',
  })
  @Column({
    type: 'varchar',
    name: 'username',
    unique: true,
    length: 10,
  })
  username: string;

  @ApiProperty({
    example: '!rlagh123',
    description: '사용자 password',
  })
  @Column({
    type: 'varchar',
    select: false,
    length: 50,
  })
  password: string;

  @ApiProperty({
    example: 'kimho',
    description: '사용자 nickname',
  })
  @Column({
    type: 'varchar',
    name: 'nickname',
    unique: true,
    length: 10,
  })
  nickname: string;

  @ApiProperty({
    example: 'rlaghekd777@naver.com',
    description: '사용자 email',
  })
  @Column({
    type: 'varchar',
    name: 'email',
    unique: true,
    length: 30,
  })
  email: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
