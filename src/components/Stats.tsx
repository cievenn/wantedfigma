import { motion } from "motion/react";
import { Award, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Projets Premium Livrés",
  },
  {
    icon: Users,
    value: "100%",
    label: "Clients Satisfaits",
  },
  {
    icon: TrendingUp,
    value: "+300%",
    label: "Croissance Moyenne",
  },
  {
    icon: Zap,
    value: "48h",
    label: "Temps de Réponse",
  },
];

export function Stats() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-[#FFF5F5] to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D62828]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF4C29]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#7B0A0A] mb-4 text-3xl md:text-4xl font-extrabold">
            Des Résultats <span className="text-[#D62828]">Mesurables</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-2 bg-gradient-to-br from-[#D62828]/20 to-[#FF4C29]/20 rounded-3xl blur-xl -z-10"
              />

              <div className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 border border-[#D62828]/20 hover:border-[#FF4C29]/40 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D62828] to-[#FF4C29] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-extrabold text-[#7B0A0A] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#7B0A0A]/70">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
