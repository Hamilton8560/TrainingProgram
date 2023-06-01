export class CreateExerciseDto {
  readonly name: string;
  readonly video: string;
  readonly agonist: string;
  readonly synergist: string[];
  readonly antagonist: string;
}
