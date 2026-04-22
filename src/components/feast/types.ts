export interface Dish {
  id: string;
  name: string;
  restaurant: string;
  restaurantId: string;
  price: number;
  rating: number;
  deliveryTime: string;
  image: string;
  category: string;
  description: string;
  popular?: boolean;
  isNew?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  logo: string;
  cuisine: string;
  deliveryTime: string;
  rating: number;
  badge?: "Popular" | "New";
  image: string;
}

export interface CartItem extends Dish {
  quantity: number;
  size?: string;
  extras?: string[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}
