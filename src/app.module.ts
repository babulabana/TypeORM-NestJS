import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbCheckService } from './db-check.service';
import { typeOrmConfig } from './config/data.config';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { LectureModule } from './lecture/lecture.module';
import { ProjectModule } from './project/project.module';
// import { EmployeeProjectModule } from './employee-project/employee-project.module';
import { StudentModule } from './student/student.module';
// import { DegreeModule } from './degree/degree.module';
import { SchoolModule } from './school/school.module';
@Module({
  imports: [
    UserModule,
    // Load environment variables
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Database connection using data.config.ts file
    TypeOrmModule.forRoot(typeOrmConfig),

    EmployeeModule,

    BankAccountModule,

    LectureModule,

    ProjectModule,

    // EmployeeProjectModule,

    StudentModule,

    // DegreeModule,

    SchoolModule,

    // Database connection using .env file

    // TypeOrmModule.forRoot({
    //   type: process.env.DB_TYPE as 'postgres',
    //   host: process.env.DB_HOST,
    //   port: parseInt(process.env.DB_PORT || '5432', 10),
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: '81751832',
    //   database: 'nestjs_db',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
  ],

  controllers: [AppController],
  providers: [AppService, DbCheckService],
})
export class AppModule {}
