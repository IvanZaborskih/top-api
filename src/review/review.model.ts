import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Review {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop({ type: MSchema.Types.ObjectId })
  productId: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
