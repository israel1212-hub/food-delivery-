import { Dish, Restaurant, Category } from "./types";

export const categories: Category[] = [
  { id: "all", label: "All", icon: "🍽️" },
  { id: "burgers", label: "Burgers", icon: "🍔" },
  { id: "pizza", label: "Pizza", icon: "🍕" },
  { id: "sushi", label: "Sushi", icon: "🍣" },
  { id: "tacos", label: "Tacos", icon: "🌮" },
  { id: "desserts", label: "Desserts", icon: "🍰" },
  { id: "pasta", label: "Pasta", icon: "🍝" },
  { id: "salads", label: "Salads", icon: "🥗" },
  { id: "chicken", label: "Chicken", icon: "🍗" },
];

export const dishes: Dish[] = [
  {
    id: "d1",
    name: "Smash Burger Supreme",
    restaurant: "Grind House",
    restaurantId: "r1",
    price: 14.99,
    rating: 4.8,
    deliveryTime: "18 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    category: "burgers",
    description:
      "Double smash patty, American cheese, caramelized onions, pickles, special sauce on a brioche bun.",
    popular: true,
  },
  {
    id: "d2",
    name: "Truffle Margherita",
    restaurant: "Napoli Express",
    restaurantId: "r2",
    price: 18.5,
    rating: 4.9,
    deliveryTime: "22 min",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    category: "pizza",
    description:
      "Sourdough base, San Marzano tomatoes, buffalo mozzarella, fresh basil, black truffle shavings.",
    popular: true,
  },
  {
    id: "d3",
    name: "Dragon Roll",
    restaurant: "Sakura Sushi",
    restaurantId: "r3",
    price: 22.0,
    rating: 4.7,
    deliveryTime: "30 min",
    image:
      "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80",
    category: "sushi",
    description:
      "Shrimp tempura, cucumber, avocado, topped with sliced avocado and unagi sauce.",
  },
  {
    id: "d4",
    name: "Birria Street Tacos",
    restaurant: "Casa Fuego",
    restaurantId: "r4",
    price: 16.0,
    rating: 4.8,
    deliveryTime: "20 min",
    image:
      "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&q=80",
    category: "tacos",
    description:
      "Slow-braised beef birria, consommé for dipping, cilantro, onion on corn tortillas.",
    popular: true,
  },
  {
    id: "d5",
    name: "Molten Lava Cake",
    restaurant: "Sweet Ends",
    restaurantId: "r5",
    price: 9.99,
    rating: 4.9,
    deliveryTime: "15 min",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    category: "desserts",
    description:
      "Rich dark chocolate cake with a gooey molten center, served with vanilla bean ice cream.",
  },
  {
    id: "d6",
    name: "Carbonara Al Dente",
    restaurant: "Trattoria Roma",
    restaurantId: "r6",
    price: 19.5,
    rating: 4.6,
    deliveryTime: "25 min",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
    category: "pasta",
    description:
      "Rigatoni with guanciale, eggs, Pecorino Romano, black pepper. Classic Roman recipe.",
  },
  {
    id: "d7",
    name: "Crispy Chicken Sandwich",
    restaurant: "Cluck Republic",
    restaurantId: "r7",
    price: 13.5,
    rating: 4.7,
    deliveryTime: "20 min",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
    category: "chicken",
    description:
      "Buttermilk-fried chicken breast, spicy mayo, pickled jalapeños, coleslaw on a potato bun.",
    isNew: true,
  },
  {
    id: "d8",
    name: "Spicy Tuna Roll",
    restaurant: "Sakura Sushi",
    restaurantId: "r3",
    price: 17.0,
    rating: 4.5,
    deliveryTime: "30 min",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",
    category: "sushi",
    description:
      "Fresh tuna, spicy mayo, cucumber, topped with tobiko and sesame seeds.",
    isNew: true,
  },
  {
    id: "d9",
    name: "BBQ Bacon Burger",
    restaurant: "Grind House",
    restaurantId: "r1",
    price: 16.99,
    rating: 4.7,
    deliveryTime: "18 min",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80",
    category: "burgers",
    description:
      "Wagyu beef patty, crispy bacon, cheddar cheese, BBQ sauce, crispy onion rings.",
  },
  {
    id: "d10",
    name: "Tiramisu",
    restaurant: "Sweet Ends",
    restaurantId: "r5",
    price: 8.5,
    rating: 4.8,
    deliveryTime: "15 min",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    category: "desserts",
    description:
      "Classic Italian tiramisu with ladyfinger biscuits, mascarpone cream, espresso, and cocoa.",
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Grind House",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&q=80",
    cuisine: "American Burgers",
    deliveryTime: "18–25 min",
    rating: 4.8,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
  },
  {
    id: "r2",
    name: "Napoli Express",
    logo: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&q=80",
    cuisine: "Italian Pizza",
    deliveryTime: "20–30 min",
    rating: 4.9,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    id: "r3",
    name: "Sakura Sushi",
    logo: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=100&q=80",
    cuisine: "Japanese Sushi",
    deliveryTime: "25–35 min",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80",
  },
  {
    id: "r4",
    name: "Casa Fuego",
    logo: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=100&q=80",
    cuisine: "Mexican Street Food",
    deliveryTime: "18–28 min",
    rating: 4.8,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400&q=80",
  },
  {
    id: "r5",
    name: "Sweet Ends",
    logo: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=100&q=80",
    cuisine: "Desserts & Pastries",
    deliveryTime: "12–20 min",
    rating: 4.9,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=400&q=80",
  },
  {
    id: "r6",
    name: "Trattoria Roma",
    logo: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=100&q=80",
    cuisine: "Italian Pasta",
    deliveryTime: "22–30 min",
    rating: 4.6,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
  },
];

export const heroBanners = [
  {
    id: "b1",
    title: "Free Delivery Today",
    subtitle: "On orders over $25",
    cta: "Order Now",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80",
    accent: "#FF4D1C",
  },
  {
    id: "b2",
    title: "50% Off Sushi",
    subtitle: "Today only — limited time",
    cta: "Grab the Deal",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900&q=80",
    accent: "#FFD600",
  },
  {
    id: "b3",
    title: "New Arrivals",
    subtitle: "Fresh dishes just added",
    cta: "Explore New",
    image:
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=900&q=80",
    accent: "#FF4D1C",
  },
];
