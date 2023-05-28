// programs.controller.ts

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Program } from './schemas/program.schema';
import { Workout } from './schemas/workout.schema';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Get()
  async getAllPrograms(): Promise<Program[]> {
    return this.programsService.getAllPrograms();
  }

  @Get(':id')
  async getProgramById(@Param('id') id: string): Promise<Program> {
    return this.programsService.getProgramById(id);
  }

  @Post()
  async createProgram(
    @Body() createProgramDto: CreateProgramDto,
  ): Promise<Program> {
    return this.programsService.createProgram(createProgramDto);
  }

  @Patch(':id')
  async updateProgram(
    @Param('id') id: string,
    @Body() updateProgramDto: UpdateProgramDto,
  ): Promise<Program> {
    return this.programsService.updateProgram(id, updateProgramDto);
  }

  @Delete(':id')
  async deleteProgram(@Param('id') id: string): Promise<Program> {
    return this.programsService.deleteProgram(id);
  }

  @Get(':id/workouts')
  async getProgramWorkouts(@Param('id') id: string): Promise<Workout[]> {
    return this.programsService.getProgramWorkouts(id);
  }

  @Post(':id/workouts')
  async addWorkoutToProgram(
    @Param('id') id: string,
    @Body() createWorkoutDto: CreateWorkoutDto,
  ): Promise<Workout> {
    return this.programsService.addWorkoutToProgram(id, createWorkoutDto);
  }

  @Patch(':id/workouts/:workoutId')
  async updateWorkout(
    @Param('id') id: string,
    @Param('workoutId') workoutId: string,
    @Body() updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    return this.programsService.updateWorkout(id, workoutId, updateWorkoutDto);
  }

  @Delete(':id/workouts/:workoutId')
  async deleteWorkout(
    @Param('id') id: string,
    @Param('workoutId') workoutId: string,
  ): Promise<Workout> {
    return this.programsService.deleteWorkout(id, workoutId);
  }
  @Get(':programId/workouts/:workoutId')
  async getWorkoutById(
    @Param('programId') programId: string,
    @Param('workoutId') workoutId: string,
  ) {
    return this.programsService.getWorkoutById(workoutId);
  }
}

