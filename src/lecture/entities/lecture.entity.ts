import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity('lectures')
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number; // PK, Auto-increment

  @Column({ length: 100 })
  topic: string; // NOT NULL

  @Column({ type: 'date' })
  date: string; // NOT NULL

  @Column()
  employee_id: number;
  
  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'employee_id' }) // FK to Employee.id
  employee: Employee;
}
