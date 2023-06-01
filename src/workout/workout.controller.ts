import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { WorkoutsService } from './workout.service';
import { CreateWorkoutDto } from 'src/programs/dto/create-workout.dto';
import { UpdateWorkoutDto } from 'src/programs/dto/update-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Get()
  getAllWorkouts() {
    return this.workoutsService.getAllWorkouts();
  }

  @Get(':id')
  getWorkoutById(@Param('id') id: string) {
    return this.workoutsService.getWorkoutById(id);
  }

  @Post()
  createWorkout(@Body() createWorkoutDto: CreateWorkoutDto) {
    return this.workoutsService.createWorkout(createWorkoutDto);
  }

  @Patch(':id')
  updateWorkout(
    @Param('id') id: string,
    @Body() updateWorkoutDto: UpdateWorkoutDto,
  ) {
    return this.workoutsService.updateWorkout(id, updateWorkoutDto);
  }

  @Delete(':id')
  deleteWorkout(@Param('id') id: string) {
    return this.workoutsService.deleteWorkout(id);
  }
}
