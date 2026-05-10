export interface TrendyPlant {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  imageReverse?: boolean
}

export interface Plant {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
}

export interface Review {
  id: number;
  name: string;
  image?: string;
  rating: number;
  comment: string;
}
