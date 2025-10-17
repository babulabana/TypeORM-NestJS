// src/bank-account/entities/bank-account.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity('bank_account')
export class BankAccount {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 20, unique: true })
  account_number: string;

  @Column({ length: 50 })
  bank_name: string;

  // Unidirectional One-to-One
  @OneToOne(() => Employee)
  @JoinColumn() // creates employeeId FK in bank_account table
  employee: Employee;
}
