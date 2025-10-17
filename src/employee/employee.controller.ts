import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // ------------------ CREATE ------------------
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  // ------------------ READ ------------------
  @Get()
  findAll() {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.getEmployeeById(+id);
  }

  @Get('age/:age')
  findByAge(@Param('age') age: string) {
    return this.employeeService.getEmployeesByAge(+age);
  }

  @Get('department/:department')
  findByDepartment(@Param('department') department: string) {
    return this.employeeService.getEmployeesByDepartment(department);
  }

  // ------------------ UPDATE ------------------
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.updateEmployee(+id, updateEmployeeDto);
  }

  // ------------------ DELETE ------------------
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.deleteEmployee(+id);
  }
}
