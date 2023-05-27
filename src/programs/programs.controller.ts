import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { Program } from './schemas/program.schema';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Workout } from './schemas/workout.schema';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @Post()
  async create(@Body() createProgramDto: CreateProgramDto) {
    await this.programsService.create(createProgramDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramDto: CreateProgramDto,
  ) {
    return this.programsService.update(id, updateProgramDto);
  }

  @Get()
  async findAll(): Promise<Program[]> {
    return this.programsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Program> {
    return this.programsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.programsService.delete(id);
  }

  @Post(':id/workouts')
  async addWorkoutToProgram(
    @Param('id') programId: string,
    @Body() createWorkoutDto: { workouts: CreateWorkoutDto[] },
  ) {
    return this.programsService.addWorkoutsToProgram(
      programId,
      createWorkoutDto.workouts,
    );
  }

  @Get(':id/workouts')
  async getWorkouts(@Param('id') programId: string): Promise<Workout[]> {
    const program = await this.programsService.findOne(programId);
    if (!program) {
      throw new Error('Program not found');
    }
    return program.workouts as Workout[];
  }
}