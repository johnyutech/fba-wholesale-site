import { useLocation } from "wouter";
import { ArrowLeft, Package, TrendingUp, ShieldCheck, FileText, Truck, BarChart2 } from "lucide-react";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const sections = [
  {
    icon: FileText,
    title: "Getting Started",
    content: [
      {
        heading: "What is B2B Wholesale Distribution?",
        body: "Apex Trade Distribution purchases your products at wholesale prices and distributes them through our retail buyer network. We manage buyer relationships, order fulfillment, pricing, and reporting — while you focus on your product and supply chain.",
      },
      {
        heading: "Onboarding Process",
        body: "Once a partnership agreement is signed, onboarding typically takes 5–10 business days. This includes catalog setup, inventory coordination, buyer channel onboarding, and MAP policy documentation.",
      },
      {
        heading: "Minimum Requirements",
        body: "We work with brands that have established products, a valid UPC/EAN barcode, and the ability to fulfill consistent wholesale purchase orders. Products must be retail-ready and comply with applicable labeling and safety requirements.",
      },
    ],
  },
  {
    icon: Truck,
    title: "Inventory & Fulfillment",
    content: [
      {
        heading: "How Our Fulfillment Works",
        body: "We receive inbound inventory from brand partners, store it in our fulfillment operation, and ship outbound orders to retail buyers within 2 business days of order confirmation. Standard outbound transit to buyers is 3–5 business days via ground carrier. Expedited shipping is available on request.",
      },
      {
        heading: "Shipping Inventory to Us",
        body: "Inventory is shipped to our fulfillment location according to our inbound requirements. Products must be properly labeled, packaged to retail-ready standards, and shipped with an advance shipping notice (ASN) so we can receive and check in efficiently.",
      },
      {
        heading: "Inventory Replenishment",
        body: "Reorder requests are triggered automatically when on-hand inventory drops to a 30-day supply based on trailing 90-day sell-through. Brand partners receive a reorder request via email with a 5-business-day confirmation window. Purchase orders are issued upon confirmation and inventory is expected within the agreed lead time.",
      },
    ],
  },
  {
    icon: TrendingUp,
    title: "Listing & Sales Management",
    content: [
      {
        heading: "Catalog & Product Presentation",
        body: "We maintain accurate, buyer-ready product information across our distribution channels including product descriptions, specifications, imagery, and sell sheets. Accurate catalog data reduces buyer friction and supports faster purchasing decisions.",
      },
      {
        heading: "Pricing Strategy",
        body: "We manage competitive pricing in compliance with your MAP (Minimum Advertised Price) policy. Our pricing strategy balances buyer competitiveness, profitability, and brand positioning to drive consistent sales velocity across channels.",
      },
      {
        heading: "Buyer Account Management",
        body: "Each retail buyer account has a named contact on our team responsible for fielding inquiries, issuing quotes, processing orders, and managing reorder cadence. Buyer inquiries are responded to within 1 business day. Order confirmations are issued same day. Brand partners receive a copy of all purchase orders issued to buyers.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection",
    content: [
      {
        heading: "Authorized Distributor Policy",
        body: "We operate as a fully authorized distributor for every brand we carry. We do not source from gray market channels and do not resell products in ways that violate brand policies. Every partnership is governed by a formal agreement that defines the scope of our distribution rights.",
      },
      {
        heading: "Unauthorized Seller Monitoring",
        body: "We monitor distribution channels for unauthorized resellers and MAP violations and report them to brand partners as part of our ongoing channel management. Keeping your distribution channel clean protects pricing integrity and brand equity.",
      },
      {
        heading: "Intellectual Property Compliance",
        body: "All listings created by Apex Trade Distribution use only brand-approved images, copy, and assets. We never alter, repackage, or misrepresent products and operate strictly within the boundaries of our partnership agreement.",
      },
    ],
  },
  {
    icon: BarChart2,
    title: "Reporting & Analytics",
    content: [
      {
        heading: "Sales Reporting",
        body: "Monthly reports are delivered by the 5th of each month as a structured spreadsheet. Each report covers: units sold by SKU, gross revenue, inventory on hand, order fill rate, reorder status, and a MAP violation log. Mid-month snapshots and ad hoc data requests are fulfilled within 1 business day.",
      },
      {
        heading: "Performance Metrics",
        body: "Standard metrics tracked per SKU include sell-through rate, order fill rate, buyer reorder frequency, return rate, and channel revenue. We flag any SKU approaching 90 days on hand without movement and include a recommended action in the monthly report.",
      },
    ],
  },
  {
    icon: Package,
    title: "Partnership Agreement",
    content: [
      {
        heading: "Wholesale Pricing",
        body: "Wholesale pricing is negotiated individually with each brand partner and outlined in a formal wholesale agreement signed before any inventory moves. Pricing is built from four inputs: your unit cost, inbound freight, our warehousing and outbound fulfillment cost, and a target net margin. We share the full cost breakdown so both sides evaluate the deal on the same numbers.",
      },
      {
        heading: "Payment Terms",
        body: "Standard payment terms are Net 30 from date of invoice unless otherwise agreed. We issue purchase orders prior to each inventory buy, and payment is processed upon receipt and inspection of goods.",
      },
      {
        heading: "Agreement Duration & Termination",
        body: "Partnerships operate on an ongoing basis with either party able to terminate with 30 days written notice unless otherwise specified. All active purchase orders and inventory obligations at the time of termination will be honored per the agreement terms.",
      },
    ],
  },
];

export default function Documentation() {
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
          <h1 className="text-4xl font-bold mb-2">Documentation</h1>
          <p className="text-muted-foreground mb-10">
            Everything you need to know about partnering with Apex Trade Distribution for B2B wholesale distribution.
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>
                <div className="space-y-5 pl-12">
                  {section.content.map((item) => (
                    <div key={item.heading}>
                      <h3 className="font-semibold text-base mb-1">{item.heading}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl border border-border bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Have a question not covered here?{" "}
              <button onClick={() => navigate("/contact")} className="text-primary underline hover:opacity-80 transition">
                Contact our team
              </button>{" "}
              and we'll get back to you within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
