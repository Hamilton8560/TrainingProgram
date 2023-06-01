import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Exercise } from 'src/programs/schemas/exercise.schema';
import { CreateExerciseDto } from './exercises.controller';
import { UpdateExerciseDto } from 'src/programs/dto/update-exercises.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private readonly exerciseModel: Model<Exercise>,
  ) {}

  async getAllExercises(): Promise<Exercise[]> {
    return this.exerciseModel.find().exec();
  }

  async getExerciseById(id: string): Promise<Exercise> {
    const exercise = await this.exerciseModel.findById(id).exec();
    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }
    return exercise;
  }

  async createExercise(
    CreateExerciseDto: CreateExerciseDto,
  ): Promise<Exercise> {
    const exercise = new this.exerciseModel(CreateExerciseDto);
    return exercise.save();
  }

  async updateExercise(
    id: string,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    const updatedExercise = await this.exerciseModel
      .findByIdAndUpdate(id, updateExerciseDto, { new: true })
      .exec();

    if (!updatedExercise) {
      throw new NotFoundException('Exercise not found');
    }

    return updatedExercise;
  }

  async deleteExercise(id: string): Promise<Exercise> {
    const exercise = await this.exerciseModel.findByIdAndDelete(id).exec();
    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }
    return exercise;
  }
}
