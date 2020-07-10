import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TeacherEntity from '../../entities/teacher.entity';
import StudentEntity from '../../entities/student.entity';
import ClassroomEntity from '../../entities/classroom.entity';
import { StudentController } from '../../controllers/student.controller';
import { StudentService } from '../../../presentation/provider/student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeacherEntity, StudentEntity, ClassroomEntity]),
  ],
  providers: [
    StudentService,
  ],
  controllers: [
    StudentController
  ]
})
export class StudentModule {}
