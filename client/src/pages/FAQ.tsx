import { useLocation } from "wouter";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const faqs = [
  {
    category: "Partnership & Onboarding",
    questions: [
      {
        q: "How does Apex Trade Distribution work?",
        a: "We purchase your products at wholesale prices and distribute them through our retail buyer network. You supply the inventory, we handle everything on the distribution side — buyer relationships, order management, pricing, fulfillment, and reporting.",
      },
      {
        q: "What types of brands do you work with?",
        a: "We work with established consumer brands across a wide range of categories including health & wellness, beauty, home goods, sports & outdoors, and more. We look for brands with proven products, consistent supply, and a desire to grow their wholesale distribution.",
      },
      {
        q: "How long does onboarding take?",
        a: "Onboarding typically takes 5–10 business days from the time a partnership agreement is signed. This includes catalog setup, inventory coordination, and buyer channel onboarding.",
      },
      {
        q: "Is there an exclusivity requirement?",
        a: "Exclusivity terms vary by partnership and are negotiated on a case-by-case basis. We offer both exclusive and non-exclusive distribution arrangements depending on the brand's goals and market strategy.",
      },
    ],
  },
  {
    category: "Distribution & Fulfillment",
    questions: [
      {
        q: "What retail channels do you distribute through?",
        a: "We distribute through a range of retail channels including online retailers, regional chains, specialty stores, and independent retailers. Channel mix varies by product category and is discussed during the partnership onboarding process.",
      },
      {
        q: "How do you handle order fulfillment?",
        a: "We manage outbound fulfillment to our retail buyers directly. Once we receive inventory from brand partners, we process buyer orders, coordinate shipping, and handle any logistics issues that arise — keeping you informed without adding to your workload.",
      },
      {
        q: "What happens if there's a fulfillment issue or product dispute?",
        a: "We address fulfillment issues proactively and keep brand partners informed. Disputes are handled directly with buyers on your behalf. Serious issues affecting brand reputation are treated as urgent and escalated immediately.",
      },
      {
        q: "Do you distribute outside the US?",
        a: "We currently focus on domestic US distribution. Expansion to international markets can be discussed as part of an advanced partnership arrangement.",
      },
    ],
  },
  {
    category: "Inventory & Pricing",
    questions: [
      {
        q: "How is wholesale pricing determined?",
        a: "Wholesale pricing is negotiated individually with each brand partner. We evaluate product cost, fulfillment costs, buyer pricing expectations, and target margin to arrive at a mutually beneficial price point. All pricing is formalized in a purchase order or wholesale agreement.",
      },
      {
        q: "Do you honor MAP (Minimum Advertised Price) policies?",
        a: "Yes. We fully respect MAP policies set by brand partners and enforce them in our Amazon listings. Maintaining price integrity is important for brand health and long-term marketplace success.",
      },
      {
        q: "What are the minimum order quantities?",
        a: "Minimum order quantities (MOQs) vary depending on the product, category, and agreement terms. We discuss MOQs during the onboarding process and align on purchase order cadence based on sales velocity and inventory goals.",
      },
      {
        q: "Who is responsible for warehousing and storage costs?",
        a: "Storage and fulfillment costs are factored into our cost model. We actively manage inventory turnover to minimize holding costs and avoid excess stock that could affect profitability for either side.",
      },
    ],
  },
  {
    category: "Reporting & Communication",
    questions: [
      {
        q: "How often will I receive sales reports?",
        a: "Reporting frequency is agreed upon during onboarding. Most partners receive monthly performance reports covering units sold, revenue, inventory status, and key marketplace metrics. Custom reporting schedules can be accommodated.",
      },
      {
        q: "Who do I contact if I have a question or issue?",
        a: "All partner inquiries are handled by our team directly. You can reach us at john.yu@apexdistribution.co or by submitting a message through our contact page. We typically respond within 1–2 business days.",
      },
      {
        q: "Can I see distribution performance in real time?",
        a: "We provide regular reporting snapshots and can share relevant performance data upon request. For brands that want more visibility, we can set up a custom reporting cadence that gives you timely access to sales, inventory, and buyer channel metrics.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-sm">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-sm text-muted-foreground pb-4 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
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
          <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-10">
            Answers to the most common questions about our wholesale partnership and B2B distribution services.
          </p>

          <div className="space-y-10">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-lg font-semibold mb-2 text-primary">{section.category}</h2>
                <div className="rounded-xl border border-border px-5">
                  {section.questions.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
            <p className="font-semibold mb-1">Still have questions?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Our team is happy to help. Reach out and we'll get back to you within 1–2 business days.
            </p>
            <Button className="btn-primary" onClick={() => navigate("/contact")}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
