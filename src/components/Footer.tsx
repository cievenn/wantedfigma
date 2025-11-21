import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import logo from "figma:asset/bfc3eaf741a83887b155e002dffbfc71b6b1b6d2.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const quickLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#7B0A0A] via-[#7B0A0A] to-[#D62828]">
      {/* Liquid Wave Shape at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none -translate-y-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <motion.path
            initial={{ d: "M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z" }}
            animate={{
              d: [
                "M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z",
                "M0,50 Q360,40 720,50 T1440,50 L1440,0 L0,0 Z",
                "M0,60 Q360,20 720,60 T1440,60 L1440,0 L0,0 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="#7B0A0A"
          />
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xMDUtLjg5NS0yLTItMnMtMiAuODk1LTIgMiAuODk1IDIgMiAyIDItLjg5NSAyLTJ6bS0yIDZjLTEuMTA1IDAtMiAuODk1LTIgMnMuODk1IDIgMiAyIDItLjg5NSAyLTItLjg5NS0yLTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Wanted" className="w-14 h-14 object-contain" />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Sites web premium qui élèvent votre marque au rang de référence.
              <br />
              Minimal. Luxueux. Direct.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:bewantednow@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Mail size={18} />
                </div>
                <span>bewantednow@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span>Jodoigne, Belgique</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-white font-extrabold text-xl mb-4">Parlons de Ton Projet</h3>
            <p className="text-white/70 mb-6">
              Prêt à élever ta marque ? Laisse ton email, on te recontacte sous 48h.
            </p>
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="ton@email.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4C29] focus:border-transparent backdrop-blur-md transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#FF4C29] to-[#D62828] text-white rounded-xl hover:shadow-lg hover:shadow-[#FF4C29]/50 transition-all whitespace-nowrap"
                >
                  Je Me Lance
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Links & Social */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pt-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white/80 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-2 transition-transform duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white/80 font-semibold mb-4">Réseaux Sociaux</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 border border-white/20 hover:border-white/40"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm"
        >
          <p>© 2025 Wanted Agency. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF4C29]/20 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px] pointer-events-none"
      />
    </footer>
  );
}
