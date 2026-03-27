import { useLocation } from "wouter";
import { ArrowLeft, Mail, Clock, AlertCircle, RefreshCw, ShieldAlert, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const topics = [
  {
    icon: RefreshCw,
    title: "Inventory & Replenishment",
    items: [
      "Submitting a new purchase order",
      "Updating product quantities or SKUs",
      "FBA shipment prep and labeling requirements",
      "Stranded or unfulfillable inventory",
      "Storage fee concerns and inventory removal",
    ],
  },
  {
    icon: AlertCircle,
    title: "Listing Issues",
    items: [
      "Listing suppressed or inactive",
      "Incorrect product detail page information",
      "Image or content update requests",
      "ASIN merge or variation requests",
      "Listing hijacking or unauthorized seller reports",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Account & Compliance",
    items: [
      "Amazon policy violation notices",
      "Brand Registry enrollment assistance",
      "MAP policy enforcement",
      "Product authenticity or IP complaints",
      "Account health inquiries",
    ],
  },
  {
    icon: MessageSquare,
    title: "Partnership & Billing",
    items: [
      "Purchase order inquiries",
      "Invoice questions or discrepancies",
      "Agreement terms or renewals",
      "Reporting and analytics requests",
      "Onboarding status updates",
    ],
  },
];

export default function Support() {
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
          <h1 className="text-4xl font-bold mb-2">Support</h1>
          <p className="text-muted-foreground mb-10">
            We're here to help. Reach out to our team for any questions related to your wholesale partnership, inventory, listings, or account.
          </p>

          {/* Contact card */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Email Support</p>
                <a href="mailto:john.yu@apexdistribution.co" className="text-sm text-primary underline">
                  john.yu@apexdistribution.co
                </a>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Typical response within 1–2 business days</span>
                </div>
              </div>
            </div>
            <Button className="btn-primary shrink-0" onClick={() => navigate("/contact")}>
              Send a Message
            </Button>
          </div>

          {/* Support topics */}
          <h2 className="text-2xl font-semibold mb-6">Common Support Topics</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {topics.map((topic) => (
              <div key={topic.title} className="rounded-xl border border-border p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <topic.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold">{topic.title}</h3>
                </div>
                <ul className="space-y-2">
                  {topic.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Escalation note */}
          <div className="rounded-xl border border-border bg-muted/30 p-5">
            <h3 className="font-semibold mb-2">Urgent Issues</h3>
            <p className="text-sm text-muted-foreground">
              For time-sensitive matters such as Amazon account suspensions, listing takedowns, or IP complaints, please indicate "URGENT" in your subject line when emailing us. We prioritize these cases and aim to respond within the same business day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
