import { useLocation } from "wouter";
import { ArrowLeft, MessageSquare, FileText, Truck, BarChart2, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Conversation",
    description:
      "It starts with a straightforward conversation. You reach out, we learn about your brand — product categories, current sales channels, volume, and goals. We'll be upfront about whether we think we're a good fit, and we expect the same from you. No pressure, no drawn-out sales process.",
    details: [
      "Brand and product category review",
      "Current distribution channel assessment",
      "Volume and margin evaluation",
      "Alignment on goals and expectations",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Partnership Agreement",
    description:
      "If both sides want to move forward, we put together a straightforward wholesale agreement that covers pricing, purchase order terms, MAP policy, and reporting cadence. We keep the contract clean — no hidden clauses, no lock-in terms that don't make sense for both parties.",
    details: [
      "Wholesale pricing and payment terms",
      "MAP policy documentation",
      "Reporting and communication schedule",
      "Exclusivity terms (if applicable)",
    ],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Catalog & Product Setup",
    description:
      "Before inventory moves, we get your product catalog in order. That means reviewing specs, imagery, and product data across our distribution channels, confirming MAP policy terms, and ensuring we have everything needed to represent your brand accurately to buyers.",
    details: [
      "Product catalog and SKU review",
      "Imagery and spec sheet collection",
      "MAP policy documentation and confirmation",
      "Buyer-facing sell sheet preparation",
    ],
  },
  {
    number: "04",
    icon: Truck,
    title: "Inventory & Fulfillment Onboarding",
    description:
      "Once setup is complete, we submit our first purchase order and coordinate inbound inventory to our fulfillment operation. We handle packaging compliance and carrier coordination so product arrives ready to ship to buyers without delays.",
    details: [
      "Purchase order submission",
      "Inbound shipment coordination",
      "Packaging and labeling compliance review",
      "Receiving confirmation and inventory check-in",
    ],
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Active Distribution & Order Management",
    description:
      "With inventory in hand, we actively sell to our retail buyer network. Buyer inquiries are responded to within 1 business day. Orders are processed and shipped within 2 business days of confirmation. You receive a copy of every PO we issue to buyers.",
    details: [
      "Named account contact for every buyer relationship",
      "MAP monitored across all active channels — violations flagged within 48 hours",
      "Orders processed and shipped within 2 business days",
      "Unauthorized seller reports delivered as part of monthly summary",
    ],
  },
  {
    number: "06",
    icon: BarChart2,
    title: "Reporting & Growth",
      "Monthly reports are delivered by the 5th of each month and cover units sold, gross revenue, inventory on hand, fill rate, reorder status, and any MAP violations flagged. Quarterly calls are available to review trends and adjust strategy.",
    details: [
      "Monthly reports delivered by the 5th — units, revenue, fill rate, inventory",
      "Reorder triggered at 30-day supply threshold with 5-day confirmation window",
      "Channel and buyer performance included in every report",
      "Quarterly strategy calls available on request",
    ],
  },
];

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "From signed agreement to first active buyer order, onboarding typically takes 5–10 business days. Day 1–3 covers catalog setup and MAP documentation. Day 3–7 covers inbound inventory coordination. Buyer introductions begin as soon as inventory is confirmed received.",
  },
  {
    q: "Do you require exclusivity?",
    a: "Not by default. Exclusivity is negotiated case by case depending on the brand, category, and volume commitment. We're flexible and will always be upfront about what we're asking for and why.",
  },
  {
    q: "What categories do you work in?",
    a: "We work across health & wellness, food & beverage, home goods, beauty, and specialty consumer products. If you're unsure whether your category is a fit, just reach out — we'll give you an honest answer.",
  },
  {
    q: "How are wholesale prices determined?",
    a: "We build pricing from four inputs: your unit cost, our inbound freight and warehousing cost, estimated outbound fulfillment cost to buyers, and a target net margin. We share the full breakdown so both sides can evaluate the deal on the same numbers. Every agreement is signed before any inventory moves.",
  },
];

export default function HowItWorks() {
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
            <h1 className="text-4xl font-bold mb-4">How It Works</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From first conversation to active distribution — here's exactly what it looks like to partner with Apex Trade Distribution.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="sm:pl-16 relative">
                  {/* Step number circle */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-bold text-sm z-10">
                    {step.number}
                  </div>

                  <div className="rounded-xl border border-border p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center sm:hidden">
                        <span className="text-xs font-bold text-primary">{step.number}</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-primary/10 items-center justify-center hidden sm:flex">
                        <step.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h2 className="text-lg font-semibold">{step.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Common Questions</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-xl border border-border p-5">
                  <p className="font-semibold text-sm mb-2">{item.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="font-semibold mb-1">Ready to get started?</p>
            <p className="text-sm text-muted-foreground mb-4">
              The first step is a quick conversation. No commitment, no pressure.
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
