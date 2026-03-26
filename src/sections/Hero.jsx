import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        AfriDigital Command Center
      </h1>
      <p className="text-lg opacity-80 mb-8">
        Powering APIs, fintech, media, and digital infrastructure across Africa.
      </p>
      <button className="px-6 py-3 rounded-2xl bg-black text-white">
        Get Started
      </button>
    </motion.section>
  );
}
