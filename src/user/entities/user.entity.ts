import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'int' })
  age: number;

 @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  mobile?: string;
  

}
