import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import StudentEntity from '../entities/student.entity';
import { StudentService } from '../../presentation/provider/student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Post()
  create(@Body() classrom: StudentEntity): Promise<any> {
    return this.service.create(classrom);
  }

  @Get()
  read(): Promise<StudentEntity[]> {
    return this.service.read();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<StudentEntity> {
    return this.service.get(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: StudentEntity) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
