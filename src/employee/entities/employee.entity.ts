import { Project } from 'src/project/entities/project.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;  // PK, Auto-increment

  @Column({ length: 100 })
  name: string; // NOT NULL

  @Column()
  age: number;  // NOT NULL

  @Column('decimal')
  salary: number; // NOT NULL

  
  @ManyToMany(() => Project)
  @JoinTable({
    name: 'employees_projects', // Name of the join table
    joinColumn: {
      name: 'employee_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
  })
  projects: Project[];
}
