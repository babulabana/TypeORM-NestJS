import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(private readonly dataSource: DataSource) {}

  // async create(createStudentDto: CreateStudentDto): Promise<Student> {
  //   const student = this.dataSource.manager.create(Student, createStudentDto);
  //   return await this.dataSource.manager.save(Student, student);
  // }
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const result = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Student)
      .values(createStudentDto)
      .returning('*') // PostgreSQL: returns the inserted row
      .execute();

    return result.raw[0]; // or result.generatedMaps[0]
  }

  async findAll(): Promise<Student[]> {
    return await this.dataSource
      .createQueryBuilder(Student, 'student')
      .orderBy('student.id', 'ASC')
      .getMany();
  }

  async findOne(id: number): Promise<Student | null> {
    return await this.dataSource
      .createQueryBuilder(Student, 'student')
      .where('student.id = :id', { id })
      .getOne();
  }

  async update(
    id: number,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student | null> {
    await this.dataSource
      .createQueryBuilder()
      .update(Student)
      .set(updateStudentDto)
      .where('id = :id', { id })
      .execute();

    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(Student)
      .where('id = :id', { id })
      .execute();
  }
}
