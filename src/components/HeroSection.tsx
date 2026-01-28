import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
              Fashion Designer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6"
          >
            Komal
            <br />
            <span className="text-accent">Agarwal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mb-10"
          >
            Contemporary Womens Wear | Mens Wear | Sustainable Fashion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase hover:bg-foreground/5 transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase hover:bg-foreground/5 transition-colors"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-body text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
