import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
        Payment Successful!
      </h2>
      <p className="text-[#F5F0E8]/60 mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
        Your order is confirmed and on its way 🚀
      </p>
      <div
        className="mt-4 px-5 py-2 border-2 border-[#FF4D1C] text-[#FF4D1C] font-bold uppercase text-sm"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        Estimated arrival: ~25 min
      </div>
      <motion.button
        onClick={() => navigate("/")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 px-6 py-3 border-2 border-[#F5F0E8] text-[#F5F0E8] font-bold uppercase hover:bg-[#F5F0E8] hover:text-[#1A1A18] transition-colors"
        style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
      >
        Back to Home
      </motion.button>
    </motion.div>
  );
}