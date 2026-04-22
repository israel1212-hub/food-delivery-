import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, X, Search, Check } from "lucide-react";

interface LocationSelectorProps {
  location: string;
  onLocationChange: (loc: string) => void;
}

const savedAddresses = [
  "123 Main Street, New York, NY",
  "456 Oak Ave, Brooklyn, NY",
  "789 Park Blvd, Manhattan, NY",
  "321 West End, Jersey City, NJ",
];

export default function LocationSelector({ location, onLocationChange }: LocationSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = savedAddresses.filter((a) =>
    a.toLowerCase().includes(search.toLowerCase())
  );

  const select = (addr: string) => {
    onLocationChange(addr);
    setOpen(false);
    setSearch("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-[#F5F0E8] hover:opacity-80 transition-opacity max-w-[160px]"
      >
        <MapPin className="w-3.5 h-3.5 text-[#FF4D1C] flex-shrink-0" />
        <span
          className="text-xs font-bold truncate"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {location.split(",")[0]}
        </span>
        <ChevronDown className="w-3 h-3 flex-shrink-0" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-[#1A1A18]/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-4 right-4 z-50 bg-[#F5F0E8] border-2 border-[#1A1A18]"
              style={{ boxShadow: "4px 4px 0px #1A1A18" }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b-2 border-[#1A1A18]">
                <span
                  className="font-black text-sm uppercase text-[#1A1A18]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Delivery Location
                </span>
                <button onClick={() => setOpen(false)}>
                  <X className="w-4 h-4 text-[#1A1A18]" />
                </button>
              </div>

              {/* Search */}
              <div className="px-4 py-3 border-b-2 border-[#1A1A18]">
                <div className="flex items-center gap-2 border-2 border-[#1A1A18] px-3 py-2">
                  <Search className="w-4 h-4 text-[#1A1A18]/50 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search address..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 text-sm text-[#1A1A18] bg-transparent outline-none placeholder:text-[#1A1A18]/40"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                    autoFocus
                  />
                </div>
              </div>

              {/* List */}
              <div className="max-h-56 overflow-y-auto">
                {filtered.map((addr) => (
                  <button
                    key={addr}
                    onClick={() => select(addr)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#1A1A18]/5 transition-colors border-b border-[#1A1A18]/10 last:border-0"
                  >
                    <MapPin className="w-4 h-4 text-[#FF4D1C] flex-shrink-0" />
                    <span
                      className="text-sm text-[#1A1A18] text-left"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {addr}
                    </span>
                    {location === addr && (
                      <Check className="w-4 h-4 text-[#FF4D1C] ml-auto flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
