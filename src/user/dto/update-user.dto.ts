import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { 
  IsString, 
  MinLength, 
  MaxLength, 
  IsInt, 
  Min, 
  Max, 
  IsOptional, 
  IsEmail, 
  Matches
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  @MinLength(2, { message: 'First name must be at least 2 characters long' })
  @MaxLength(30, { message: 'First name cannot exceed 30 characters' })
  firstName?: string;

  @IsString()
  @IsOptional()
  @MinLength(2, { message: 'Last name must be at least 2 characters long' })
  @MaxLength(30, { message: 'Last name cannot exceed 30 characters' })
  lastName?: string;

  @IsInt()
  @IsOptional()
  @Min(18, { message: 'Age must be at least 18' })
  @Max(60, { message: 'Age must not be greater than 60' })
  age?: number;

//   @IsEmail({}, { message: 'Invalid email format' })
//   @IsOptional()
//   email?: string;

   
}
