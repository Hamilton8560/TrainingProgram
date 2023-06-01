import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

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

  @Prop()
  programId: string; // Add the program ID property
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);

