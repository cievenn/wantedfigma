import { motion } from "motion/react";
import { Palette, Code, Megaphone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Palette,
    title: "Design Premium",
    description: "Identités visuelles sophistiquées qui positionnent votre marque au sommet de votre secteur.",
  },
  {
    icon: Code,
    title: "Développement d'Elite",
    description: "Sites web haute performance, conçus pour impressionner et convertir votre audience cible.",
  },
  {
    icon: Megaphone,
    title: "Visibilité Maximale",
    description: "Stratégies qui transforment votre présence digitale en machine à générer des opportunités.",
  },
  {
    icon: Sparkles,
    title: "Expérience Exclusive",
    description: "Interfaces luxueuses qui créent une connexion émotionnelle forte avec vos visiteurs.",
  },
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-[#7B0A0A]/5 to-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#7B0A0A] mb-4 text-4xl md:text-5xl font-extrabold">
            Services <span className="text-[#D62828]">d'Exception</span>
          </h2>
          <p className="text-[#7B0A0A]/70 max-w-2xl mx-auto text-lg">
            L'arsenal complet pour positionner votre marque au sommet
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -20, scale: 1.05 }}
                className="group relative"
              >
                {/* Floating Glow Background */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -inset-2 bg-gradient-to-br from-[#D62828]/20 to-[#FF4C29]/20 rounded-[2.5rem] blur-xl -z-10"
                />
                
                {/* Glass Card */}
                <div className="backdrop-blur-xl bg-white/70 rounded-[2rem] p-8 border border-[#D62828]/20 hover:border-[#FF4C29]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D62828]/30 h-full">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#D62828] to-[#FF4C29] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#FF4C29]/40 transition-shadow"
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-[#7B0A0A] mb-3 text-xl font-extrabold">{service.title}</h3>
                  <p className="text-[#7B0A0A]/70 text-sm leading-relaxed">{service.description}</p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#D62828]/0 via-[#FF4C29]/0 to-[#D62828]/0 group-hover:from-[#D62828]/10 group-hover:via-[#FF4C29]/5 group-hover:to-[#D62828]/10 transition-all duration-500 pointer-events-none"></div>
                </div>

                {/* Decorative Element */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#FF4C29] to-[#D62828] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D62828]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF4C29]/5 rounded-full blur-[120px] pointer-events-none"></div>
      </div>
    </section>
  );
}
