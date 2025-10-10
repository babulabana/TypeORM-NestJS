import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DbCheckService implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  async onModuleInit() {
    try {
      await this.dataSource.query('SELECT NOW()'); // simple test query
      console.log('✅ PostgreSQL connection is working!');
    } catch (error) {
      console.error('❌ PostgreSQL connection failed:', error);
    }
  }
}
