import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConfigModule } from './infra/config/database/database.module';
import { ClassroomModule } from './infra/config/modules/classroom.module';
import { StudentModule } from './infra/config/modules/student.module';
import { TeacherModule } from './infra/config/modules/teacher.module';



@Module({
  imports: [
    DBConfigModule,
    ClassroomModule,
    StudentModule,
    TeacherModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
