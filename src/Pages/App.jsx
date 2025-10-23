
import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/app.css";
import {
  Calculator,
  FileText,
  Code,
  ClipboardCheck,
  Cloud,
  Settings,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting",
    description: "Comprehensive accounting services to keep your finances organized and compliant.",
  },
  {
    icon: FileText,
    title: "Tax Services",
    description: "Expert tax planning and preparation to optimize your tax obligations.",
  },
  {
    icon: Code,
    title: "Software Solutions",
    description: "Custom software development tailored to your business needs.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Services",
    description: "Thorough audit services ensuring accuracy and compliance.",
  },
  {
    icon: Cloud,
    title: "Cloud Server Provisioning",
    description: "Secure and scalable cloud infrastructure for your business.",
  },
  {
    icon: Settings,
    title: "ERP Systems",
    description: "Enterprise resource planning solutions to streamline operations.",
  },
];

const features = [
  "20+ Years of Combined Experience",
  "Certified Professionals",
  "24/7 Support Available",
  "Tailored Solutions",
];

import SplitText from "../components/SplitText";
import DecryptedText from '../components/DecryptedText';
import ContactForm from "../components/ContactForm";
import Particles from "../components/Particles";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const App = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen ">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', zIndex: -1}}>
      <Particles
        particleColors={['#ffffff', '#2563eb']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
</div>
       {/*Navigation */}
        <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
            <div className="container mx-auto px-4 lg:px-12">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl lg:text-2xl font-bold text-primary">
                    <SplitText
                      text="The B's Consulting"
                      className="text-xl lg:text-2xl font-bold text-primary"
                      delay={100}
                      duration={0.4}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      onLetterAnimationComplete={handleAnimationComplete}
                    />
                  </h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                  <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                    Home
                  </a>
                  <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                    Services
                  </a>
                  <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                    Contact
                  </a>
                  <button className="bg-primary text-secondary px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    <a href="#contact">Get Started</a>
                  </button>
              </div>

                {/* Mobile Menu Button */}
                <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button> 
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden py-4 border-t border-border">
                <div className="flex flex-col gap-4">
                    <a
                    href="#home"
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    >
                    Home
                    </a>
                    <a
                    href="#services"
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    >
                    Services
                    </a>
                    <a
                    href="#contact"
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    >
                    Contact
                    </a>
                    <button className="w-full bg-primary text-secondary px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                        Get Started
                    </a>
                    </button>
                </div>
                </div>
            )} 
            </div>
        </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary"> 
                  Professional Business Solutions
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Your Business
                <span className="text-primary"> Success</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                <DecryptedText
                  text="Partner with The B's Consulting for comprehensive business solutions. From accounting and tax services to cutting-edge software and cloud infrastructure, we help businesses thrive in today's digital landscape."
                  animateOn="view"
                  revealDirection="center"
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4">
                  <a href="#contact">
                    Start Your Journey 
                  </a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button size="lg" variant="outline">
                  <a href="#services">Explore Services</a>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="Business professionals working"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-4 lg:px-12 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a full suite of professional services designed to help your business grow and succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6 h-full hover:shadow-lg transition-shadow duration-300 group">
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <button size="lg" variant="outline" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4">
              <a href="#contact">
                Discuss Your Project
              </a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 lg:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">Why Choose Us</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Your Trusted Partner for Business Growth
              </h2>
              <p className="text-muted-foreground mb-8">
                At The B's Consulting, we combine expertise, innovation, and dedication to deliver 
                exceptional results for our clients. Our team of seasoned professionals is committed 
                to understanding your unique challenges and providing tailored solutions.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team with industry certifications",
                  "Customized solutions for your business",
                  "Proven track record of success",
                  "Competitive pricing and transparent billing",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <button size="lg" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 mt-8">
                <a href="#contact">Schedule a Consultation</a>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
       {/* Contact Section */}
      <section id="contact" className="py-20 px-4 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Contact Us</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Get in touch with us today and discover how we can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 lg:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">The B's Consulting</h3>
              <p className="text-sm text-muted-foreground">
                Professional business solutions tailored to your success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Accounting</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Tax Services</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Software Solutions</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Audit Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#home" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:info@bsconsulting.com.ng" className="hover:text-primary transition-colors">
                    info@bsconsulting.com.ng
                  </a>
                </li>
                <li>
                  <a href="tel:+2348082633542" className="hover:text-primary transition-colors">
                    +234 808 263 3542
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The B's Consulting. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App