import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, Plus } from "lucide-react";
import { Dish } from "./types";
import { useCart } from "./CartContext";
import { toast } from "sonner";

interface DishCardProps {
  dish: Dish;
  index: number;
  onTap: (dish: Dish) => void;
}

export default function DishCard({ dish, index, onTap }: DishCardProps) {
  const { addItem } = useCart();
  const [popped, setPopped] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(dish);
    setPopped(true);
    setTimeout(() => setPopped(false), 400);
    toast.success(`${dish.name} added to cart`, {
      duration: 1800,
      position: "bottom-center",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      onClick={() => onTap(dish)}
      className="cursor-pointer bg-[#F5F0E8] border-2 border-[#1A1A18] overflow-hidden"
      style={{ boxShadow: "3px 3px 0px #1A1A18" }}
    >
      {/* Dish Image */}
      <div className="relative" style={{ paddingTop: "62%" }}>
        <img
          src={dish.image}
          alt={dish.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ borderRadius: "6px 6px 0 0" }}
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {dish.popular && (
            <span
              className="text-[10px] font-black uppercase px-2 py-0.5 border border-[#1A1A18]"
              style={{ backgroundColor: "#FFD600", fontFamily: "Outfit, sans-serif" }}
            >
              🔥 Popular
            </span>
          )}
          {dish.isNew && (
            <span
              className="text-[10px] font-black uppercase px-2 py-0.5 border border-[#1A1A18]"
              style={{ backgroundColor: "#FF4D1C", color: "#F5F0E8", fontFamily: "Outfit, sans-serif" }}
            >
              ✦ New
            </span>
          )}
        </div>
        {/* Delivery time badge */}
        <div className="absolute bottom-2 right-2">
          <span
            className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-[#1A1A18] text-[#F5F0E8]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <Clock className="w-2.5 h-2.5" /> {dish.deliveryTime}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3
          className="font-black text-sm uppercase leading-tight mb-0.5 text-[#1A1A18] line-clamp-1"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          {dish.name}
        </h3>
        <p
          className="text-xs text-[#1A1A18]/60 mb-2 line-clamp-1"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {dish.restaurant}
        </p>

        {/* Price row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="font-black text-base text-[#1A1A18]"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              ${dish.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-[#FFD600] text-[#FFD600]" />
              <span className="text-[11px] font-bold text-[#1A1A18]" style={{ fontFamily: "Outfit, sans-serif" }}>
                {dish.rating}
              </span>
            </div>
          </div>

          {/* Add button */}
          <motion.button
            onClick={handleAdd}
            animate={popped ? { scale: [1, 1.35, 0.9, 1.1, 1] } : { scale: 1 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-8 h-8 flex items-center justify-center border-2 border-[#1A1A18] bg-[#FF4D1C] text-[#F5F0E8] hover:bg-[#e03d10] transition-colors"
            style={{ boxShadow: "2px 2px 0px #1A1A18" }}
          >
            <Plus className="w-4 h-4 stroke-[3]" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
