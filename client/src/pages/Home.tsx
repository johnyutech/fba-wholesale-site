import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

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
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "Sony", logo: "https://logo.clearbit.com/sony.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { name: "Bose", logo: "https://logo.clearbit.com/bose.com" },
  { name: "Logitech", logo: "https://logo.clearbit.com/logitech.com" },
  { name: "Anker", logo: "https://logo.clearbit.com/anker.com" },
  { name: "SharkNinja", logo: "https://logo.clearbit.com/sharkninja.com" },
  { name: "Hamilton Beach", logo: "https://logo.clearbit.com/hamiltonbeach.com" },
  { name: "Crock-Pot", logo: "https://logo.clearbit.com/crockpot.com" },
  { name: "Oster", logo: "https://logo.clearbit.com/oster.com" },
  { name: "Stanley", logo: "https://logo.clearbit.com/stanley1913.com" },
  { name: "Owala", logo: "https://logo.clearbit.com/owalalife.com" },
  { name: "Keurig", logo: "https://logo.clearbit.com/keurig.com" },
  { name: "KitchenAid", logo: "https://logo.clearbit.com/kitchenaid.com" },
  { name: "Cuisinart", logo: "https://logo.clearbit.com/cuisinart.com" },
  { name: "Dyson", logo: "https://logo.clearbit.com/dyson.com" },
  { name: "Instant Pot", logo: "https://logo.clearbit.com/instantpot.com" },
  { name: "Pyrex", logo: "https://logo.clearbit.com/pyrex.com" },
  { name: "OXO", logo: "https://logo.clearbit.com/oxo.com" },
  { name: "Revlon", logo: "https://logo.clearbit.com/revlon.com" },
  { name: "Maybelline", logo: "https://logo.clearbit.com/maybelline.com" },
  { name: "L'Oréal", logo: "https://logo.clearbit.com/loreal.com" },
  { name: "Neutrogena", logo: "https://logo.clearbit.com/neutrogena.com" },
  { name: "Dove", logo: "https://logo.clearbit.com/dove.com" },
  { name: "Gillette", logo: "https://logo.clearbit.com/gillette.com" },
  { name: "Crest", logo: "https://logo.clearbit.com/crest.com" },
  { name: "Oral-B", logo: "https://logo.clearbit.com/oralb.com" },
  { name: "Aveeno", logo: "https://logo.clearbit.com/aveeno.com" },
  { name: "Olay", logo: "https://logo.clearbit.com/olay.com" },
  { name: "Tide", logo: "https://logo.clearbit.com/tide.com" },
  { name: "Bounty", logo: "https://logo.clearbit.com/bountytowels.com" },
  { name: "Lysol", logo: "https://logo.clearbit.com/lysol.com" },
  { name: "Clorox", logo: "https://logo.clearbit.com/clorox.com" },
  { name: "Advil", logo: "https://logo.clearbit.com/advil.com" },
  { name: "Tylenol", logo: "https://logo.clearbit.com/tylenol.com" },
  { name: "Zyrtec", logo: "https://logo.clearbit.com/zyrtec.com" },
  { name: "Nature Made", logo: "https://logo.clearbit.com/naturemade.com" },
  { name: "Optimum Nutrition", logo: "https://logo.clearbit.com/optimumnutrition.com" },
  { name: "Vitafusion", logo: "https://logo.clearbit.com/vitafusion.com" },
  { name: "LEGO", logo: "https://logo.clearbit.com/lego.com" },
  { name: "Hasbro", logo: "https://logo.clearbit.com/hasbro.com" },
  { name: "Mattel", logo: "https://logo.clearbit.com/mattel.com" },
  { name: "Nerf", logo: "https://logo.clearbit.com/nerf.com" },
  { name: "Barbie", logo: "https://logo.clearbit.com/barbie.com" },
];

export default function Home() {
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
          </div>
          <Button className="btn-primary text-sm">Get Started</Button>
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
                <Button className="btn-primary flex items-center gap-2">
                  Start Partnership <ArrowRight className="w-4 h-4" />
                </Button>
                <Button className="btn-secondary">Learn More</Button>
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
          className="absolute bottom-0 left-0 right-0 w-full h-32 text-card"
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
              We work with 50+ leading brands across electronics, home, beauty, and consumer goods categories.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {BRAND_LOGOS.map((brand, i) => (
              <div
                key={i}
                className="aspect-square bg-card rounded-lg p-4 flex items-center justify-center hover:bg-primary/5 transition-all duration-300 glow-on-hover cursor-pointer border border-border hover:border-primary/30 hover:shadow-md"
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.05}s both`
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain p-2 filter grayscale hover:grayscale-0 transition-all duration-300"
                  title={brand.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <span className="hidden items-center justify-center text-center text-xs font-semibold text-muted-foreground px-1 leading-tight">
                  {brand.name}
                </span>
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
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold">
                Start Your Partnership
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 font-semibold">
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
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
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
