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
        heading: "What is Wholesale FBA Distribution?",
        body: "Apex Trade Distribution purchases your products at wholesale prices and resells them through Amazon's Fulfillment by Amazon (FBA) program. We handle all aspects of Amazon sales — from listing creation to customer service — while you focus on growing your brand.",
      },
      {
        heading: "Onboarding Process",
        body: "Once a partnership agreement is signed, onboarding typically takes 5–10 business days. This includes account setup, listing creation or optimization, inventory shipment planning, and brand registry verification.",
      },
      {
        heading: "Minimum Requirements",
        body: "We work with brands that have established products, a valid UPC/EAN barcode, and the ability to fulfill consistent wholesale purchase orders. Products must comply with Amazon's restricted items policy and be eligible for FBA.",
      },
    ],
  },
  {
    icon: Truck,
    title: "Inventory & Fulfillment",
    content: [
      {
        heading: "How FBA Works",
        body: "Amazon FBA (Fulfillment by Amazon) allows us to store your products in Amazon's fulfillment centers. When a customer places an order, Amazon picks, packs, ships, and handles customer service on your product's behalf — ensuring Prime eligibility and fast delivery.",
      },
      {
        heading: "Shipping to Amazon Warehouses",
        body: "Inventory is shipped to Amazon's fulfillment centers according to Amazon's FBA shipment requirements. Products must be properly labeled with FNSKU barcodes, packaged according to Amazon's prep guidelines, and shipped in compliance with Amazon's carrier requirements.",
      },
      {
        heading: "Inventory Replenishment",
        body: "We monitor sell-through rates and proactively submit purchase orders to maintain healthy inventory levels. Low stock alerts and reorder thresholds are managed to minimize stockouts and avoid excess storage fees.",
      },
    ],
  },
  {
    icon: TrendingUp,
    title: "Listing & Sales Management",
    content: [
      {
        heading: "Listing Optimization",
        body: "Our team creates and optimizes Amazon product listings including titles, bullet points, descriptions, backend keywords, and A+ Content (where applicable). Listings are crafted to maximize search visibility and conversion rates in line with Amazon's style guidelines.",
      },
      {
        heading: "Pricing Strategy",
        body: "We manage competitive pricing in compliance with your MAP (Minimum Advertised Price) policy. Our pricing strategy balances buy box ownership, profitability, and brand positioning to drive consistent sales velocity.",
      },
      {
        heading: "Advertising",
        body: "Sponsored Product and Sponsored Brand campaigns may be utilized to drive traffic to listings. Advertising decisions are made in consultation with brand partners and are managed to optimize return on ad spend (ROAS).",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Brand Protection",
    content: [
      {
        heading: "Authorized Seller Policy",
        body: "We support brands in maintaining a clean, authorized seller environment on Amazon. As your authorized distributor, we operate in full compliance with your brand's policies and help enforce MAP violations where possible through Amazon's reporting tools.",
      },
      {
        heading: "Amazon Brand Registry",
        body: "We strongly encourage all brand partners to enroll in Amazon Brand Registry, which provides greater control over product listings, access to A+ Content, and enhanced anti-counterfeiting tools. We can assist in the registration process.",
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
        body: "Brand partners receive regular sales reports including units sold, revenue, inventory levels, and marketplace performance metrics. Reports are provided on a schedule agreed upon during onboarding (typically monthly or quarterly).",
      },
      {
        heading: "Performance Metrics",
        body: "Key metrics we track include sell-through rate, Buy Box percentage, customer review ratings, return rate, and advertising performance. These metrics inform our joint strategy for growing your brand on Amazon.",
      },
    ],
  },
  {
    icon: Package,
    title: "Partnership Agreement",
    content: [
      {
        heading: "Wholesale Pricing",
        body: "Wholesale pricing is negotiated individually with each brand partner and outlined in a formal purchase order or wholesale agreement. Pricing accounts for product cost, Amazon fees, fulfillment costs, and target margins.",
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
            Everything you need to know about partnering with Apex Trade Distribution for Amazon FBA wholesale distribution.
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
