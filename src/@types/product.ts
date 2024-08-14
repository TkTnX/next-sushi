import { IIngredient } from "@/components/shared/filter-group-ingredients";

export interface IProduct {
  categoryId: any;
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight: number;
  ingredients?: IIngredient[]
  createdAt?: Date;
  typeId?: number;
  exceptions?: { productId: number; exceptionId: number }[];
  isNeedToFilter?: boolean
}
