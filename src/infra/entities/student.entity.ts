import BaseEntity from './base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import ClassroomEntity from './classroom.entity';

@Entity()
export default class StudentEntity extends BaseEntity {
  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'age' })
  age: number;

  @ManyToOne(
    type => ClassroomEntity,
    classroom => classroom.students,
    { eager: true },
  )
  @JoinColumn({ name: 'fk_classroom' })
  classroom: ClassroomEntity;
}
