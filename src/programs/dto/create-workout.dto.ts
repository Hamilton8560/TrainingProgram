export class CreateWorkoutDto {
  readonly name: string;
  readonly reps: number[];
  readonly sets: number;
  readonly date: Date;
  readonly weight: number[];
  readonly day: number;
  readonly programId: string; // Add the program ID property
}