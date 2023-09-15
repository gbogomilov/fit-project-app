import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
