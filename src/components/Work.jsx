import { motion } from "framer-motion";

export default function Work() {
  return (
    <section className="py-20 bg-gray-50 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        {[1,2,3,4].map((i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="h-60 bg-gray-300 rounded-xl"
          />
        ))}

      </div>

    </section>
  );
}