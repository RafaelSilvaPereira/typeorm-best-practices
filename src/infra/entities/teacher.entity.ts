import BaseEntity from './base.entity';
import { Column, Entity } from 'typeorm';


@Entity({name: 'teacher'})
export default class TeacherEntity extends BaseEntity {
  @Column({ name: 'name' })
  name: string;
}
