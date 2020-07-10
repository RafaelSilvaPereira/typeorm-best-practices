import BaseEntity from './base.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import TeacherEntity from './teacher.entity';
import StudentEntity from './student.entity';

@Entity({name: 'classroom'})
export default class ClassroomEntity extends BaseEntity {
  @Column({name: 'class_name'})
  className: string;

  @OneToOne(type => TeacherEntity)
  @JoinColumn({name: 'fk_teacher'})
  teacher: TeacherEntity;


  @OneToMany(type => StudentEntity, students => students.classroom)
  students: StudentEntity[];



}
