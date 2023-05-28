// update-workout.dto.ts

export class UpdateWorkoutDto {
  readonly name?: string;
  readonly reps?: number[];
  readonly sets?: number;
  readonly date?: Date;
  readonly weight?: number[];
  readonly day?: number;
}
