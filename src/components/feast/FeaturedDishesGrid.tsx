import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dish } from "./types";
import DishCard from "./DishCard";

interface FeaturedDishesGridProps {
  dishes: Dish[];
  onDishTap: (dish: Dish) => void;
}

export default function FeaturedDishesGrid({ dishes, onDishTap }: FeaturedDishesGridProps) {
  return (
    <div className="px-4 mb-6">
      <h2
        className="text-xl font-black uppercase mb-4 text-[#F5F0E8] tracking-tight"
        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
      >
        Featured Dishes
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={dishes.map((d) => d.id).join("-")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 gap-3"
        >
          {dishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} onTap={onDishTap} />
          ))}
        </motion.div>
      </AnimatePresence>

      {dishes.length === 0 && (
        <div className="text-center py-12 text-[#F5F0E8]/50" style={{ fontFamily: "Outfit, sans-serif" }}>
          <p className="text-4xl mb-3">🍽️</p>
          <p className="font-bold">No dishes in this category</p>
        </div>
      )}
    </div>
  );
}
