import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";
import LocationSelector from "./LocationSelector";

interface NavBarProps {
  location: string;
  onLocationChange: (loc: string) => void;
  onCartClick: () => void;
}

export default function NavBar({ location, onLocationChange, onCartClick }: NavBarProps) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-20 bg-[#1A1A18] border-b-2 border-[#F5F0E8]/10">
      <div className="flex items-center justify-between h-14 px-4">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <span className="text-xl">🔥</span>
          <span
            className="text-xl font-black uppercase text-[#F5F0E8] tracking-tight leading-none"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Feast
            <span style={{ color: "#FF4D1C" }}>Rush</span>
          </span>
        </div>

        {/* Location */}
        <LocationSelector location={location} onLocationChange={onLocationChange} />

        {/* Cart */}
        <button
          onClick={onCartClick}
          className="relative w-9 h-9 flex items-center justify-center border-2 border-[#F5F0E8]/20 text-[#F5F0E8] hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <motion.span
              key={totalItems}
              initial={{ scale: 0.6 }}
              animate={{ scale: [0.6, 1.3, 1] }}
              transition={{ duration: 0.3 }}
              className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center text-[10px] font-black bg-[#FF4D1C] text-[#F5F0E8] rounded-full border border-[#1A1A18] px-0.5"
            >
              {totalItems}
            </motion.span>
          )}
        </button>
      </div>
    </header>
  );
}
