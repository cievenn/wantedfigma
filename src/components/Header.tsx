import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "figma:asset/bfc3eaf741a83887b155e002dffbfc71b6b1b6d2.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const menuItems = ["Accueil", "Services", "Portfolio", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transform values for scroll animation
  const headerPadding = useTransform(scrollY, [0, 100], ["1.5rem", "0.75rem"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "top-4" : "top-0"
      }`}
    >
      <motion.div
        className={`transition-all duration-500 ${
          isScrolled
            ? "mx-auto max-w-3xl backdrop-blur-xl bg-[#7B0A0A]/90 rounded-full border border-white/30 shadow-2xl shadow-[#D62828]/20"
            : "backdrop-blur-md bg-white/10 border-b border-white/20"
        }`}
        style={{ padding: isScrolled ? "0.75rem 2rem" : "1rem 0" }}
      >
        <div className={`${isScrolled ? "" : "container mx-auto px-6"} flex items-center justify-between`}>
          {/* Logo */}
          <motion.a
            href="#accueil"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
            style={{ scale: logoScale }}
          >
            <img src={logo} alt="Wanted Logo" className="w-12 h-12 object-contain" />
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-all cursor-pointer relative group font-semibold ${
                  isScrolled
                    ? "text-white/90 hover:text-white"
                    : "text-white drop-shadow-[0_2px_4px_rgba(123,10,10,0.8)] hover:text-[#FF4C29]"
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D62828] to-[#FF4C29] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 backdrop-blur-md rounded-lg border transition-colors ${
              isScrolled
                ? "bg-white/10 border-white/20 text-white"
                : "bg-[#7B0A0A]/10 border-[#D62828]/20 text-[#7B0A0A]"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-xl bg-[#7B0A0A]/95 border border-white/20 rounded-3xl mx-4 mt-4 shadow-2xl"
        >
          <nav className="px-6 py-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/90 hover:text-white transition-colors py-2"
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
