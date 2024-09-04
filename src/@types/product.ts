import { IIngredient } from "@/components/shared/filter-group-ingredients";
import { FavoriteType } from "@/store/favoritesStore";

export interface IProduct {
  categoryId: number;
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  weight: number;
  ingredients?: IIngredient[];
  createdAt?: Date;
  typeId?: number;
  exceptions?: { productId: number; exceptionId: number }[];
  isNeedToFilter?: boolean;
}


export interface ICartItem { 
  quantity: number
  productId: number;
  productItem?: IProduct;
  id?: number
  disabled?: boolean
}

