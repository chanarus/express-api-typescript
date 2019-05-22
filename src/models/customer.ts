import {
  Entity,
  Column,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Customer {
  @ObjectIdColumn()
  public _id: ObjectID;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;
}
