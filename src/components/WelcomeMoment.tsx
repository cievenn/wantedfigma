import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import logo from "figma:asset/bfc3eaf741a83887b155e002dffbfc71b6b1b6d2.png";

export function WelcomeMoment() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#7B0A0A] to-[#D62828] pointer-events-none"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <img src={logo} alt="Wanted" className="w-32 h-32 mx-auto object-contain" />
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2"
            >
              <motion.h2
                className="text-white font-extrabold text-3xl md:text-4xl"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 76, 41, 0.3)",
                    "0 0 40px rgba(255, 76, 41, 0.6)",
                    "0 0 20px rgba(255, 76, 41, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Sois <span className="text-[#FF4C29]">Visible</span>,
              </motion.h2>
              <motion.h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Sois <span className="text-white/90">Recherché</span>,
              </motion.h2>
              <motion.h2 className="text-white font-extrabold text-3xl md:text-4xl">
                Sois <span className="text-[#FF4C29]">Wanted</span>
              </motion.h2>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
