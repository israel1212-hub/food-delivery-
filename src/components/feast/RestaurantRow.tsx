import React from "react";
import { Star, Clock } from "lucide-react";
import { restaurants } from "./data";

export default function RestaurantRow() {
  return (
    <div className="mb-8">
      <div className="px-4 mb-4">
        <h2
          className="text-xl font-black uppercase text-[#F5F0E8] tracking-tight"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Top Restaurants
        </h2>
      </div>
      <div className="overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-3 w-max pb-2">
          {restaurants.map((r) => (
            <div
              key={r.id}
              className="w-44 flex-shrink-0 bg-[#F5F0E8] border-2 border-[#1A1A18] overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-transform"
              style={{ boxShadow: "3px 3px 0px #1A1A18" }}
            >
              {/* Restaurant image */}
              <div className="relative h-24 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A18]/40 to-transparent" />
                {r.badge && (
                  <span
                    className="absolute top-2 right-2 text-[10px] font-black uppercase px-2 py-0.5 border border-[#1A1A18]"
                    style={{
                      backgroundColor: r.badge === "Popular" ? "#FFD600" : "#FF4D1C",
                      color: r.badge === "Popular" ? "#1A1A18" : "#F5F0E8",
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    {r.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <h3
                  className="font-black text-sm uppercase leading-tight mb-0.5 text-[#1A1A18]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  {r.name}
                </h3>
                <p
                  className="text-[11px] text-[#1A1A18]/60 mb-2"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {r.cuisine}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-[#FFD600] text-[#FFD600]" />
                    <span className="text-[11px] font-bold text-[#1A1A18]" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {r.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#1A1A18]/60" />
                    <span className="text-[10px] text-[#1A1A18]/60" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {r.deliveryTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
