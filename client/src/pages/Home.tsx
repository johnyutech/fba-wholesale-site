import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp, ShieldCheck, BadgeCheck, AlertTriangle, BookOpen } from "lucide-react";
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
                <span className="text-sm font-medium text-primary">Trusted by 50+ Brand Partners</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Built for Brands. <span className="text-primary">Built for Scale.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Apex Trade Distribution is a B2B wholesale distributor that partners with consumer brands to connect their products with retail buyers. We handle purchasing, logistics, and channel management so brands can focus on what they do best.
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
              Our distribution model gives brands reliable wholesale demand, broad retail reach, and a partner that handles the complexity of B2B channel management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Retail Buyer Network",
                description: "We connect brands directly to our established network of retail buyers — from independent retailers to regional chains — creating consistent, scalable demand."
              },
              {
                icon: TrendingUp,
                title: "Multi-Channel Distribution",
                description: "Our distribution reach spans online and brick-and-mortar retail channels, giving brands broad market coverage without managing each account themselves."
              },
              {
                icon: Zap,
                title: "Market Intelligence",
                description: "Real-time insights into buyer demand, channel performance, and pricing trends help brands make better decisions about inventory and growth."
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

      {/* Onboarding Process Section */}
      <section className="py-24 px-4 md:px-0 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Onboarding Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A straightforward process designed to get your brand into active distribution quickly, without unnecessary complexity.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-border z-0" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Initial Review",
                  description: "We evaluate your brand, product categories, margins, and supply capacity to confirm we're a strong mutual fit.",
                },
                {
                  step: "02",
                  title: "Partnership Agreement",
                  description: "We establish wholesale pricing, MAP policy, payment terms, and reporting cadence in a clear, straightforward agreement.",
                },
                {
                  step: "03",
                  title: "Inventory Onboarding",
                  description: "We submit our first purchase order and coordinate inbound inventory, handling all logistics and compliance requirements.",
                },
                {
                  step: "04",
                  title: "Active Distribution",
                  description: "Your products enter our buyer network. We manage orders, fulfillment, and channel reporting on an ongoing basis.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-5 shrink-0 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Most brands are in active distribution within <span className="font-semibold text-foreground">5–10 business days</span> of signing.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Protection Section */}
      <section className="py-24 px-4 md:px-0 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: Header + intro */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-primary/20 mb-6">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Brand Protection</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Your Brand Integrity Is Non-Negotiable</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every brand we carry is represented with the same standards we'd apply to our own. That means consistent pricing, clean distribution, and zero tolerance for practices that put your brand at risk.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We take an active role in protecting the brands we partner with — not just complying with policies, but enforcing them.
              </p>
            </div>

            {/* Right: Protection pillars */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  icon: BadgeCheck,
                  title: "MAP Compliance",
                  description: "We honor your Minimum Advertised Price policy across every channel we sell through, and flow those terms to every buyer we work with.",
                },
                {
                  icon: ShieldCheck,
                  title: "Channel Compliance",
                  description: "We only distribute through channels explicitly authorized under our partnership agreement — no gray market, no unauthorized resellers.",
                },
                {
                  icon: BookOpen,
                  title: "Listing Quality Standards",
                  description: "Your products are represented with accurate specs, approved imagery, and brand-consistent copy. We never alter, repackage, or misrepresent what we carry.",
                },
                {
                  icon: AlertTriangle,
                  title: "Unauthorized Seller Monitoring",
                  description: "We actively monitor for unauthorized sellers and MAP violations in your distribution channel and report them to you as part of standard operations.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

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
            <h2 className="text-4xl font-bold mb-4">Ready to Expand Your Distribution?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join the brands that rely on Apex Trade to move product, reach new buyers, and grow their wholesale business.
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
              <p className="text-white/60 text-sm">Connecting brands with retail buyers through strategic B2B wholesale distribution.</p>
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
