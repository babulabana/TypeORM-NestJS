import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from '../user/entities/user.entity';

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
  

  synchronize: false,
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],

  // synchronize: true,
  //  migrations: [__dirname + '/migrations/*.{ts,js}'],
  //  logging: true,
  entities: [User],
  migrations: ['src/migration/*.ts'],
  subscribers: [],

  // logging: true
};
