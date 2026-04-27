import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CreditCard, Smartphone, CheckCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const paymentMethods: PaymentMethod[] = [
  { id: "mtn", name: "MTN Mobile Money", icon: "📱", color: "#FFCC00" },
  { id: "airtel", name: "Airtel Money", icon: "📲", color: "#FF0000" },
  { id: "orange", name: "Orange Money", icon: "🍊", color: "#FF7900" },
  { id: "vodafone", name: "Vodafone Cash", icon: "💳", color: "#E60000" },
  { id: "card", name: "Credit/Debit Card", icon: "💳", color: "#4A5568" },
];

export default function Payment() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    if (!selectedMethod || (selectedMethod !== "card" && !phoneNumber)) {
      return;
    }

    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      navigate("/success");
    }, 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#1A1A18] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-4 border-b-2 border-[#F5F0E8]/10">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 flex items-center justify-center border-2 border-[#F5F0E8]/20 text-[#F5F0E8] hover:border-[#FF4D1C] hover:text-[#FF4D1C] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1
          className="text-xl font-black uppercase text-[#F5F0E8]"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Payment Method
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p
          className="text-sm text-[#F5F0E8]/60 mb-6"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Select your preferred payment method
        </p>

        {/* Payment Methods */}
        <div className="space-y-3 mb-6">
          {paymentMethods.map((method) => (
            <motion.button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-4 p-4 border-2 transition-all ${
                selectedMethod === method.id
                  ? "border-[#FF4D1C] bg-[#FF4D1C]/10"
                  : "border-[#F5F0E8]/20 bg-[#F5F0E8]/5 hover:border-[#F5F0E8]/40"
              }`}
              style={{
                boxShadow:
                  selectedMethod === method.id
                    ? "3px 3px 0px rgba(255,77,28,0.3)"
                    : "2px 2px 0px rgba(245,240,232,0.1)",
              }}
            >
              <div className="text-3xl">{method.icon}</div>
              <div className="flex-1 text-left">
                <h3
                  className="font-black text-sm uppercase text-[#F5F0E8]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  {method.name}
                </h3>
              </div>
              {selectedMethod === method.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle className="w-5 h-5 text-[#FF4D1C]" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Phone Number Input for Mobile Money */}
        <AnimatePresence>
          {selectedMethod && selectedMethod !== "card" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <label
                className="block text-sm font-bold text-[#F5F0E8] mb-2 uppercase"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Phone Number
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F5F0E8]/40" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full pl-11 pr-4 py-3 bg-[#F5F0E8]/5 border-2 border-[#F5F0E8]/20 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:border-[#FF4D1C] focus:outline-none transition-colors"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                />
              </div>
              <p
                className="text-xs text-[#F5F0E8]/40 mt-2"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                You will receive a prompt on your phone to confirm payment
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Input for Card Payment */}
        <AnimatePresence>
          {selectedMethod === "card" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 mb-6"
            >
              <div>
                <label
                  className="block text-sm font-bold text-[#F5F0E8] mb-2 uppercase"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F5F0E8]/40" />
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full pl-11 pr-4 py-3 bg-[#F5F0E8]/5 border-2 border-[#F5F0E8]/20 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:border-[#FF4D1C] focus:outline-none transition-colors"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-bold text-[#F5F0E8] mb-2 uppercase"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Expiry
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-[#F5F0E8]/5 border-2 border-[#F5F0E8]/20 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:border-[#FF4D1C] focus:outline-none transition-colors"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-[#F5F0E8] mb-2 uppercase"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 bg-[#F5F0E8]/5 border-2 border-[#F5F0E8]/20 text-[#F5F0E8] placeholder:text-[#F5F0E8]/30 focus:border-[#FF4D1C] focus:outline-none transition-colors"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Payment Button */}
      <div className="px-4 pb-6 pt-4 border-t-2 border-[#F5F0E8]/10">
        <motion.button
          onClick={handlePayment}
          disabled={!selectedMethod || (selectedMethod !== "card" && !phoneNumber) || processing}
          whileTap={{ scale: selectedMethod ? 0.98 : 1 }}
          className={`w-full flex items-center justify-center gap-3 px-5 py-4 border-2 font-black uppercase transition-all ${
            !selectedMethod || (selectedMethod !== "card" && !phoneNumber) || processing
              ? "border-[#F5F0E8]/20 bg-[#F5F0E8]/10 text-[#F5F0E8]/30 cursor-not-allowed"
              : "border-[#1A1A18] bg-[#FF4D1C] text-[#F5F0E8] hover:bg-[#FF4D1C]/90"
          }`}
          style={{
            boxShadow:
              selectedMethod && !processing
                ? "4px 4px 0px rgba(245,240,232,0.2)"
                : "none",
            fontFamily: "Bricolage Grotesque, sans-serif",
          }}
        >
          {processing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing Payment...</span>
            </>
          ) : (
            <span>Complete Payment</span>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
