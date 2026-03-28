import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Minimalist Futurism with Precision Engineering
 * - Charcoal (#0F1419) + White (#FFFFFF) + Electric Blue (#0066FF)
 * - Sora (display) + Inter (body) typography
 * - Asymmetric layouts, diagonal transitions, generous whitespace
 * - Smooth animations with cubic-bezier(0.4, 0, 0.2, 1) easing
 */

// Apex Trade Distribution Logo URL
const ATD_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const BRAND_LOGOS = [
  { name: "Bob's Red Mill", file: "BobsRedMillLogo.png" },
  { name: "Dr. Bronner's", file: "Dr_Bronner_idWZsJ5JNk_0.png" },
  { name: "Frontier Co-op", file: "FrontierCoOp.png" },
  { name: "JorVet", file: "JorVet.png" },
  { name: "Kinder's", file: "Kinder's_ido1nfhgF3_0.png" },
  { name: "Mrs. Meyer's", file: "Mrs.Meyers.png" },
  { name: "NutriSource", file: "Nutrisource.jpeg" },
  { name: "Garden of Life", file: "GardenOfLife.jpeg" },
  { name: "Rustic Bakery", file: "RusticBakery.png" },
  { name: "Shark Wheel", file: "SharkWheel.png" },
  { name: "Simple Mills", file: "SimpleMills.png" },
  { name: "Stella & Chewy's", file: "StellaChewys.png" },
  { name: "Swig Life", file: "SwigLife.png" },
  { name: "Vita Coco", file: "VitaCoco.png" },
];

export default function Home() {
  const [, navigate] = useLocation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={ATD_LOGO} alt="Apex Trade Distribution" className="w-8 h-8" />
            <span className="font-semibold text-lg">Apex Trade Distribution</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#partnerships" className="text-sm hover:text-primary transition">Partnerships</a>
            <a href="#brands" className="text-sm hover:text-primary transition">Brands</a>
            <a href="#contact" className="text-sm hover:text-primary transition">Contact</a>
            <a href="#" className="text-sm hover:text-primary transition" onClick={(e) => { e.preventDefault(); navigate("/how-it-works"); }}>How It Works</a>
            <a href="#" className="text-sm hover:text-primary transition" onClick={(e) => { e.preventDefault(); navigate("/blog"); }}>Blog</a>
          </div>
          <Button className="btn-primary text-sm" onClick={() => navigate("/contact")}>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-0 px-4 md:px-0 relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center pb-20">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">Trusted by 50+ Suppliers</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Scale Your Brand with <span className="text-primary">Apex Trade</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Apex Trade Distribution partners with leading brands to expand their Amazon FBA presence. Our network of authorized distributors ensures compliance, quality, and exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="btn-primary flex items-center gap-2" onClick={() => navigate("/contact")}>
                  Start Partnership <ArrowRight className="w-4 h-4" />
                </Button>
                <Button className="btn-secondary" onClick={() => navigate("/faq")}>Learn More</Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full hidden md:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/hero-abstract-tech-gngRYcs2DbiExKKXW4E2dN.webp"
                alt="Hero visualization"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                style={{
                  transform: `translateY(${scrollY * 0.3}px)`,
                  transition: "transform 0.1s ease-out"
                }}
              />
            </div>
          </div>
        </div>

        {/* Diagonal divider */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-32 text-card pointer-events-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ marginBottom: "-1px" }}
        >
          <path
            d="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* Partnership Section */}
      <section id="partnerships" className="py-24 px-4 md:px-0 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Partner</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven model helps brands achieve exponential growth on Amazon FBA through strategic wholesale partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Direct Relationships",
                description: "We build direct connections between brands and authorized distributors, eliminating intermediaries and ensuring quality control."
              },
              {
                icon: TrendingUp,
                title: "Rapid Scaling",
                description: "Our network enables brands to scale inventory quickly across multiple channels while maintaining compliance and authenticity."
              },
              {
                icon: Zap,
                title: "Market Intelligence",
                description: "Real-time insights into market trends, pricing, and demand help optimize your wholesale strategy for maximum ROI."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-xl border border-border hover:border-primary/50 transition-all duration-300 glow-on-hover hover:shadow-lg"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Gallery Section */}
      <section id="brands" className="py-24 px-4 md:px-0 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Brand Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with leading brands across food & beverage, health, home goods, and specialty categories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {BRAND_LOGOS.map((brand, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-border p-5 flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.05}s both`
                }}
                title={brand.name}
              >
                <img
                  src={`/brandlogos/${brand.file}`}
                  alt={brand.name}
                  className="w-full h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 md:px-0 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/hero-geometric-network-GzAqjWzeVkvnbZfnvRKsjZ.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Brand?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join hundreds of brands that have accelerated their growth through our wholesale partnership network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold" onClick={() => navigate("/contact")}>
                Start Your Partnership
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 font-semibold" onClick={() => navigate("/contact")}>
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16 px-4 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={ATD_LOGO} alt="Apex Trade Distribution" className="w-8 h-8" />
                <span className="font-semibold">Apex Trade Distribution</span>
              </div>
              <p className="text-white/60 text-sm">Scaling brands through strategic wholesale partnerships on Amazon FBA.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>About</a></li>
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/how-it-works"); }}>How It Works</a></li>
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/blog"); }}>Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/documentation"); }}>Documentation</a></li>
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/support"); }}>Support</a></li>
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/faq"); }}>FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/privacy"); }}>Privacy</a></li>
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/terms"); }}>Terms</a></li>
                <li><a href="#" className="hover:text-white transition" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Apex Trade Distribution. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
