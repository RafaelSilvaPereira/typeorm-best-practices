import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ClassroomEntity from '../../infra/entities/classroom.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(ClassroomEntity)
    private readonly classroomRepository: Repository<ClassroomEntity>,
  ) {}

  createClassroom(classroom: ClassroomEntity): Promise<any> {
    return this.classroomRepository.insert(classroom);
  }

  async read(): Promise<ClassroomEntity[]> {
    return this.classroomRepository.find();
  }

  async get(id: string): Promise<ClassroomEntity> {
    return this.classroomRepository.findOne(id);
  }

  update(id: string, body: ClassroomEntity) {
    return this.classroomRepository.update(id, body);
  }

  delete(id: string)  {
    return this.classroomRepository.delete(id);
  }
}
