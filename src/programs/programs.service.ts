// programs.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Program } from './schemas/program.schema';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectModel(Program.name) private readonly programModel: Model<Program>,
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

  async deleteProgram(id: string): Promise<Program> {
    const program = await this.programModel.findByIdAndDelete(id).exec();
    if (!program) {
      throw new NotFoundException('Program not found');
    }
    return program;
  }
}
