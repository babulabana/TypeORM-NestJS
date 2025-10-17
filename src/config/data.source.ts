import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
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
  entities: ['src/**/*.entity.{ts,js}'],  // <-- automatically includes User entity
  // migrations: ['src/migrations/*.ts'], 
  migrations: ['src/migration/*.ts'],
});
