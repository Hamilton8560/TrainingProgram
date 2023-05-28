// programs.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Program } from './schemas/program.schema';
import { Workout } from './schemas/workout.schema';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectModel(Program.name) private readonly programModel: Model<Program>,
    @InjectModel(Workout.name)
    private readonly workoutModel: Model<Workout>,
  ) {}

  async getAllPrograms(): Promise<Program[]> {
    return this.programModel.find().exec();
  }

  async getProgramById(id: string): Promise<Program> {
    const program = await this.programModel.findById(id).exec();
    if (!program) {
      throw new NotFoundException('Program not found');
    }
    return program;
  }

  async createProgram(createProgramDto: CreateProgramDto): Promise<Program> {
    const program = new this.programModel(createProgramDto);
    return program.save();
  }

  async updateProgram(
    id: string,
    updateProgramDto: UpdateProgramDto,
  ): Promise<Program> {
    const updatedProgram = await this.programModel
      .findByIdAndUpdate(id, updateProgramDto, { new: true })
      .exec();

    if (!updatedProgram) {
      throw new NotFoundException('Program not found');
    }

    return updatedProgram;
  }

  async updateWorkout(
    programId: string,
    workoutId: string,
    updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    const program = await this.programModel.findById(programId).exec();
    if (!program) {
      throw new NotFoundException('Program not found');
    }

    const workout = await this.workoutModel
      .findByIdAndUpdate(workoutId, updateWorkoutDto, { new: true })
      .exec();

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    return workout;
  }

  async deleteProgram(id: string): Promise<Program> {
    const program = await this.programModel.findByIdAndDelete(id).exec();
    if (!program) {
      throw new NotFoundException('Program not found');
    }
    return program;
  }

  async getProgramWorkouts(id: string): Promise<Workout[]> {
    const program = await this.programModel
      .findById(id)
      .populate('workouts')
      .exec();

    if (!program) {
      throw new NotFoundException('Program not found');
    }

    return program.workouts;
  }

  async addWorkoutToProgram(
    id: string,
    createWorkoutDto: CreateWorkoutDto,
  ): Promise<Workout> {
    const program = await this.programModel.findById(id).exec();
    if (!program) {
      throw new NotFoundException('Program not found');
    }

    const workout = new this.workoutModel(createWorkoutDto);
    await workout.save();
    program.workouts.push(workout._id);
    await program.save();
    return workout;
  }
  

  async deleteWorkout(programId: string, workoutId: string): Promise<Workout> {
    const program = await this.programModel.findById(programId).exec();
    if (!program) {
      throw new NotFoundException('Program not found');
    }

    const workoutIndex = program.workouts.findIndex(
      (id) => id.toString() === workoutId,
    );
    if (workoutIndex === -1) {
      throw new NotFoundException('Workout not found');
    }

    program.workouts.splice(workoutIndex, 1);
    await program.save();

    const deletedWorkout = await this.workoutModel
      .findByIdAndDelete(workoutId)
      .exec();
    return deletedWorkout;
  }
  async getWorkoutById(workoutId: string): Promise<Workout> {
    const workout = await this.workoutModel.findById(workoutId).exec();
    if (!workout) {
      throw new NotFoundException('Workout not found');
    }
    return workout;
  }
}
