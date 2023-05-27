import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Workout extends Document {
  @Prop()
  name: string;

  @Prop()
  reps: number[];

  @Prop()
  sets: number;

  @Prop({ type: Date, default: Date.now })
  date: Date;

  @Prop()
  weight: number[];

  @Prop()
  day: number;

}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
export interface WorkoutModel extends Workout, Document {}
