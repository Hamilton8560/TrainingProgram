// workout.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Workout extends Document {
  @Prop()
  name: string;

  @Prop([Number])
  reps: number[];

  @Prop(Number)
  sets: number;

  @Prop({ type: Date, default: Date.now })
  date: Date;

  @Prop([Number])
  weight: number[];

  @Prop(Number)
  day: number;
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
