import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import TeacherEntity from '../entities/teacher.entity';
import { TeacherService } from '../../presentation/provider/teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly service: TeacherService) {}

  @Post()
  create(@Body() classrom: TeacherEntity): Promise<any> {
    return this.service.create(classrom);
  }

  @Get()
  read(): Promise<TeacherEntity[]> {
    return this.service.read();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<TeacherEntity> {
    return this.service.get(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: TeacherEntity) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
