import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "./CartContext";

interface CartScreenProps {
  onBack: () => void;
}

export default function CartScreen({ onBack }: CartScreenProps) {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const [ordered, setOrdered] = React.useState(false);

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => {
      clearCart();
      setOrdered(false);
      onBack();
    }, 3000);
  };

  if (ordered) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-[#1A1A18] flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-7xl mb-6"
        >
          🎉
        </motion.div>
        <h2
          className="text-4xl font-black uppercase text-[#F5F0E8] mb-3"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Order Confirmed!
        </h2>
        <p className="text-[#F5F0E8]/60 mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
          Your order is on its way 🚀
        </p>
        <div
          className="mt-4 px-5 py-2 border-2 border-[#FF4D1C] text-[#FF4D1C] font-bold uppercase text-sm"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Estimated arrival: ~25 min
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 280 }}
      className="min-h-screen bg-[#1A1A18] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-4 border-b-2 border-[#F5F0E8]/10">
        <button
          onClick={onBack}
          className="w-9 h-9 flex items-center justify-center border-2 border-[#F5F0E8]/20 text-[#F5F0E8] hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1
          className="text-xl font-black uppercase text-[#F5F0E8]"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Your Cart
        </h1>
        {items.length > 0 && (
          <span
            className="ml-auto text-xs text-[#F5F0E8]/50 cursor-pointer hover:text-[#FF4D1C] transition-colors"
            onClick={() => clearCart()}
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Clear all
          </span>
        )}
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full pt-20 text-center">
            <ShoppingBag className="w-16 h-16 text-[#F5F0E8]/20 mb-4" />
            <h3
              className="text-xl font-black uppercase text-[#F5F0E8]/40 mb-2"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              Cart is Empty
            </h3>
            <p className="text-sm text-[#F5F0E8]/30" style={{ fontFamily: "Outfit, sans-serif" }}>
              Add some dishes to get started
            </p>
          </div>
        ) : (
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex gap-3 mb-4 bg-[#F5F0E8] border-2 border-[#1A1A18] p-3"
                style={{ boxShadow: "2px 2px 0px rgba(245,240,232,0.15)" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover flex-shrink-0"
                  style={{ border: "2px solid #1A1A18" }}
                />
                <div className="flex-1 min-w-0">
                  <h4
                    className="font-black text-sm uppercase text-[#1A1A18] leading-tight mb-0.5 truncate"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#1A1A18]/60 mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {item.restaurant} · {item.size || "Regular"}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className="font-black text-base text-[#FF4D1C]"
                      style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border-2 border-[#1A1A18] hover:bg-[#1A1A18]/10 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span
                        className="w-7 h-7 flex items-center justify-center font-black text-sm text-[#1A1A18] border-y-2 border-[#1A1A18]"
                        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border-2 border-[#1A1A18] hover:bg-[#1A1A18]/10 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-7 h-7 flex items-center justify-center border-2 border-[#1A1A18] ml-1 hover:bg-[#FF4D1C] hover:border-[#FF4D1C] hover:text-[#F5F0E8] transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Order Summary & CTA */}
      {items.length > 0 && (
        <div className="px-4 pb-6 pt-4 border-t-2 border-[#F5F0E8]/10">
          <div className="mb-4 space-y-2">
            <div className="flex justify-between text-sm text-[#F5F0E8]/60" style={{ fontFamily: "Outfit, sans-serif" }}>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-[#F5F0E8]/60" style={{ fontFamily: "Outfit, sans-serif" }}>
              <span>Delivery Fee</span>
              <span className="text-[#FFD600] font-bold">FREE</span>
            </div>
            <div className="flex justify-between font-black text-[#F5F0E8] text-lg border-t-2 border-[#F5F0E8]/10 pt-2" style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <motion.button
            onClick={handleOrder}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between px-5 py-4 border-2 border-[#1A1A18] bg-[#FF4D1C] text-[#F5F0E8] font-black uppercase"
            style={{
              boxShadow: "4px 4px 0px rgba(245,240,232,0.2)",
              fontFamily: "Bricolage Grotesque, sans-serif",
            }}
          >
            <span>Place Order</span>
            <div className="flex items-center gap-2">
              <span className="text-lg">${totalPrice.toFixed(2)}</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
