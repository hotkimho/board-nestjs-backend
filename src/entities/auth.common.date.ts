import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class commonDate {
  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  created_date: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  modified_date: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deleted_date: Date;
}
