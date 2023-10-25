import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class ProductCharacteristic {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

export const ProductCharacteristicSchema = SchemaFactory.createForClass(
  ProductCharacteristic,
);

@Schema({ timestamps: true })
export class Product {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice: number;

  @Prop()
  credit: number;

  @Prop()
  calculatedRating: number;

  @Prop()
  description: string;

  @Prop()
  advantages: string;

  @Prop()
  disadvantages: string;

  @Prop({ type: [String] })
  categories: string[];

  @Prop({ type: [String] })
  tags: string[];

  // @Prop({ type: [ProductCharacteristicSchema], _id: false })
  @Prop({
    type: MSchema.Types.ObjectId,
    ref: ProductCharacteristic.name,
    _id: false,
  })
  characteristics: ProductCharacteristic[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
