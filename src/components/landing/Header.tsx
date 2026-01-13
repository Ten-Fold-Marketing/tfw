import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/assets/tenfold-logo-new.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
          >
            <img src={logo} alt="Ten Fold Marketing" width={160} height={56} className="h-14 w-auto" />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 link-underline py-1"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="default" onClick={scrollToContact} className="group">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-border/50 bg-background/98 backdrop-blur-lg"
            >
              <nav className="flex flex-col gap-4 py-6">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-foreground/70 hover:text-foreground transition-colors py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      if (link.href === "#") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const targetId = link.href.replace("#", "");
                        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pb-6"
              >
                <Button variant="hero" size="lg" onClick={scrollToContact} className="w-full group">
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;