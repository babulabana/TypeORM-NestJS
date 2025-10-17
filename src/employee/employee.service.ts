import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeRepository } from './Repository/employee.repository';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly employeeRepository: EmployeeRepository, // read-only
    @InjectRepository(Employee)
    private readonly repository: Repository<Employee>, // for create/update/delete
  ) {}

  // ------------------ CREATE ------------------
  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.repository.create(createEmployeeDto);
    return this.repository.save(employee);
  }

  // ------------------ UPDATE ------------------
  async updateEmployee(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.repository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Employee with id ${id} not found`);
    }
    Object.assign(employee, updateEmployeeDto);
    return this.repository.save(employee);
  }

  // ------------------ DELETE ------------------
  async deleteEmployee(id: number): Promise<number> {
    const result = await this.repository.delete(id);
    return result.affected || 0;
  }

  // ------------------ READ (from repository) ------------------
  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }

  async getEmployeeById(id: number): Promise<Employee | null> {
    return this.employeeRepository.findById(id);
  }

  async getEmployeesByAge(age: number): Promise<Employee[]> {
    return this.employeeRepository.findByAge(age);
  }

  async getEmployeesByDepartment(department: string): Promise<Employee[]> {
    return this.employeeRepository.findByDepartment(department);
  }
}
