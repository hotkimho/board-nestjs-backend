import {Column, Entity } from "typeorm";

@Entity()
export abstract class commonDate {
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  created_date: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  modified_date: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deleted_date: Date;
}