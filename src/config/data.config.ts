import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from '../user/entities/user.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Project } from 'src/project/entities/project.entity';
import { Account } from 'src/bank-account/entities/bank-account.entity';
import { Lecture } from 'src/lecture/entities/lecture.entity';
import { Student } from 'src/student/entities/student.entity';
import { School } from 'src/school/entities/school.entity';

// Load .env file
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  

  entities: [
  Employee,
  Project,
  Student,
  Lecture,
  Account,
  School
  // __dirname + '/../**/*.entity{.ts,.js}',
],

  synchronize: false,
  migrations: ['dist/migrations/*.js'],
};
