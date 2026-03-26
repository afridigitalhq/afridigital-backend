import { motion } from "framer-motion";

const features = [
  "Payment Integration",
  "Football API",
  "Media Processing",
  "User Management",
  "Cloud Services",
  "AfriLove Platform"
];

export default function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-6 px-6 py-12">
      {features.map((f, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl shadow-lg border"
        >
          <h3 className="text-xl font-semibold">{f}</h3>
        </motion.div>
      ))}
    </section>
  );
}
