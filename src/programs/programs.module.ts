import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramsController } from './programs.controller';
import { ProgramsService } from './programs.service';
import { Program, ProgramSchema } from './schemas/program.schema';
import { Workout, WorkoutSchema } from './schemas/workout.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Program.name, schema: ProgramSchema },
      { name: Workout.name, schema: WorkoutSchema },
    ]),
  ],
  controllers: [ProgramsController],
  providers: [ProgramsService],
})
export class ProgramsModule {}

