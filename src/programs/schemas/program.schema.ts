// program.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


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

}

export const ProgramSchema = SchemaFactory.createForClass(Program);

