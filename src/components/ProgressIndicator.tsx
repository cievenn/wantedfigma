import { motion } from "motion/react";

export function ProgressIndicator() {
  return (
    <div className="relative h-20 flex items-center justify-center overflow-hidden">
      {/* Liquid Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#D62828]/40 via-[#FF4C29]/60 to-transparent origin-top"
      />

      {/* Flowing Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [100, -20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF4C29] rounded-full blur-[2px]"
        />
      ))}
    </div>
  );
}
