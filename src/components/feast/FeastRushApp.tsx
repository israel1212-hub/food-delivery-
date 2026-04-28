import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartProvider } from "./CartContext";
import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import CategoryPillScroller from "./CategoryPillScroller";
import FeaturedDishesGrid from "./FeaturedDishesGrid";
import RestaurantRow from "./RestaurantRow";
import FloatingCartBar from "./FloatingCartBar";
import DishModal from "./DishModal";
import CartScreen from "./CartScreen";
import { dishes } from "./data";
import { Dish } from "./types";

function FeastRushContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [location, setLocation] = useState("123 Main Street, New York, NY");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = useMemo(() => {
    let result = activeCategory === "all" ? dishes : dishes.filter((d) => d.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.restaurant.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div
      className="min-h-screen bg-[#1A1A18] overflow-x-hidden"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      {/* Font imports via inline style */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Outfit:wght@400;500;600;700;800;900&display=swap');
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Nav Bar */}
      <NavBar
        location={location}
        onLocationChange={setLocation}
        onCartClick={() => setShowCart(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main scrollable content */}
      <main className="pb-28">
        {/* Hero Banner - only show when not searching */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="pt-4"
          >
            <HeroBanner />
          </motion.div>
        )}

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <CategoryPillScroller active={activeCategory} onChange={setActiveCategory} />
        </motion.div>

        {/* Featured Dishes */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <FeaturedDishesGrid dishes={filteredDishes} onDishTap={setSelectedDish} />
        </motion.div>

        {/* Restaurant Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <RestaurantRow />
        </motion.div>
      </main>

      {/* Floating Cart Bar */}
      <FloatingCartBar onViewCart={() => setShowCart(true)} />

      {/* Dish Modal */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />

      {/* Cart Screen */}
      <AnimatePresence>
        {showCart && (
          <div className="fixed inset-0 z-50">
            <CartScreen onBack={() => setShowCart(false)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FeastRushApp() {
  return (
    <CartProvider>
      <FeastRushContent />
    </CartProvider>
  );
}
