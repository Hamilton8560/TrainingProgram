import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramsModule } from './programs/programs.module';
import { WorkoutsModule } from './workout/workout.module';
import { ExercisesModule } from './exercises/exercises.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    ProgramsModule,
    WorkoutsModule,
    ExercisesModule,
  ],
})
export class AppModule {}