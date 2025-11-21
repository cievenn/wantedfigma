import { motion } from "motion/react";
import { Zap, Target, Award } from "lucide-react";
import { useEffect, useState } from "react";

const values = [
  {
    icon: Zap,
    title: "Impact Immédiat",
    description: "Des designs qui captent l'attention et convertissent dès le premier regard",
  },
  {
    icon: Target,
    title: "Sur-Mesure",
    description: "Chaque projet est unique, conçu spécifiquement pour vos objectifs",
  },
  {
    icon: Award,
    title: "Excellence Premium",
    description: "Un niveau de qualité qui place votre marque dans une classe à part",
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about-section" className="relative py-32 overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FF4C29]/5 to-white"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-[#7B0A0A] mb-6 text-4xl md:text-5xl font-extrabold">
            Pourquoi <span className="text-[#D62828]">Wanted</span> Existe ?
          </h2>
          <p className="text-[#7B0A0A]/80 mb-6 text-xl">
            Parce que votre marque mérite plus qu'un simple site web.
          </p>
          <p className="text-[#7B0A0A]/70 text-lg leading-relaxed">
            Nous créons des expériences digitales qui <span className="text-[#D62828] font-semibold">positionnent votre marque comme la référence</span> de votre secteur. 
            Chaque projet est une opportunité de transformer votre présence en ligne en <span className="text-[#D62828] font-semibold">avantage concurrentiel décisif</span>.
          </p>
          <p className="text-[#7B0A0A]/70 text-lg leading-relaxed mt-4">
            Pour vous ? Cela signifie plus de visibilité, plus de crédibilité, et des clients qui vous choisissent <span className="text-[#D62828] font-semibold">avant même de parler à la concurrence</span>.
          </p>
        </motion.div>

        {/* Glass Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/60 rounded-[3rem] p-8 md:p-12 border border-[#D62828]/20 shadow-2xl max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative backdrop-blur-md bg-white/50 rounded-[2rem] p-8 border border-[#FF4C29]/20 hover:border-[#D62828]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#D62828]/10"
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#FF4C29] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#D62828]/30 transition-shadow"
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-[#7B0A0A] mb-3 text-2xl font-extrabold">{value.title}</h3>
                  <p className="text-[#7B0A0A]/70">{value.description}</p>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#D62828]/0 to-[#FF4C29]/0 group-hover:from-[#D62828]/5 group-hover:to-[#FF4C29]/5 transition-all duration-300 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Decorative Floating Elements */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-24 h-24 backdrop-blur-md bg-[#FF4C29]/10 rounded-[2rem] border border-[#FF4C29]/20 hidden lg:block"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-10 w-32 h-32 backdrop-blur-md bg-[#D62828]/10 rounded-[2.5rem] border border-[#D62828]/20 hidden lg:block"
        />
      </div>
    </section>
  );
}
