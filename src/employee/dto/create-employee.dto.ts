import { IsString, IsInt, Min, Max, IsDecimal } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(18)
  @Max(65)
  age: number;

  @IsString()
  department: string;

  @IsInt()
  salary: number;
}
