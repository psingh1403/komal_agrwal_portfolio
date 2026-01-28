import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

// casual-wear image imports
import casualwear1 from "@/assets/casual-wear/casualwear-1.jpeg";
import casualwear2 from "@/assets/casual-wear/casualwear-2.png";
import casualwear3 from "@/assets/casual-wear/casualwear-3.jpeg";
import casualwear4 from "@/assets/casual-wear/casualwear-4.jpeg";
import casualwear5 from "@/assets/casual-wear/casualwear-5.jpeg";
import casualwear6 from "@/assets/casual-wear/casualwear-6.png";

// ethnic-wear image imports
import ethnicwear1 from "@/assets/ethnic-wear/ethnicwear-1.jpeg";
import ethnicwear2 from "@/assets/ethnic-wear/ethnicwear-2.jpeg";
import ethnicwear3 from "@/assets/ethnic-wear/ethnicwear-3.jpg";
import ethnicwear4 from "@/assets/ethnic-wear/ethnicwear-4.jpeg";
import ethnicwear5 from "@/assets/ethnic-wear/ethnicwear-5.jpeg";
import ethnicwear6 from "@/assets/ethnic-wear/ethnicwear-6.jpeg";
import ethnicwear7 from "@/assets/ethnic-wear/ethnicwear-7.jpeg";
import ethnicwear8 from "@/assets/ethnic-wear/ethnicwear-8.jpg";
import ethnicwear9 from "@/assets/man-ethnic-wear/ethnicwear-9.png";

// sport-wear image imports
import sportswear1 from "@/assets/sports-wear/sportswear-1.png";
import sportswear2 from "@/assets/sports-wear/sportswear-2.jpeg";

// evening-wear image imports
import eveningwear1 from "@/assets/evening-wear/eveningwear-1.jpeg";



const collections = [
  // casualwear
  {
    id: 1,
    title: "Casual Charm",
    category: "Casual Wear",
    year: "2024",
    image: casualwear1,
  },
  {
    id: 2,
    title: "Everyday Elegance",
    category: "Casual Wear",
    year: "2024",
    image: casualwear2,
  },
  {
    id: 3,
    title: "Urban Flow",
    category: "Casual Wear",
    year: "2024",
    image: casualwear3,
  },
  {
    id: 4,
    title: "Chic Ease",
    category: "Casual Wear",
    year: "2024",
    image: casualwear4,
  },

  // ethnicwear
  {
    id: 5,
    title: "Timeless Traditions",
    category: "Ethnic Wear",
    year: "2024",
    image: ethnicwear1,
  },
  {
    id: 6,
    title: "Ethereal Ethnic",
    category: "Ethnic Wear",
    year: "2024",
    image: ethnicwear2,
  },
  {
    id: 7,
    title: "Royal Roots",
    category: "Ethnic Wear",
    year: "2024",
    image: ethnicwear3,
  },
  {
    id: 8,
    title: "Classic Counture",
    category: "Ethnic Wear",
    year: "2024",
    image: ethnicwear4,
  },
  {
    id: 9,
    title: "Mordern Mehfil",
    category: "Ethnic Wear",
    year: "2024",
    image: ethnicwear5,
  },

  // casualwear
  {
    id: 10,
    title: "Effortless Grace",
    category: "Casual Wear",
    year: "2024",
    image: casualwear5,
  },
  {
    id: 11,
    title: "Fesion Finesse",
    category: "Casual Wear",
    year: "2024",
    image: casualwear6,
  },

  // sportwear
  {
    id: 12,
    title: "Sporty Sophistication",
    category: "Sports Wear",
    year: "2024",
    image: sportswear1,
  },
  {
    id: 13,
    title: "Athletic Elegance",
    category: "Sports Wear",
    year: "2024",
    image: sportswear2,
  },

  // eveningwear
  {
    id: 14,
    title: "Glamour Gala",
    category: "Evening Wear",
    year: "2024",
    image: eveningwear1,
  },

  {
    id: 15,
    title: "Mordern Mehfil 1",
    category: "Ethnic Wear",
    year: "2024",
    image: ethnicwear6,
  },
  {
    id: 16,
    title: "Mordern Mehfil 2",
    category: "Ethnic Wear",
    year: "2024",
    image: ethnicwear7,
  },
  {
    id: 17,
    title: "Mordern Mehfil 3",
    category: "Ethnic Wear",
    year: "2024",
    image: ethnicwear8,
  },

  {
    id: 18,
    title: "Mordern Mehfil",
    category: "Men's Ethnic Wear",
    year: "2024",
    image: ethnicwear9,
  },
];

const categories = [
  "All",
  "Casual Wear",
  "Evening Wear",
  "Ethnic Wear",
  "Sports Wear",
  "Street Wear",
  "Party Wear",
  "Formal Wear",
  "Men's Ethnic Wear",
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredCollections =
    activeCategory === "All"
      ? collections
      : collections.filter((c) => c.category === activeCategory);

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
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* <div
                  className={`absolute inset-0 bg-background/80 flex items-center justify-center transition-opacity duration-500 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center p-6">
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-accent">
                      View Collection <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div> */}
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
      </div>
    </section>
  );
};

export default PortfolioSection;
