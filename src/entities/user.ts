import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
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
}
