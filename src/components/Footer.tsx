import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="font-display text-2xl tracking-wider">
            KOMAL AGARWAL
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <a href="#home" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#portfolio" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-accent transition-colors">
              Portfolio
            </a>
            <a href="#about" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="line-elegant my-8" />

        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Komal Agarwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
