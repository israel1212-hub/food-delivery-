import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroBanners } from "./data";

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroBanners.length);
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (idx: number) => {
    setCurrent((idx + heroBanners.length) % heroBanners.length);
    resetTimer();
  };

  const banner = heroBanners[current];

  return (
    <div className="relative mx-4 mb-6 rounded-none overflow-hidden border-2 border-[#1A1A18]"
      style={{ boxShadow: "4px 4px 0px #1A1A18" }}>
      <div className="relative h-52 sm:h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A18]/90 via-[#1A1A18]/60 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-1 mb-2 rounded-sm"
                  style={{ backgroundColor: banner.accent, color: "#1A1A18" }}
                >
                  {banner.subtitle}
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase leading-none mb-4 text-[#F5F0E8]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  {banner.title}
                </h2>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase border-2 border-[#F5F0E8] text-[#F5F0E8] hover:bg-[#F5F0E8] hover:text-[#1A1A18] transition-colors"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {banner.cta}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#1A1A18]/60 hover:bg-[#1A1A18] border border-[#F5F0E8]/30 text-[#F5F0E8] transition-colors rounded-sm z-10"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#1A1A18]/60 hover:bg-[#1A1A18] border border-[#F5F0E8]/30 text-[#F5F0E8] transition-colors rounded-sm z-10"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {heroBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === current ? "24px" : "6px",
              backgroundColor: i === current ? "#FF4D1C" : "rgba(245,240,232,0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
