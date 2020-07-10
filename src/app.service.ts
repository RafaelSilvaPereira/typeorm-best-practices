import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import ClassroomEntity from './infra/entities/classroom.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {


  getHello(): string {
    return 'Hello World!';
  }


}
