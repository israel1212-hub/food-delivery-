import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Star, Clock, ShoppingBag } from "lucide-react";
import { Dish } from "./types";
import { useCart } from "./CartContext";

interface DishModalProps {
  dish: Dish | null;
  onClose: () => void;
}

const sizes = ["Regular", "Large", "XL"];
const extras = ["Extra Cheese", "Extra Sauce", "Add Bacon", "Gluten-Free Base", "Extra Spicy"];

export default function DishModal({ dish, onClose }: DishModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Regular");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (extra: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleAdd = () => {
    if (!dish) return;
    addItem(dish, quantity, selectedSize, selectedExtras);
    onClose();
  };

  return (
    <AnimatePresence>
      {dish && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A18]/70 z-40 backdrop-blur-sm"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-y-auto bg-[#F5F0E8] border-t-2 border-l-2 border-r-2 border-[#1A1A18]"
            style={{ borderRadius: "12px 12px 0 0" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border-2 border-[#1A1A18] bg-[#1A1A18] text-[#F5F0E8] z-10 hover:bg-[#FF4D1C] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Dish image */}
            <div className="relative h-52 overflow-hidden" style={{ borderRadius: "10px 10px 0 0" }}>
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8] to-transparent" />
            </div>

            {/* Content */}
            <div className="px-5 pb-8 -mt-6 relative">
              <div className="flex items-start justify-between mb-1">
                <h2
                  className="text-2xl font-black uppercase leading-tight text-[#1A1A18] flex-1 pr-4"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  {dish.name}
                </h2>
                <span
                  className="text-2xl font-black text-[#FF4D1C] flex-shrink-0"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  ${dish.price.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#FFD600] text-[#FFD600]" />
                  <span className="text-sm font-bold text-[#1A1A18]" style={{ fontFamily: "Outfit, sans-serif" }}>{dish.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#1A1A18]/60" />
                  <span className="text-sm text-[#1A1A18]/60" style={{ fontFamily: "Outfit, sans-serif" }}>{dish.deliveryTime}</span>
                </div>
                <span className="text-sm text-[#1A1A18]/60" style={{ fontFamily: "Outfit, sans-serif" }}>· {dish.restaurant}</span>
              </div>

              <p className="text-sm text-[#1A1A18]/70 mb-5 leading-relaxed" style={{ fontFamily: "Outfit, sans-serif" }}>
                {dish.description}
              </p>

              {/* Size selector */}
              <div className="mb-5">
                <h3
                  className="text-sm font-black uppercase mb-2 text-[#1A1A18]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Size
                </h3>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="px-4 py-1.5 text-sm font-bold border-2 border-[#1A1A18] transition-all"
                      style={{
                        backgroundColor: selectedSize === size ? "#FF4D1C" : "transparent",
                        color: selectedSize === size ? "#F5F0E8" : "#1A1A18",
                        boxShadow: selectedSize === size ? "2px 2px 0px #1A1A18" : "none",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div className="mb-6">
                <h3
                  className="text-sm font-black uppercase mb-2 text-[#1A1A18]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Add Extras
                </h3>
                <div className="flex flex-wrap gap-2">
                  {extras.map((extra) => {
                    const active = selectedExtras.includes(extra);
                    return (
                      <button
                        key={extra}
                        onClick={() => toggleExtra(extra)}
                        className="px-3 py-1 text-xs font-bold border-2 border-[#1A1A18] transition-all"
                        style={{
                          backgroundColor: active ? "#1A1A18" : "transparent",
                          color: active ? "#F5F0E8" : "#1A1A18",
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        {extra}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity + Add to Order */}
              <div className="flex items-center gap-4">
                {/* Qty controls */}
                <div className="flex items-center border-2 border-[#1A1A18]" style={{ boxShadow: "2px 2px 0px #1A1A18" }}>
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#1A1A18]/10 transition-colors"
                  >
                    <Minus className="w-4 h-4 text-[#1A1A18]" />
                  </button>
                  <span
                    className="w-10 h-10 flex items-center justify-center font-black text-lg text-[#1A1A18] border-x-2 border-[#1A1A18]"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#1A1A18]/10 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-[#1A1A18]" />
                  </button>
                </div>

                {/* Add to order */}
                <motion.button
                  onClick={handleAdd}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 font-black uppercase text-sm border-2 border-[#1A1A18] bg-[#FF4D1C] text-[#F5F0E8] hover:bg-[#e03d10] transition-colors"
                  style={{
                    boxShadow: "3px 3px 0px #1A1A18",
                    fontFamily: "Bricolage Grotesque, sans-serif",
                  }}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Order · ${(dish.price * quantity).toFixed(2)}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
