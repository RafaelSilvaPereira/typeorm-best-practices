import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TeacherEntity from '../../entities/teacher.entity';
import StudentEntity from '../../entities/student.entity';
import ClassroomEntity from '../../entities/classroom.entity';
import { ClassroomService } from '../../../presentation/provider/classroom.service';
import { ClassroomController } from '../../controllers/classroom.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeacherEntity, StudentEntity, ClassroomEntity]),
  ],
  providers: [
    ClassroomService
  ],
  controllers: [
    ClassroomController
  ]
})
export class ClassroomModule {}
