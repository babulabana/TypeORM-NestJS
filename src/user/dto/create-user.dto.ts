// export class CreateUserDto {
//     firstName: string;
//     lastName: string;
//     age: number;
// }
import { 
  IsString, 
  IsNotEmpty, 
  MinLength, 
  MaxLength, 
  IsInt, 
  Min, 
  Max, 
  IsEmail, 
  Matches
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  @MinLength(2, { message: 'First name must be at least 2 characters long' })
  @MaxLength(30, { message: 'First name cannot exceed 30 characters' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  @MinLength(2, { message: 'Last name must be at least 2 characters long' })
  @MaxLength(30, { message: 'Last name cannot exceed 30 characters' })
  lastName: string;

  @IsInt()
  @IsNotEmpty({ message: 'Age is required' })
  @Min(18, { message: 'Age must be at least 18' })
  @Max(60, { message: 'Age must not be greater than 60' })
  age: number;

  // @IsEmail({}, { message: 'Invalid email format' })
  // // @IsNotEmpty({ message: 'Email is required' })
  // email: string;

    
}
