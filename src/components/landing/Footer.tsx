import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tenfoldLogo from "@/assets/tenfold-logo-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <img src={tenfoldLogo} alt="Ten Fold" width={92} height={32} className="h-8 w-auto" loading="lazy" decoding="async" />
          </motion.div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
            <motion.div whileHover={{ y: -2 }}>
              <Link 
                to="/privacy-policy-terms-conditions" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline py-1"
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link 
                to="/privacy-policy-terms-conditions" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline py-1"
              >
                Terms
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link 
                to="/privacy-policy-terms-conditions" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline py-1"
              >
                Refund Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link 
                to="/privacy-policy-terms-conditions" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline py-1"
              >
                Cancellation Policy
              </Link>
            </motion.div>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ten Fold Marketing
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;