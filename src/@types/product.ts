export interface IProduct {
  categoryId: any;
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight: number;
  createdAt?: Date;
  typeId?: number
  exceptions?: {productId: number, exceptionId: number}[]
}
