import { Module } from '@nestjs/common';
import { DatabaseConfigure } from './database.configure';

@Module({
  imports: [
    DatabaseConfigure,
  ],
  controllers: [],
  providers: [],
})
export class DBConfigModule {}
