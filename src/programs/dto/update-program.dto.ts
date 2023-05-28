// update-program.dto.ts
export class UpdateProgramDto {
  readonly name?: string;
  readonly difficulty?: string;
  readonly video?: string;
  readonly description?: string;
  // assuming that the Workout DTO has a structure like this
  readonly workouts?: {
    name?: string;
    reps?: number[];
    sets?: number;
    date?: Date;
    weight?: number[];
    day?: number;
  }[];
}
