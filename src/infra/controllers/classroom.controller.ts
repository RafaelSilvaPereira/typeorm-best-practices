import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import ClassroomEntity from '../entities/classroom.entity';
import { ClassroomService } from '../../presentation/provider/classroom.service';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly service: ClassroomService) {}

  @Post()
  createClassRoom(@Body() classrom: ClassroomEntity): Promise<any> {
    return this.service.createClassroom(classrom);
  }

  @Get()
  read(): Promise<ClassroomEntity[]> {
    return this.service.read();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<ClassroomEntity> {
    return this.service.get(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: ClassroomEntity) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
