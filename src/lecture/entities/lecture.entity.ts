import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity('lectures')
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  // Many lectures belong to one employee
  @ManyToOne(() => Employee, employee => employee.lectures, {
    onDelete: 'CASCADE', // optional: deleting employee deletes their lectures
  })
  employee: Employee;
}
