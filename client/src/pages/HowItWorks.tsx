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
      "You reach out and we schedule a call within 2 business days. On that call we review your product categories, current distribution setup, unit economics, and supply capacity. We'll tell you directly whether we think there's a fit — and what that partnership would look like on our end. No vague follow-ups.",
    details: [
      "SKU count, category, and volume review",
      "Current channel and pricing structure assessment",
      "Margin and MOQ feasibility check",
      "Go/no-go decision communicated within 3 business days of the call",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Partnership Agreement",
    description:
      "If we move forward, we issue a wholesale agreement within 3 business days of alignment. It covers wholesale unit pricing, Net 30 payment terms, MAP policy, reporting cadence, and exclusivity terms if applicable. No inventory moves until the agreement is signed by both parties.",
    details: [
      "Wholesale pricing built from unit cost, freight, fulfillment, and target margin",
      "MAP policy documented and applied to all buyer accounts",
      "Net 30 payment terms from invoice date — standard across all partners",
      "30-day written termination notice — no lock-in beyond active POs",
    ],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Catalog & Product Setup",
    description:
      "Before any inventory is ordered, we complete a full catalog setup. This covers SKU-level product data, imagery, spec sheets, and buyer-facing sell sheets. Target completion is 3 business days. Nothing goes to buyers until product information meets our accuracy standards.",
    details: [
      "SKU-level data entry: dimensions, weight, case pack, UPC",
      "Imagery review — minimum 1 primary image per SKU required",
      "Sell sheet prepared for buyer outreach",
      "MAP confirmed in writing before catalog goes live",
    ],
  },
  {
    number: "04",
    icon: Truck,
    title: "Inventory & Fulfillment Onboarding",
    description:
      "We issue the opening purchase order once catalog setup is complete. Inbound shipments must include a packing slip and match the PO exactly — discrepancies are flagged within 24 hours of receiving. Inventory is checked in, counted, and confirmed available within 1 business day of receipt.",
    details: [
      "Opening PO issued within 1 business day of signed agreement",
      "Inbound requirements: packing slip, case labels, UPC on each unit",
      "Receiving discrepancies flagged within 24 hours",
      "Inventory confirmation sent to brand upon check-in",
    ],
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Active Distribution & Order Management",
    description:
      "With inventory confirmed, we begin buyer outreach immediately. Each buyer account has a named contact on our team. Buyer inquiries are responded to within 1 business day. Orders are processed and shipped within 2 business days of confirmation. You receive a copy of every PO we issue to buyers.",
    details: [
      "Named account contact for every buyer relationship",
      "MAP monitored across all active channels — violations flagged within 48 hours",
      "Orders processed and shipped within 2 business days",
      "Brand receives copy of every buyer PO issued",
    ],
  },
  {
    number: "06",
    icon: BarChart2,
    title: "Reporting & Reorder",
    description:
      "Monthly reports are delivered by the 5th of each month covering units sold by SKU, gross revenue, inventory on hand, order fill rate, reorder status, and a MAP violation log. Reorders are triggered automatically when on-hand inventory hits a 30-day supply — you receive the reorder request with a 5-business-day confirmation window.",
    details: [
      "Monthly reports by the 5th — units, revenue, fill rate, inventory, MAP log",
      "Reorder triggered at 30-day supply threshold, 5-day confirmation window",
      "Ad hoc data requests fulfilled within 1 business day",
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
    a: "Not by default. Exclusivity terms are negotiated case by case based on the brand, category, and volume commitment, and are documented in the partnership agreement.",
  },
  {
    q: "What categories do you work in?",
    a: "We work across health & wellness, food & beverage, home goods, beauty, and specialty consumer products. If you're unsure whether your category is a fit, reach out and we'll let you know after reviewing the product and numbers.",
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
              A step-by-step overview of how we onboard new brand partners, from initial review through active distribution.
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
            <p className="font-semibold mb-1">Want to discuss a partnership?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Send us a note with your brand and product details. We'll follow up within 2 business days.
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
