import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Workout } from './workout.schema';

@Schema()
export class Program extends Document {
  @Prop()
  name: string;

  @Prop()
  video: string;

  @Prop()
  difficulty: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: Workout.name }] })
  workouts: Workout[];
}

export const ProgramSchema = SchemaFactory.createForClass(Program);

