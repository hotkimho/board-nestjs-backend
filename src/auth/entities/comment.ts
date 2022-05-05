import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { commonDate } from "./auth.common.date";
import { User } from "./user";

@Entity()
export class Comment extends commonDate{
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 300,
  })
  content: string;

  @Column({
    type: 'varchar',
  })
  writer: string;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn([{ referencedColumnName: 'id'}])
  user: User;
}