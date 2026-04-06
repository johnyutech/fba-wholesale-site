import { useLocation } from "wouter";
import { ArrowLeft, BarChart2, Package, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const openings = [
  {
    icon: TrendingUp,
    title: "Wholesale Distribution Manager",
    type: "Full-Time · Remote",
    description:
      "Own the end-to-end performance of brand partner accounts across our retail buyer network. Responsibilities include buyer account management, catalog maintenance, pricing oversight, inventory planning, and weekly reporting. Ideal candidate has 2+ years of B2B wholesale or retail distribution experience.",
  },
  {
    icon: Package,
    title: "Inventory & Logistics Coordinator",
    type: "Full-Time · Remote",
    description:
      "Manage inbound shipments, coordinate with brand partners on purchase orders, and maintain healthy inventory levels across all SKUs. Experience with B2B fulfillment operations, inbound receiving workflows, and purchase order management required.",
  },
  {
    icon: BarChart2,
    title: "Brand Partnership Analyst",
    type: "Full-Time · Remote",
    description:
      "Research and evaluate new brand partnership opportunities. Analyze product margins, channel competition, and distribution potential. Support onboarding of new brand partners and maintain performance dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection Specialist",
    type: "Full-Time · Remote",
    description:
      "Monitor distribution channels for unauthorized sellers, MAP violations, and gray market activity. Work directly with brand partners to enforce distribution policies, document violations, and maintain channel integrity.",
  },
];

const perks = [
  "Fully remote work environment",
  "Competitive compensation",
  "Direct exposure to B2B wholesale distribution strategy",
  "Collaborative, fast-moving team",
  "Opportunity to grow with an expanding distribution network",
  "Work directly with recognized consumer brands",
];

export default function Careers() {
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

          {/* Header */}
          <div className="mb-14">
            <h1 className="text-4xl font-bold mb-4">Careers at Apex Trade Distribution</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're building a team with experience in wholesale distribution, brand management, and B2B operations. If you're interested in working directly with consumer brands and retail buyers, we'd like to hear from you.
            </p>
          </div>

          {/* Why work here */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">Why Apex Trade Distribution?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-3 rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
          </div>

          {/* Open roles */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
            <div className="space-y-5">
              {openings.map((role) => (
                <div key={role.title} className="rounded-xl border border-border p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <role.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-semibold">{role.title}</h3>
                        <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{role.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apply CTA */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="font-semibold mb-1">Interested in joining the team?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Send your resume and a brief note about the role you're interested in to{" "}
              <a href="mailto:sales@apexdistribution.co" className="text-primary underline">
                sales@apexdistribution.co
              </a>
            </p>
            <Button className="btn-primary" onClick={() => navigate("/contact")}>
              Get in Touch
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
