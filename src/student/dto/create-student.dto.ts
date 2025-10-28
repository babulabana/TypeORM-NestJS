import { IsString, IsInt, Min, Max, Length } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @Length(2, 100)
  name: string;

  @IsInt()
  @Min(10)
  @Max(100)
  age: number;

  @IsString()
  @Length(2, 100)
  course: string;
}
