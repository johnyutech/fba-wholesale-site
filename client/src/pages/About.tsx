import { useLocation } from "wouter";
import { ArrowLeft, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    body: "We operate as a fully authorized distributor. Every product we sell is genuine, every listing is compliant, and every partnership is built on transparency and trust.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    body: "Our model is designed around one goal: helping brands scale. We invest in the infrastructure, expertise, and relationships needed to drive meaningful, sustainable growth on Amazon.",
  },
  {
    icon: Users,
    title: "True Partnership",
    body: "We don't treat brands as vendors — we treat them as partners. That means open communication, aligned incentives, and a shared commitment to long-term success.",
  },
];

export default function About() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 md:px-0">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition">
            <img src={ATD_LOGO} alt="Apex Trade Distribution" className="w-8 h-8" />
            <span className="font-semibold text-foreground">Apex Trade Distribution</span>
          </button>
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Hero */}
          <div className="mb-14">
            <h1 className="text-4xl font-bold mb-4">About Apex Trade Distribution</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Apex Trade Distribution is an authorized wholesale distributor specializing in Amazon FBA. We partner directly with consumer brands to expand their reach, protect their reputation, and accelerate their growth on the world's largest e-commerce platform.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Our mission is simple: make Amazon work for brands, not against them. Too many great products get lost in a crowded marketplace — undercut by unauthorized sellers, buried by poorly optimized listings, or held back by logistics complexity.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We exist to change that. By combining deep Amazon expertise with a rigorous, compliance-first approach, we help brands capture their fair share of the marketplace — and then grow beyond it.
            </p>
          </div>

          {/* What we do */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We purchase inventory directly from brand partners at wholesale prices and manage the full Amazon sales cycle on their behalf. This includes listing creation and optimization, FBA inventory management, pricing strategy, advertising, and ongoing performance monitoring.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our team brings hands-on experience across dozens of product categories including health & wellness, food & beverage, home goods, beauty, and specialty consumer products. We know what it takes to compete — and win — on Amazon.
            </p>
          </div>

          {/* Values */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border p-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why brands choose us */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Why Brands Choose Us</h2>
            <ul className="space-y-3">
              {[
                "Authorized distributor status — no gray market, no counterfeit risk",
                "Full-service Amazon management from listing to fulfillment",
                "MAP policy enforcement and brand protection",
                "Transparent reporting and open communication",
                "Proven experience across health, food, home, and specialty categories",
                "Compliance with Amazon's policies and brand registry requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="font-semibold mb-1">Ready to grow your brand on Amazon?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Let's talk about how Apex Trade Distribution can help you scale.
            </p>
            <Button className="btn-primary" onClick={() => navigate("/contact")}>
              Start Your Partnership
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
