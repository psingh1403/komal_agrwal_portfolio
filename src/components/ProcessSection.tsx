import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Palette, Scissors, Sparkles } from "lucide-react";
import moodboardImage from "@/assets/process-moodboard.jpg";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Research & Inspiration",
    description: "Drawing inspiration from art, nature, and cultural movements to create a unique design vision.",
  },
  {
    icon: Palette,
    title: "Mood Board & Concepts",
    description: "Curating colors, textures, and silhouettes that tell the story of the collection.",
  },
  {
    icon: Scissors,
    title: "Pattern & Sampling",
    description: "Translating sketches into patterns and creating samples to perfect every detail.",
  },
  {
    icon: Sparkles,
    title: "Final Creation",
    description: "Bringing the vision to life with premium fabrics and meticulous craftsmanship.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
              Design Process
            </span>
            <h2 className="font-display text-5xl md:text-6xl mb-8">
              From Vision
              <br />
              <span className="italic text-accent">to Reality</span>
            </h2>

            <p className="font-body text-muted-foreground mb-12 leading-relaxed">
              Every collection begins with a spark of inspiration. My design process 
              is a journey of exploration, experimentation, and refinement—transforming 
              abstract ideas into wearable works of art.
            </p>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-accent/30">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={moodboardImage}
                alt="Design Process Mood Board"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-accent/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
