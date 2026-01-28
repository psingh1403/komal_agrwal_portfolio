import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";

const education = [
  {
    degree: "Master’s in Fashion & Textile Merchandising.",
    institution: "Amity University",
    persentage: "75%",
    year: "2022 - 2024",
  },
  {
    degree: "Master of Business Administration (Distance Learning).",
    institution: "Amity University",
    persentage: "90%",
    year: "2022 - 2024",
  },
  {
    degree: "Bachelor of Commerce.",
    institution: "Shri Shikshayatan College",
    persentage: "90%",
    year: "2019 - 2022",
  },
  {
    degree: "Advanced Diploma in Fashion Designing.",
    institution: "Inter National Institute of Fashion Design (INIFD Kolkata)",
    persentage: "A+ Grade",
    year: "2020 - 2022",
  },
];

const experience = [
  {
    role: "Fashion consultant",
    company: "Ed-a-Mamma (Reliance Retail)",
    duration: "OCT 2024 - OCT 2025",
    responsibilities: [
      "Provide personalized styling and wardrobe recommendations",
      "Style clients for photoshoots, campaigns, or public appearances",
      "Offer image consulting for personal branding and professional appearance",
      "Understand client needs, preferences, body type, and budget",
    ],
  },
  {
    role: "Fashion Intern in Design And Production Team",
    company: "Seona Couture",
    duration: "JAN 2023 - JULY 2023",
    responsibilities: [
      "Strong work ethic and commitment to meeting deadlines",
      "Problem solving abilities",
      "Effective communication and teamwork skills.",
      "Multitasking management of overall assigned tasks.",
    ],
  },
];

const skills = {
  designIllustration: [
    "Sketching",
    "Draping",
    "Pattern Making",
    "Tailoring",
    "Color Theory",
    "Create fashion sketches and flat drawings",
    "Add colors, textures, prints, and patterns to designs",
    "Experiment with different colorways without redrawing",
    "Design prints, embroidery motifs, and surface patterns",
  ],
  TechnicalSoftwareSkills: [
    "Adobe Illustrator (Technical Flats, Line Sheets)",
    "Adobe Photoshop (Mood Boards, Lookbooks)",
    "CLO 3D / Browzwear (3D Garment Visualization)",
    "CAD for Fashion Design",
    "Corel Draw (Vector Illustrations)",
    "Procreate (Digital Sketching)",
    "Microsoft Excel (Costing & Production Sheets)",
  ],
  fabricTextureWork: [
    "Apply fabric textures (silk, denim, chiffon, leather) to outfits",
    "Create realistic draping effects",
    "Edit and enhance fabric swatches",
  ],
  garmentDevelopment: [
    "Make technical flats for tops, dresses, lehengas, sarees, suits, etc.",
    "Prepare spec sheets with measurements and details",
    "Show stitch lines, pleats, buttons, zips, and embroidery placements",
  ],
  imageEditingStyling: [
    "Edit photoshoots (brightness, skin tone, background)",
    "Change outfit colors digitally",
    "Remove or replace backgrounds for clean portfolio images",
    "Create lookbooks and campaign visuals",
  ],
  portfolioPresentation: [
    "Design a professional fashion portfolio",
    "Create mood boards and concept boards",
    "Present collections in a clean, high-end format",
    "Prepare files for clients, internships, or fashion houses",
  ],
  marketingBranding: [
    "Design Instagram posts, reels covers, posters",
    "Create brand logos, labels, and tags",
    "Make banners for fashion shows or exhibitions",
  ],
  expertise: [
    "Trend Forecasting",
    "Textile Knowledge",
    "Styling",
    "Sustainable Fashion",
  ],
  softProfessionalSkills: [
    "Creative Problem-Solving",
    "Attention to Detail",
    "Time & Project Management",
    "Team Collaboration",
    "Client Communication",
    "Brand Identity Development",
  ],
};

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
            Resume
          </span>
          <h2 className="font-display text-5xl md:text-7xl mb-6">
            Experience & <span className="italic text-accent">Skills</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors mt-6"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap size={24} className="text-accent" />
              <h3 className="font-display text-3xl">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-border pl-6 hover:border-accent transition-colors"
                >
                  <span className="font-body text-sm text-accent">
                    {item.year}
                  </span>
                  <h4 className="font-display text-xl mt-1">{item.degree}</h4>
                  <h4 className="font-display text-xl mt-1">
                    {item.persentage}
                  </h4>
                  <p className="font-body text-muted-foreground mt-1">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Briefcase size={24} className="text-accent" />
              <h3 className="font-display text-3xl">Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-border pl-6 hover:border-accent transition-colors"
                >
                  <span className="font-body text-sm text-accent">
                    {item.duration}
                  </span>
                  <h4 className="font-display text-xl mt-1">{item.role}</h4>
                  <p className="font-body text-muted-foreground mt-1">
                    {item.company}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {item.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="font-body text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-accent mt-1.5">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <Award size={24} className="text-accent" />
            <h3 className="font-display text-3xl">Skills & Expertise</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">
                Design & Illustration
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.designIllustration.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">
                Technical & Software Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.TechnicalSoftwareSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">
                Fabric & Texture Work
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.fabricTextureWork.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">Garment Development</h4>
              <div className="flex flex-wrap gap-2">
                {skills.garmentDevelopment.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">
                Image Editing & Styling
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.imageEditingStyling.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">
                Portfolio & Presentation
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.portfolioPresentation.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">
                Marketing & Branding
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.marketingBranding.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 border border-border hover:border-accent transition-colors">
              <h4 className="font-display text-xl mb-4">
                Soft & Professional Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.softProfessionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm px-4 py-2 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
