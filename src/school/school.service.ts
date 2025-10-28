import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { School } from './entities/school.entity';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  // ✅ CREATE school
  async create(createSchoolDto: CreateSchoolDto) {
    const { name, student_id } = createSchoolDto;

    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(School)
      .values({ name, student_id })
      .execute();

    return { message: 'School created successfully' };
  }

  // ✅ GET all schools
  //  async findAll() {
  //   const schools = await this.dataSource
  //     .getRepository(School)
  //     .createQueryBuilder('school')
  //     .leftJoinAndSelect('school.student', 'student') // join single student
  //     .select([
  //       'school.id',
  //       'school.name',
  //       'student.id',
  //       'student.name',
  //     ])
  //     .getMany();

  //   return schools;
  // }

  // async findAll(page = 1, limit = 5){
  //   // page = current page number
  //   // limit = number of records per page
  //   const skip = (page - 1) * limit;

  //   const [schools, total] = await this.dataSource
  //     .getRepository(School)
  //     .createQueryBuilder('school')
  //     .leftJoinAndSelect('school.student', 'student') // include student data
  //     .select(['school.id', 'school.name', 'student.id', 'student.name'])
  //     .orderBy('school.id', 'ASC') // optional sorting
  //     .skip(skip) // how many records to skip
  //     .take(limit) // how many records to take
  //     .getManyAndCount(); // returns [data, totalCount]

  //   return {
  //     total, // total number of schools
  //     page, // current page number
  //     limit, // records per page
  //     totalPages: Math.ceil(total / limit), // total number of pages
  //     data: schools, // paginated data
  //   };
  // }
async findAll(page = 1, limit = 5, search?: string) {
  const skip = (page - 1) * limit;

  // Create QueryBuilder
  const qb = this.dataSource
    .getRepository(School)
    .createQueryBuilder('school')
    .leftJoinAndSelect('school.student', 'student')
    .select(['school.id', 'school.name', 'student.id', 'student.name']);

  // ✅ Optional filter (search by school or student name)
  if (search) {
    qb.where('school.name ILIKE :search OR student.name ILIKE :search', {
      search: `%${search}%`,
    });
  }

  // ✅ Pagination + sorting
  const [schools, total] = await qb
    .orderBy('school.id', 'ASC')
    .skip(skip)
    .take(limit)
    .getManyAndCount();

  // ✅ Build metadata
  const meta = {
    total,                         // total records in DB
    page,                          // current page
    limit,                         // items per page
    totalPages: Math.ceil(total / limit), // total number of pages
  };

  // ✅ Return final response
  return {
    // success: true,
    message: 'Schools fetched successfully',
    meta,    // 👈 All pagination/filter info inside meta
    data: schools,
  };
}

  // ✅ GET one school by id
  async findOne(id: number) {
    const school = await this.dataSource
      .getRepository(School)
      .createQueryBuilder('school')
      .leftJoinAndSelect('school.student', 'student') // join single student
      .select(['school.id', 'school.name', 'student.id', 'student.name'])
      .where('school.id = :id', { id })
      .getOne();

    if (!school) {
      return { message: `School #${id} not found` };
    }

    return school;
  }

  // ✅ UPDATE school
  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const { name, student_id } = updateSchoolDto;

    await this.dataSource
      .createQueryBuilder()
      .update(School)
      .set({ name, student_id })
      .where('id = :id', { id })
      .execute();

    return { message: `School #${id} updated successfully` };
  }

  // ✅ DELETE school
  async remove(id: number) {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(School)
      .where('id = :id', { id })
      .execute();

    return { message: `School #${id} removed successfully` };
  }
}
