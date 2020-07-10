import { TypeOrmModule } from '@nestjs/typeorm';
import TeacherEntity from '../../entities/teacher.entity';
import StudentEntity from '../../entities/student.entity';
import ClassroomEntity from '../../entities/classroom.entity';

export const DatabaseConfigure = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql',
  database: 'teste',
  entities: [TeacherEntity, StudentEntity, ClassroomEntity],
  synchronize: true,
});
