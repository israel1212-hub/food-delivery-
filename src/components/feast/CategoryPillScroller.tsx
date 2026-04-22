import React from "react";
import { categories } from "./data";

interface CategoryPillScrollerProps {
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryPillScroller({ active, onChange }: CategoryPillScrollerProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide px-4 mb-6">
      <div className="flex gap-2 w-max">
        {categories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-[#1A1A18] text-sm font-bold uppercase whitespace-nowrap transition-all duration-200 select-none"
              style={{
                backgroundColor: isActive ? "#FF4D1C" : "#F5F0E8",
                color: isActive ? "#F5F0E8" : "#1A1A18",
                boxShadow: isActive ? "2px 2px 0px #1A1A18" : "none",
                fontFamily: "Outfit, sans-serif",
                transform: isActive ? "translate(-1px, -1px)" : "none",
              }}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
