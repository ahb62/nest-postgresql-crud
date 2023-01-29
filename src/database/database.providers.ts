import { Task } from 'src/entities/task.entity';
import { DataSource } from 'typeorm';
import {
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_PROVIDE,
} from './database.constants';

export const DatabaseProviders = [
  {
    provide: DB_PROVIDE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: DB_TYPE,
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
        entities: [Task],
        synchronize: true,
      });
      try {
        await dataSource.initialize();
      } catch (error) {
        console.error('Error when connect to database', error);
      }
      return dataSource;
    },
  },
];
