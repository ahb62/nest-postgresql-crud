import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
// import { TasksController } from './tasks/tasks.controller';
// import { TasksModule } from './tasks/tasks.module';
// import { TasksService } from './tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'tasks',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
