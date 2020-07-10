import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TeacherEntity from '../../entities/teacher.entity';
import StudentEntity from '../../entities/student.entity';
import ClassroomEntity from '../../entities/classroom.entity';
import { TeacherService } from '../../../presentation/provider/teacher.service';
import { TeacherController } from '../../controllers/teacher.controller';



@Module({
  imports: [
    TypeOrmModule.forFeature([TeacherEntity, StudentEntity, ClassroomEntity]),
  ],
  providers: [
    TeacherService
  ],
  controllers: [
    TeacherController,
  ]
})
export class TeacherModule {}
