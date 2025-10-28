// src/employee/repositories/employee.repository.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectRepository(Employee)
    private readonly repository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Employee | null> {
    return this.repository.findOneBy({ id });
  }

  // async findByAge(age: number): Promise<Employee[]> {
  //   return this.repository.find({ where: { age } });
  // }

  // async findByDepartment(department: string): Promise<Employee[]> {
  //   return this.repository.find({ where: { department } });
  // }
}
