import { useLocation } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const posts = [
  {
    category: "Amazon Strategy",
    date: "March 18, 2026",
    title: "Why MAP Enforcement Is Critical for Your Amazon Brand Health",
    summary:
      "Minimum Advertised Price policies protect your brand's value and prevent a race to the bottom on Amazon. Here's how to enforce them effectively and what to do when violations occur.",
    readTime: "5 min read",
    slug: "map-enforcement",
  },
  {
    category: "FBA Operations",
    date: "March 10, 2026",
    title: "Understanding FBA Storage Fees and How to Minimize Them",
    summary:
      "Long-term storage fees can quietly erode your margins. We break down Amazon's fee structure, when fees apply, and the inventory management strategies we use to keep costs low.",
    readTime: "6 min read",
    slug: "fba-storage-fees",
  },
  {
    category: "Brand Protection",
    date: "February 28, 2026",
    title: "Amazon Brand Registry: What It Is and Why Every Seller Should Enroll",
    summary:
      "Brand Registry gives brand owners powerful tools to control their listings, fight counterfeits, and access enhanced content features. Here's a complete guide to enrollment and what you gain.",
    readTime: "7 min read",
    slug: "brand-registry",
  },
  {
    category: "Wholesale Partnerships",
    date: "February 14, 2026",
    title: "What to Look for in an Amazon Wholesale Distribution Partner",
    summary:
      "Not all distributors are created equal. We outline the key questions brands should ask before entering a wholesale partnership — from compliance practices to reporting transparency.",
    readTime: "5 min read",
    slug: "wholesale-distribution-partner",
  },
  {
    category: "Amazon Strategy",
    date: "January 30, 2026",
    title: "A+ Content: How Enhanced Listings Drive Higher Conversion Rates",
    summary:
      "A+ Content allows brand-registered sellers to tell a richer story on their product pages. We look at the data behind conversion lift and walk through what makes a high-performing A+ layout.",
    readTime: "6 min read",
    slug: "a-plus-content",
  },
  {
    category: "FBA Operations",
    date: "January 15, 2026",
    title: "FBA vs. FBM: Choosing the Right Fulfillment Model for Your Brand",
    summary:
      "Fulfillment by Amazon offers speed and Prime eligibility, but it's not right for every product. We compare FBA and FBM across cost, control, and customer experience to help brands decide.",
    readTime: "8 min read",
    slug: "fba-vs-fbm",
  },
];

const categoryColors: Record<string, string> = {
  "Amazon Strategy": "bg-blue-50 text-blue-600",
  "FBA Operations": "bg-green-50 text-green-600",
  "Brand Protection": "bg-purple-50 text-purple-600",
  "Wholesale Partnerships": "bg-orange-50 text-orange-600",
};

export default function Blog() {
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
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Insights, strategies, and best practices for brands growing on Amazon FBA. Written by the Apex Trade Distribution team.
            </p>
          </div>

          {/* Featured post */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-10">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[posts[0].category]}`}>
              {posts[0].category}
            </span>
            <h2 className="text-xl font-bold mt-3 mb-2">{posts[0].title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{posts[0].summary}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{posts[0].date} · {posts[0].readTime}</span>
              <button onClick={() => navigate(`/blog/${posts[0].slug}`)} className="flex items-center gap-1 text-sm text-primary font-medium hover:opacity-80 transition">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Post grid */}
          <div className="space-y-5">
            {posts.slice(1).map((post) => (
              <div key={post.title} className="rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
                <h3 className="font-semibold mt-3 mb-1.5">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date} · {post.readTime}</span>
                  <button onClick={() => navigate(`/blog/${post.slug}`)} className="flex items-center gap-1 text-sm text-primary font-medium hover:opacity-80 transition">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
            <p className="font-semibold mb-1">Want to learn more about growing on Amazon?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Reach out to our team — we're happy to talk through your brand's specific situation.
            </p>
            <Button className="btn-primary" onClick={() => navigate("/contact")}>
              Talk to Us
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
