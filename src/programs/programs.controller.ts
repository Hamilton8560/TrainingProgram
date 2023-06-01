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
import { Program } from './schemas/program.schema';

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
}
