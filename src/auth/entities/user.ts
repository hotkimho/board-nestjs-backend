import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { commonDate } from './auth.common.date';
import { Post } from './post';
import { Comment } from './comment';

@Entity()
export class User extends commonDate {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    name: 'username',
    unique: true,
    length: 10,
  })
  username: string;

  @Column({
    type: 'varchar',
    select: false,
    length: 50,
  })
  password: string;

  @Column({
    type: 'varchar',
    name: 'nickname',
    unique: true,
    length: 10,
  })
  nickname: string;

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
