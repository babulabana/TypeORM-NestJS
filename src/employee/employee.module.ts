import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeRepository } from './Repository/employee.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])], // TypeORM entities
  providers: [EmployeeService, EmployeeRepository], // register repository
  controllers: [EmployeeController],
  exports: [EmployeeService, EmployeeRepository], // optional if used outside
})
export class EmployeeModule {}
