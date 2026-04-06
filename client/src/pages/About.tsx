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
    body: "We track sell-through by SKU, size purchase orders to 60–90 day turns, and flag slow-moving inventory before it becomes a problem. The goal is a distribution operation that runs predictably.",
  },
  {
    icon: Users,
    title: "True Partnership",
    body: "Brand partners receive monthly reports, copies of all buyer POs, and a direct contact on our team. We communicate proactively when something changes — we don't wait for brands to ask.",
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
              Apex Trade Distribution is a B2B wholesale distributor. We purchase inventory directly from consumer brands and distribute it through our retail buyer network across online and brick-and-mortar channels.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">How We Operate</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We operate as an authorized wholesale distributor for the brands we carry. Our focus is on running a clean, accountable distribution operation — one with documented processes, clear reporting, and consistent follow-through.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We work with brands across health & wellness, food & beverage, home goods, beauty, and specialty consumer products. If a brand has a product that fits our network, we want to understand the numbers and figure out whether there's a deal that makes sense for both sides.
            </p>
          </div>

          {/* What we do */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We purchase inventory directly from brand partners at wholesale prices and distribute it through our retail buyer network. This includes managing buyer relationships, coordinating logistics and fulfillment, enforcing MAP policies, and providing brands with transparent performance reporting.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our team has direct experience across health & wellness, food & beverage, home goods, beauty, and specialty consumer products. We understand the unit economics of wholesale distribution and build partnerships around numbers that work for both sides.
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
                "Established retail buyer network across online and brick-and-mortar channels",
                "MAP policy enforcement and brand protection",
                "Monthly reports by the 5th — units, revenue, fill rate, inventory, MAP violations",
                "Proven experience across health, food, home, and specialty categories",
                "Purchase orders sized to 60–90 day turns, reorder triggered at 30-day supply",
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
            <p className="font-semibold mb-1">Interested in working together?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Send us a note and we'll follow up within 2 business days to discuss whether there's a fit.
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
