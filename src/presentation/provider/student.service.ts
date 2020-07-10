import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import StudentEntity from '../../infra/entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async create(student: StudentEntity): Promise<any> {
    return await this.studentRepository.insert(student);
  }

  async read(): Promise<StudentEntity[]> {
    return await this.studentRepository.find();
  }

  async get(id: string): Promise<StudentEntity> {
    return await this.studentRepository.findOne(id);
  }

  async update(id: string, body: StudentEntity): Promise<any> {
    return await this.studentRepository.update(id, body);
  }

  async delete(id: string): Promise<any> {
    return await this.studentRepository.delete(id);
  }
}
