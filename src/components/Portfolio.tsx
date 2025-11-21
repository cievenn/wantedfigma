import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "Identité Visuelle - Tech Startup",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIyNDUxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Application Mobile E-commerce",
    category: "Développement",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWdufGVufDF8fHx8MTc2MjI2MzUxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Campagne Marketing - Luxe",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjIzMzMzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Site Web Corporate",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1508361727343-ca787442dcd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjMwNzEzOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("portfolio");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-[#D62828]/5 to-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#7B0A0A] mb-4 text-4xl md:text-5xl font-extrabold">
            Nos <span className="text-[#D62828]">Réalisations</span>
          </h2>
          <p className="text-[#7B0A0A]/70 max-w-2xl mx-auto text-lg">
            Découvrez quelques-uns des projets qui nous ont permis d'exprimer notre créativité
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -20, scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] cursor-pointer"
              style={{
                boxShadow: hoveredProject === project.id 
                  ? "0 30px 60px -12px rgba(214, 40, 40, 0.4), 0 0 40px rgba(255, 76, 41, 0.2)"
                  : "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Image */}
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B0A0A]/80 via-[#D62828]/70 to-[#FF4C29]/60 opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Glass Card Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                  y: hoveredProject === project.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8"
              >
                <div className="backdrop-blur-xl bg-white/20 rounded-[2rem] p-8 border border-white/30 text-center">
                  <span className="inline-block px-4 py-1 bg-white/30 rounded-full text-white text-sm mb-4 backdrop-blur-md">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-extrabold">{project.title}</h3>
                </div>
              </motion.div>

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#7B0A0A]/90 to-transparent flex items-end p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div>
                  <p className="text-white/80 text-sm mb-1">{project.category}</p>
                  <h3 className="text-white font-extrabold text-xl">{project.title}</h3>
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-[#FF4C29]/50 transition-all duration-500 pointer-events-none"></div>
              
              {/* Floating Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                className="absolute -inset-4 bg-gradient-to-r from-[#D62828]/20 to-[#FF4C29]/20 rounded-[3rem] blur-2xl -z-10 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-md bg-[#D62828] hover:bg-[#7B0A0A] text-white px-8 py-4 rounded-full border border-[#FF4C29]/30 transition-all duration-300 shadow-lg hover:shadow-[#D62828]/50"
          >
            Voir tous les projets
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF4C29]/10 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
}
