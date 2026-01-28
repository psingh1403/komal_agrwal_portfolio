import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import designerPortrait from "@/assets/myProfile-1.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={designerPortrait}
                alt="Komal Agarwal - Fashion Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-accent/30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-5xl md:text-6xl mb-8">
              The Art of
              <br />
              <span className="italic text-accent">Fashion</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                With over 1.5 years of experience in the fashion industry, I specialize in 
                contemporary womenswear with a focus on sustainable and ethical fashion. 
                My designs blend traditional craftsmanship with modern aesthetics.
              </p>
              <p>
                My design philosophy centers on creating timeless pieces that celebrate 
                the modern woman while respecting our environment. Each garment tells a 
                story of meticulous attention to detail and conscious creation.
              </p>
            </div>

            <div className="line-elegant my-10" />

            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block font-display text-4xl text-accent mb-2">1+</span>
                <span className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block font-display text-4xl text-accent mb-2">50+</span>
                <span className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                  Collections Designed
                </span>
              </div>
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-accent/50">
              <p className="font-display text-xl italic text-foreground">
                "Fashion is not just about clothes; it's about expressing your soul 
                through the art of design."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
