import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BankAccount } from '../../bank-account/entities/bank-account.entity';
import { Lecture } from '../../lecture/entities/lecture.entity';
import { Project } from '../../project/entities/project.entity';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  // @Column()
  // age: number;

  @Column({ length: 100 })
  department: string;

  @Column()
  salary: number;

  @Column()
  address: string;

  // One-to-One relation with BankAccount
  @OneToOne(() => BankAccount, bankAccount => bankAccount.employee)
  bankAccount: BankAccount;

  // One-to-Many relation with Lecture
  @OneToMany(() => Lecture, lecture => lecture.employee)
  lectures: Lecture[];

  // Many-to-Many relation with Project
   @ManyToMany(() => Project, project => project.employees)
  @JoinTable() // this creates the join table automatically
  projects: Project[];
}
