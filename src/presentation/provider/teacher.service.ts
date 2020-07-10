import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import TeacherEntity from '../../infra/entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeacherEntity)
    private readonly teacherRepository: Repository<TeacherEntity>,
  ) {}

  create(teacher: TeacherEntity): Promise<any> {
    return this.teacherRepository.insert(teacher);
  }

  async read(): Promise<TeacherEntity[]> {
    return this.teacherRepository.find();
  }

  async get(id: string): Promise<TeacherEntity> {
    return this.teacherRepository.findOne(id);
  }

  update(id: string, body: TeacherEntity) {
    return this.teacherRepository.update(id, body);
  }

  delete(id: string)  {
    return this.teacherRepository.delete(id);
  }
}
