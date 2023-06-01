// exercises.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from 'src/programs/dto/create-exercises.dto';
import { UpdateExerciseDto } from 'src/programs/dto/update-exercises.dto';
import { Exercise } from 'src/programs/schemas/exercise.schema';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  async getAllExercise(): Promise<Exercise[]> {
    return this.exercisesService.getAllExercises();
  }

  @Get(':id')
  async getExerciseById(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.getExerciseById(id);
  }

  @Post()
  async createExercise(
    @Body() createExerciseDto: CreateExerciseDto,
  ): Promise<Exercise> {
    return this.exercisesService.createExercise(createExerciseDto);
  }

  @Patch(':id')
  async updateExercise(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    return this.exercisesService.updateExercise(id, updateExerciseDto);
  }

  @Delete(':id')
  async deleteExercise(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.deleteExercise(id);
  }
}

export { CreateExerciseDto };
