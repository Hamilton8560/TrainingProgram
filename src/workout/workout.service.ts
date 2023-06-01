import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Workout } from 'src/programs/schemas/workout.schema';
import { CreateWorkoutDto } from 'src/programs/dto/create-workout.dto';
import { UpdateWorkoutDto } from 'src/programs/dto/update-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectModel(Workout.name) private readonly workoutModel: Model<Workout>,
  ) {}

  async getAllWorkouts(): Promise<Workout[]> {
    return this.workoutModel.find().exec();
  }

  async getWorkoutById(id: string): Promise<Workout> {
    const workout = await this.workoutModel.findById(id).exec();
    if (!workout) {
      throw new NotFoundException('Workout not found');
    }
    return workout;
  }

  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const workout = new this.workoutModel(createWorkoutDto);
    return workout.save();
  }

  async updateWorkout(
    id: string,
    updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    const workout = await this.workoutModel
      .findByIdAndUpdate(id, updateWorkoutDto, { new: true })
      .exec();
    if (!workout) {
      throw new NotFoundException('Workout not found');
    }
    return workout;
  }

  async deleteWorkout(id: string): Promise<Workout> {
    const workout = await this.workoutModel.findByIdAndDelete(id).exec();
    if (!workout) {
      throw new NotFoundException('Workout not found');
    }
    return workout;
  }
}
