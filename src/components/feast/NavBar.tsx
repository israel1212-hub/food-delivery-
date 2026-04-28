import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, X } from "lucide-react";
import { useCart } from "./CartContext";
import LocationSelector from "./LocationSelector";

interface NavBarProps {
  location: string;
  onLocationChange: (loc: string) => void;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function NavBar({
  location,
  onLocationChange,
  onCartClick,
  searchQuery,
  onSearchChange,
}: NavBarProps) {
  const { totalItems } = useCart();
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    if (showSearch) {
      onSearchChange("");
    }
    setShowSearch((v) => !v);
  };

  return (
    <header className="sticky top-0 z-20 bg-[#1A1A18] border-b-2 border-[#F5F0E8]/10">
      <div className="flex items-center justify-between h-14 px-4 gap-2">
        {/* Logo */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-xl">🔥</span>
          <span
            className="text-xl font-black uppercase text-[#F5F0E8] tracking-tight leading-none"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Feast<span style={{ color: "#FF4D1C" }}>Rush</span>
          </span>
        </div>

        {/* Location (hidden when search is open) */}
        {!showSearch && (
          <LocationSelector location={location} onLocationChange={onLocationChange} />
        )}

        {/* Search input (shown when search is open) */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              exit={{ opacity: 0, width: 0 }}
              className="flex-1 overflow-hidden"
            >
              <input
                autoFocus
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search dishes, restaurants..."
                className="w-full px-3 py-1.5 bg-[#F5F0E8]/10 border-2 border-[#F5F0E8]/20 text-[#F5F0E8] placeholder:text-[#F5F0E8]/40 focus:border-[#FF4D1C] focus:outline-none text-sm transition-colors"
                style={{ fontFamily: "Outfit, sans-serif" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Search toggle */}
          <button
            type="button"
            aria-label={showSearch ? "Close search" : "Open search"}
            onClick={handleSearchToggle}
            className="w-9 h-9 flex items-center justify-center border-2 border-[#F5F0E8]/20 text-[#F5F0E8] hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
          >
            {showSearch ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
          </button>

          {/* Cart */}
          <button
            type="button"
            aria-label="View cart"
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
      </div>
    </header>
  );
}
