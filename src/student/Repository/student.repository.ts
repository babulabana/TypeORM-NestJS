import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentRepository extends Repository<Student> {
  constructor(private dataSource: DataSource) {
    super(Student, dataSource.createEntityManager());
  }

  async findAllStudents(): Promise<Student[]> {
    return await this.createQueryBuilder('student')
      .orderBy('student.id', 'ASC')
      .getMany();
  }

  async findStudentById(id: number): Promise<Student | null> {
    return await this.createQueryBuilder('student')
      .where('student.id = :id', { id })
      .getOne();
  }

  async findByCourse(course: string): Promise<Student[]> {
    return await this.createQueryBuilder('student')
      .where('student.course = :course', { course })
      .getMany();
  }

  async findByAgeRange(minAge: number, maxAge: number): Promise<Student[]> {
    return await this.createQueryBuilder('student')
      .where('student.age BETWEEN :minAge AND :maxAge', { minAge, maxAge })
      .orderBy('student.age', 'ASC')
      .getMany();
  }

  async findAllSortedByName(): Promise<Student[]> {
    return await this.createQueryBuilder('student')
      .orderBy('student.name', 'ASC')
      .getMany();
  }

  async searchByKeyword(keyword: string): Promise<Student[]> {
    return await this.createQueryBuilder('student')
      .where('student.name LIKE :keyword OR student.course LIKE :keyword', {
        keyword: `%${keyword}%`,
      })
      .getMany();
  }
}
