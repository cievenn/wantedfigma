import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "CEO, TechFlow",
    content: "Wanted a transformé notre vision en une identité de marque exceptionnelle. Leur créativité et professionnalisme nous ont permis de nous démarquer dans un marché compétitif.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIzMzMzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Marc Dubois",
    role: "Fondateur, Luxe & Co",
    content: "Une équipe à l'écoute qui a su comprendre nos besoins et dépasser nos attentes. Le résultat est à la hauteur de nos ambitions : moderne, élégant et impactant.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW18ZW58MXx8fHwxNzYyMzMxMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Élise Rousseau",
    role: "Directrice Marketing, Innova",
    content: "Collaboration fluide et résultats remarquables. Wanted a su donner vie à notre projet avec une approche innovante et des solutions créatives qui ont conquis notre audience.",
    image: "https://images.unsplash.com/photo-1508361727343-ca787442dcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjMwNzEzOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FF4C29]/10 to-white"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#7B0A0A] mb-4 text-4xl md:text-5xl font-extrabold">
            Ils Nous Ont Fait <span className="text-[#D62828]">Confiance</span>
          </h2>
          <p className="text-[#7B0A0A]/70 max-w-2xl mx-auto text-lg">
            Découvrez les retours de nos clients satisfaits
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass Container */}
          <div className="backdrop-blur-xl bg-white/60 rounded-[3rem] p-8 md:p-12 border border-[#D62828]/20 shadow-2xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote size={80} className="text-[#D62828]" />
            </div>

            <div className="relative min-h-[300px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#D62828]/30 shadow-lg">
                        <ImageWithFallback
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-[#7B0A0A] mb-6 text-lg italic leading-relaxed">
                        "{testimonials[currentIndex].content}"
                      </p>
                      <div>
                        <h4 className="text-[#D62828] font-extrabold text-xl mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-[#7B0A0A]/60">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 backdrop-blur-md bg-white/50 hover:bg-[#D62828] text-[#7B0A0A] hover:text-white rounded-full border border-[#D62828]/30 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[#D62828]/30"
              >
                <ChevronLeft size={24} />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#D62828] w-8"
                        : "bg-[#D62828]/30 hover:bg-[#D62828]/50"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 backdrop-blur-md bg-white/50 hover:bg-[#D62828] text-[#7B0A0A] hover:text-white rounded-full border border-[#D62828]/30 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[#D62828]/30"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-[#D62828]/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF4C29]/10 rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  );
}
