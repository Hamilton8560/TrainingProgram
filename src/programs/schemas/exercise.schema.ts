// exercise.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


@Schema()
export class Exercise extends Document {
  @Prop()
  name: string;

  @Prop()
  video: string;

  @Prop()
  agonist: string;

  @Prop()
  synergist: string[];

  @Prop()
  antagonist: string;

}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);

