import { CreateWorkoutDto } from './create-workout.dto';

export class CreateProgramDto {
  readonly name: string;
  readonly difficulty: string;
  readonly video: string;
  readonly description: string;
}
