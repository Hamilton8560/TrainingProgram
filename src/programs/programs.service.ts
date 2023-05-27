import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProgramDto } from './dto/create-program.dto';
import { Program } from './schemas/program.schema';
import { Workout } from './schemas/workout.schema';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectModel(Program.name) private readonly programModel: Model<Program>,
    @InjectModel(Workout.name) private readonly workoutModel: Model<Workout>,
  ) {}

  async create(createProgramDto: CreateProgramDto): Promise<Program> {
    const createdProgram = await this.programModel.create(createProgramDto);
    return createdProgram;
  }

  async findAll(): Promise<Program[]> {
    return this.programModel.find().exec();
  }

  async findOne(id: string): Promise<Program> {
    return this.programModel.findById(id).populate('workouts').exec();
  }

  async delete(id: string) {
    const deletedProgram = await this.programModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedProgram;
  }

  async update(
    id: string,
    updateProgramDto: CreateProgramDto,
  ): Promise<Program> {
    const updatedProgram = await this.programModel
      .findByIdAndUpdate(id, updateProgramDto, { new: true })
      .exec();

    return updatedProgram;
  }

  async addWorkoutsToProgram(
    programId: string,
    workouts: CreateWorkoutDto[],
  ): Promise<Program> {
    const program = await this.programModel.findById(programId).exec();

    if (!program) {
      throw new Error('Program not found');
    }

    const workoutDocuments: Workout[] = [];
    for (const workoutDto of workouts) {
      const workout = new this.workoutModel(workoutDto);
      workoutDocuments.push(workout);
    }

    program.workouts = workoutDocuments;
    await program.save();

    return program;
  }

  async getWorkouts(programId: string): Promise<CreateWorkoutDto[]> {
    const program = await this.programModel
      .findById(programId)
      .populate('workouts')
      .exec();

    if (!program) {
      throw new Error('Program not found');
    }

    const workouts = program.workouts.map((workout) => {
      const { _id, name, reps, sets, date, weight, day } = workout;
      return { _id, name, reps, sets, date, weight, day };
    });

    return workouts;
  }
}
