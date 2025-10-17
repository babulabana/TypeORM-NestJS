import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ nullable: true })
  description: string;

  // Many-to-Many relation with Employee
  @ManyToMany(() => Employee, employee => employee.projects)
  employees: Employee[];
}
