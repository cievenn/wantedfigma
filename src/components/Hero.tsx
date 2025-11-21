import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761392676464-2d518ffa243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHJlZHxlbnwxfHx8fDE3NjIzNDcyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Red Overlay with Glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7B0A0A]/70 via-[#D62828]/50 to-[#FF4C29]/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-lg bg-white/10 rounded-[2rem] p-12 md:p-16 border border-white/20 shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-white mb-4 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Sois <span className="text-[#FF4C29]">Visible</span>,
                <br />
                Sois <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4C29] to-white">Recherché</span>,
                <br />
                <span className="text-white drop-shadow-[0_0_30px_rgba(255,76,41,0.5)]">Sois Wanted</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/90 mb-8 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Sites web premium qui élèvent votre marque au rang de référence.
              <br />
              Minimal. Luxueux. Impactant.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative backdrop-blur-md bg-white/20 hover:bg-[#D62828] text-white px-8 py-4 rounded-full border border-white/30 hover:border-[#FF4C29] transition-all duration-300 shadow-lg hover:shadow-[0_20px_60px_rgba(214,40,40,0.6)] inline-flex items-center gap-2"
            >
              <span className="font-semibold text-lg">Démarrer Mon Ascension</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF4C29]/50 to-[#D62828]/50 blur-xl -z-10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-10 w-20 h-20 backdrop-blur-md bg-white/10 rounded-[1.5rem] border border-white/20 hidden lg:block"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-10 w-32 h-32 backdrop-blur-md bg-white/10 rounded-[2rem] border border-white/20 hidden lg:block"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
