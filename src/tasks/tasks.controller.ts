import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  getUniqueTask(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  createTask(@Body() body: any) {
    return this.tasksService.createTask(body);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() body: any) {
    return this.tasksService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(id);
  }
}
