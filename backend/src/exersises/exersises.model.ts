import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Exersies extends Document {
  @Prop()
  exercise: String;

  @Prop()
  repetitions: Number;

  @Prop()
  sets: Number;

  @Prop()
  weight: Number;
}

export const ExersiesSchema = SchemaFactory.createForClass(Exersies);
