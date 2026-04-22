import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "./CartContext";

interface FloatingCartBarProps {
  onViewCart: () => void;
}

export default function FloatingCartBar({ onViewCart }: FloatingCartBarProps) {
  const { totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-2"
        >
          <motion.button
            onClick={onViewCart}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between px-5 py-4 border-2 border-[#1A1A18] bg-[#FF4D1C] text-[#F5F0E8]"
            style={{
              boxShadow: "4px 4px 0px #1A1A18",
              fontFamily: "Bricolage Grotesque, sans-serif",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-[10px] font-black bg-[#FFD600] text-[#1A1A18] rounded-full border border-[#1A1A18]"
                >
                  {totalItems}
                </span>
              </div>
              <span className="font-black uppercase text-sm tracking-wide">
                View Cart
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-black text-lg">
                ${totalPrice.toFixed(2)}
              </span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
