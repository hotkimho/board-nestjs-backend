import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { commonDate } from "./auth.common.date";
import { User } from "./user";
import { Comment } from './comment';
@Entity()
export class Post extends commonDate {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 1000,
  })
  content: string;

  @Column({
    type: 'varchar',
  })
  writer: string;

  @Column({
    type: 'int',
  })
  view: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn([{referencedColumnName: 'id'}])
  user: User;

@ManyToMany(() => Comment)
  @JoinTable()
  comments: Comment[];
}