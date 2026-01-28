import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Replace these with your actual EmailJS credentials
      const SERVICE_ID = "service_hskoh4s";
      const TEMPLATE_ID = "template_h5q2i8f";
      const PUBLIC_KEY = "Z1mVT8MND5WM-I12f";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "agarwalkomal1204@gmail.com",
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-5xl md:text-7xl mb-6">
            Let's <span className="italic text-accent">Connect</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hello, I'd
            love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-accent/30">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">Email</h3>
                  <a
                    href="mailto:hello@pushpendra.design"
                    className="font-body text-muted-foreground hover:text-accent transition-colors"
                  >
                    agarwalkomal1204@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-accent/30">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="font-body text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 - 7970864222
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-accent/30">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl mb-1">Location</h3>
                  <p className="font-body text-muted-foreground">
                    Noida, India
                  </p>
                </div>
              </div>
            </div>

            <div className="line-elegant my-12" />

            {/* Social Links */}
            <div>
              <h3 className="font-display text-xl mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/komal-agarwal-aaa070227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                {/* <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0a12 12 0 0 0-4.373 23.178c-.07-.633-.133-1.605.027-2.297.145-.625.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.664 2.663-.188.798.4 1.449 1.188 1.449 1.427 0 2.523-1.504 2.523-3.675 0-1.922-1.38-3.267-3.353-3.267-2.284 0-3.625 1.713-3.625 3.484 0 .69.265 1.43.595 1.832a.24.24 0 0 1 .056.23c-.06.25-.195.798-.222.909-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.81 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12 12 0 1 0 12 0z" />
                  </svg>
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </a> */}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-sm tracking-wider uppercase text-muted-foreground mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-4 bg-background border border-border focus:border-accent focus:outline-none transition-colors font-body"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm tracking-wider uppercase text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-4 bg-background border border-border focus:border-accent focus:outline-none transition-colors font-body"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm tracking-wider uppercase text-muted-foreground mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="w-full px-4 py-4 bg-background border border-border focus:border-accent focus:outline-none transition-colors font-body"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="font-body text-sm tracking-wider uppercase text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-background border border-border focus:border-accent focus:outline-none transition-colors font-body resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
