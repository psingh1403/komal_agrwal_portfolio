import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogTitle } from "@/components/ui/dialog";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Import all images dynamically using Vite's glob import
const imageModules = import.meta.glob<string>("../assets/**/*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
  eager: true,
  import: "default",
});

const categoryMapping: Record<string, string> = {
  "luxury": "Luxury Fashion",
  "rose reverie": "Rose`Reverie",
  "design to reality": "Design to Reality",
  "boss lady": "Boss-Lady Fashion",
  "Sylva": "Sylva",
  "kids": "Kid's wear",
};

const collectionTitles: Record<string, string[]> = {
  "Luxury Fashion": [
    "Opulent Velvet Gown", "Golden Silhouette", "Satin Drape", "Royal Threadwork", 
    "Shimmering Serenade", "Crystal Embellished Look", "Ethereal Silk", "Gilded Glamour", 
    "Ivory Majesty", "Midnight Luxury", "Velvet Reverie", "Elegance Persona", 
    "Celestial Gold", "Majestic Satin", "Prestige Weave", "Sovereign Drape",
    "Gilded Thread", "Plaza Elegance", "Luxe Crimson", "Chiffon Whispers",
    "Ornate Elegance", "Palatial Gown", "Noble Silk", "Imperial Look",
    "Regal Silhouette", "Aurora Satin", "Grandeur Blazer"
  ],
  "Rose`Reverie": [
    "Blushing Petals", "Crimson Blossom", "Scarlet Veil", "Rosebud Delight", 
    "Floral Symphony", "Rosy Twilight", "Petal Soft Gown", "Garden Romance", 
    "Botanical Whisper", "Spring Meadow", "Rose Infused Silk", "Wildrose Dream", 
    "Coral Bloom", "Meadow Muse", "Blossom Breeze", "Enchanted Rose"
  ],
  "Design to Reality": [
    "Sketch to Stitch", "Concept Silhouette", "Drafted Elegance", "Pattern Play", 
    "Canvas Dress", "Monochrome Concept", "Geometric Drape", "Architectural Fit", 
    "Paper to Fabric", "Experimental Form"
  ],
  "Boss-Lady Fashion": [
    "Power Blazer", "Pinstripe Authority", "Structured Command", "Executive Silk", 
    "Corporate Tailored Suit", "Monochrome Maven", "Modern Trench"
  ],
  "Sylva": [
    "Forest Whispers", "Earth Drape", "Emerald Canopy", "Leafy Harmony", "Mossy Path"
  ],
  "Kid's wear": [
    "Little Sunshine", "Playful Pastels", "Tiny Trendsetter", "Whimsical Denim", 
    "Joyful Overalls", "Mini Chic", "Cheerful Cotton"
  ]
};

// Group by folder/category first, then generate collection
const groupedImages: Record<string, string[]> = {};
Object.entries(imageModules).forEach(([path, resolvedPath]) => {
  const parts = path.split('/');
  const folder = parts[parts.length - 2];
  if (folder in categoryMapping) {
    const category = categoryMapping[folder];
    if (!groupedImages[category]) {
      groupedImages[category] = [];
    }
    groupedImages[category].push(resolvedPath);
  }
});

const collections: { id: number; title: string; category: string; year: string; image: string }[] = [];
let globalId = 1;

Object.entries(groupedImages).forEach(([category, images]) => {
  images.forEach((img, idx) => {
    const categoryTitles = collectionTitles[category] || [];
    const title = categoryTitles[idx] || `${category} Look ${String(idx + 1).padStart(2, '0')}`;
    
    collections.push({
      id: globalId++,
      title,
      category,
      year: "2026",
      image: img
    });
  });
});

const categories = [
  "Luxury Fashion",
  "Rose`Reverie",
  "Design to Reality",
  "Boss-Lady Fashion",
  "Sylva",
  "Kid's wear",
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Luxury");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  const filteredCollections = collections.filter(
    (c) => c.category === activeCategory
  );

  const selectedIndex = selectedItemId !== null
    ? filteredCollections.findIndex(item => item.id === selectedItemId)
    : 0;

  useEffect(() => {
    if (!api) return;

    // Embla size/reInit must run after the dialog's CSS transition finishes
    const timer = setTimeout(() => {
      api.reInit();
      if (selectedItemId !== null) {
        const index = filteredCollections.findIndex(item => item.id === selectedItemId);
        if (index !== -1) {
          api.scrollTo(index, true);
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [api, selectedItemId, filteredCollections]);

  return (
    <section id="portfolio" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-5xl md:text-7xl mb-6">
            My <span className="italic text-accent">Collections</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore my carefully curated collections, each piece crafted with
            passion and precision to create wearable art.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-body text-sm tracking-widest uppercase px-6 py-3 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border hover:border-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setSelectedItemId(item.id)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 border border-accent/20 p-2 bg-background/50 transition-all duration-500 group-hover:border-accent">
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.category}
                  </p>
                </div>
                <span className="font-body text-sm text-accent">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Image Slider Modal */}
        <Dialog open={selectedItemId !== null} onOpenChange={(open) => { if (!open) setSelectedItemId(null); }}>
          <DialogPrimitive.Portal>
            {/* Custom Overlay with high-end glassmorphism */}
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl transition-all duration-300" />
            
            {/* Custom Content container: non-grid, full viewport flex center */}
            <DialogPrimitive.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 outline-none">
              
              <div className="relative w-full max-w-5xl bg-neutral-950/90 border border-neutral-800 p-6 md:p-10 shadow-2xl flex flex-col items-center justify-center max-h-[90vh] overflow-y-auto">
                
                {/* Screen reader title */}
                <DialogTitle className="sr-only">Large View Collection</DialogTitle>
                
                {/* Custom Close Button */}
                <DialogPrimitive.Close className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors cursor-pointer z-50">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>

                {selectedItemId !== null && (
                  <Carousel setApi={setApi} opts={{ startIndex: selectedIndex }} className="w-full relative px-4 md:px-10">
                    <CarouselContent className="flex">
                      {filteredCollections.map((item) => (
                        <CarouselItem key={item.id} className="min-w-0 shrink-0 grow-0 basis-full flex flex-col items-center justify-center gap-6">
                          {/* Image Box */}
                          <div className="relative w-full max-w-sm aspect-[3/4] border border-accent/20 p-2 bg-neutral-900/40 flex-shrink-0 flex items-center justify-center">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          
                          {/* Text Info (Aligned at the bottom of the image) */}
                          <div className="flex flex-col items-center text-center max-w-lg w-full px-4">
                            <h3 className="font-display text-3xl text-white font-light mb-1">
                              {item.title}
                            </h3>
                            <span className="font-body text-sm text-neutral-400 mb-3">
                              Collection Year: {item.year}
                            </span>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    
                    {/* Position navigation controls inside the dialog card, but at absolute side margins */}
                    <CarouselPrevious className="absolute left-2 md:left-[-40px] top-1/2 -translate-y-1/2 h-10 w-10 bg-neutral-900/90 border border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground rounded-none transition-colors z-40" />
                    <CarouselNext className="absolute right-2 md:right-[-40px] top-1/2 -translate-y-1/2 h-10 w-10 bg-neutral-900/90 border border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground rounded-none transition-colors z-40" />
                  </Carousel>
                )}
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
