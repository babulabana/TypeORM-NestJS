import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number; // PK, Auto-increment

  @Column({ length: 50, unique: true })
  account_number: string; // UNIQUE, NOT NULL

  @Column({ length: 100 })
  bank_name: string; // NOT NULL
  
  @Column()
  employee_id: number;

  @OneToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' }) // FK to Employee.id
  employee: Employee;
}
