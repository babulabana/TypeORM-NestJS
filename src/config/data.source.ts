// import { DataSource } from 'typeorm';
// import * as dotenv from 'dotenv';
// import { Employee } from 'src/employee/entities/employee.entity';
// import { Project } from 'src/project/entities/project.entity';
// import { Student } from 'src/student/entities/student.entity';
// import { Lecture } from 'src/lecture/entities/lecture.entity';
// import { Account } from 'src/bank-account/entities/bank-account.entity';
// import { Degree } from 'src/degree/entities/degree.entity';
// dotenv.config();

// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST || 'localhost',
//   port: parseInt(process.env.DB_PORT || '5432'),
//   username: process.env.DB_USERNAME || 'postgres',
//   password: process.env.DB_PASSWORD || '81751832',
//   database: process.env.DB_NAME || 'nestjs_db',
//   synchronize: false,
//   logging: true,
//   // entities: ['src/**/*.entity.{ts,js}'],  // <-- automatically includes User entity
//   // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
// // entities: [__dirname + '/../**/*.entity.ts'],

// entities: [
//   Employee,
//   Project,
//   Student,
//   Lecture,
//   Account,
//   Degree,
//   // __dirname + '/../**/*.entity{.ts,.js}',
// ],


//   // migrations: ['src/migrations/*.ts'], 
//   migrations: ['src/migrations/*.ts'],
// });
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Employee } from 'src/employee/entities/employee.entity';
import { Project } from 'src/project/entities/project.entity';
import { Student } from 'src/student/entities/student.entity';
import { Lecture } from 'src/lecture/entities/lecture.entity';
import { Account } from 'src/bank-account/entities/bank-account.entity';
import { School } from 'src/school/entities/school.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '81751832',
  database: process.env.DB_NAME || 'nestjs_db',
  synchronize: false,
  logging: true,
  entities: [Employee, Project, Student, Lecture, Account,School], // ✅ explicit registration
  migrations: ['src/migrations/*.ts'],
});
