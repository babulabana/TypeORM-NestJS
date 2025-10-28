// import { Employee } from 'src/employee/entities/employee.entity';
// import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

// @Entity('projects')
// export class Project {
//   @PrimaryGeneratedColumn()
//   id: number; // PK, Auto-increment

//   @Column({ length: 100 })
//   name: string; // NOT NULL

//   @Column({ type: 'text', nullable: true })
//   description: string | null; // Nullable

  
//   @ManyToMany(() => Employee, employee => employee.projects)
//   employees: Employee[];
// }

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Employee, (employee) => employee.projects)
  employees: Employee[];
}
