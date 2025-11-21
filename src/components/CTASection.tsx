import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("cta-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="cta-section" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7B0A0A] via-[#D62828] to-[#FF4C29]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xMDUtLjg5NS0yLTItMnMtMiAuODk1LTIgMiAuODk1IDIgMiAyIDItLjg5NSAyLTJ6bS0yIDZjLTEuMTA1IDAtMiAuODk1LTIgMnMuODk1IDIgMiAyIDItLjg5NSAyLTItLjg5NS0yLTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass Container */}
          <div className="backdrop-blur-2xl bg-white/15 rounded-[3rem] p-12 md:p-16 border border-white/30 shadow-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-white mb-6 text-4xl md:text-5xl font-extrabold"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 76, 41, 0.3)",
                    "0 0 40px rgba(255, 76, 41, 0.5)",
                    "0 0 20px rgba(255, 76, 41, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Prêt à Vous Élever
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF4C29]">
                  Au Sommet ?
                </span>
              </motion.h2>
              <p className="text-white/90 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
                Rejoignez l'élite des marques qui ont choisi l'excellence.
                <br />
                Votre ascension commence ici.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.08, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(255, 255, 255, 0.6), 0 10px 40px rgba(255, 76, 41, 0.3)",
                      "0 0 0 20px rgba(255, 255, 255, 0), 0 20px 60px rgba(255, 76, 41, 0.5)",
                      "0 0 0 0 rgba(255, 255, 255, 0.6), 0 10px 40px rgba(255, 76, 41, 0.3)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="group backdrop-blur-md bg-white hover:bg-white/90 text-[#D62828] px-8 py-4 rounded-full border border-white/30 transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
                >
                  <Mail size={20} />
                  <span className="font-extrabold text-lg">Nous Contacter</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full border border-white/40 transition-all duration-300 shadow-lg"
                >
                  <span className="font-extrabold text-lg">Voir nos tarifs</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-10 left-10 w-20 h-20 backdrop-blur-md bg-white/20 rounded-[1.5rem] border border-white/30 hidden lg:block"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 right-10 w-24 h-24 backdrop-blur-md bg-white/20 rounded-[2rem] border border-white/30 hidden lg:block"
            />
          </div>
        </motion.div>
      </div>

      {/* Liquid Wave Shape at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path
            initial={{ d: "M0,60 Q360,100 720,60 T1440,60 L1440,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,60 Q360,100 720,60 T1440,60 L1440,120 L0,120 Z",
                "M0,50 Q360,80 720,50 T1440,50 L1440,120 L0,120 Z",
                "M0,60 Q360,100 720,60 T1440,60 L1440,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="#ffffff"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
}
