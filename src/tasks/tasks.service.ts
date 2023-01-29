import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private TasksRepository: Repository<Task>,
  ) {}

  findAll() {
    return this.TasksRepository.find();
  }

  findOne(id: number) {
    return this.TasksRepository.findOne({
      where: { id: id },
    });
  }

  createTask(body: any) {
    const newTask = this.TasksRepository.create(body);

    return this.TasksRepository.save(newTask);
  }

  async updateTask(id: number, body: any) {
    const updateTask = await this.TasksRepository.findOne({
      where: { id: id },
    });
    this.TasksRepository.merge(updateTask, body);

    return this.TasksRepository.save(updateTask);
  }

  async deleteTask(id: number) {
    return await this.TasksRepository.delete(id);
  }
}
