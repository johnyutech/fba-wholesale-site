import { useLocation, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

type Post = {
  category: string;
  date: string;
  readTime: string;
  title: string;
  content: React.ReactNode;
};

const posts: Record<string, Post> = {
  "map-enforcement": {
    category: "Amazon Strategy",
    date: "March 18, 2026",
    readTime: "5 min read",
    title: "Why MAP Enforcement Is Critical for Your Amazon Brand Health",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          If you've spent any time selling on Amazon, you've probably dealt with this at some point: you set a MAP policy, shake hands with your distributors, and two weeks later someone's listing your product for 30% below your price floor. It's frustrating, and it's more damaging than most brands realize.
        </p>
        <p>
          MAP — Minimum Advertised Price — is the lowest price a reseller is allowed to publicly advertise your product. It's not a sales floor. Resellers can technically sell below MAP in certain situations, like on checkout pages. But when it comes to the price that shows up on Amazon search results or product detail pages, MAP is the line.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What actually happens when MAP breaks down</h2>
        <p>
          The immediate effect is obvious — your product is cheaper than you intended. But the downstream consequences are worse. Other authorized sellers see the violation and start undercutting each other trying to win the Buy Box. Within days, you've got a pricing race to the bottom that's almost impossible to stop once it starts.
        </p>
        <p>
          Beyond the margin hit, it signals to the broader market that your brand doesn't enforce its own rules. Retail partners start to question whether Amazon is undercutting their brick-and-mortar margins. Wholesale buyers wonder why they're holding inventory at a price point that's being blown out online. The credibility damage spreads fast.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Why Amazon makes this harder than it should be</h2>
        <p>
          Amazon doesn't enforce MAP. They're clear about this. Their position is essentially that price competition benefits consumers, so they're not going to police your pricing agreements for you. That means enforcement falls entirely on the brand.
        </p>
        <p>
          The other wrinkle is that Amazon's algorithm actively favors the lowest price when determining Buy Box eligibility. So a seller undercutting your MAP isn't just violating policy — they're getting algorithmically rewarded for it. This is why MAP violations on Amazon tend to compound so quickly.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What actually works</h2>
        <p>
          The first step is getting enrolled in Amazon Brand Registry if you haven't already. Brand Registry doesn't enforce MAP for you, but it gives you the tools to control your listings, report unauthorized sellers, and protect your product detail pages from being hijacked or altered.
        </p>
        <p>
          From there, it's really about having tight control over your distribution chain. The more distributors you have, the harder MAP is to enforce. Every link in the chain is an opportunity for product to leak into unauthorized hands. Working with fewer, more accountable wholesale partners makes a real difference.
        </p>
        <p>
          When violations do happen, acting quickly matters. Document the violation with screenshots, identify the seller, and reach out directly if possible. If they're a legitimate reseller who agreed to your MAP policy, remind them of the terms and give them a window to correct it. Repeat offenders need to lose purchasing access — simple as that.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">The bottom line</h2>
        <p>
          MAP enforcement isn't glamorous, but it's one of the most important things you can do to protect your brand's long-term value on Amazon. Brands that let violations slide end up in a race to the bottom that's painful to recover from. Brands that enforce consistently build a healthier, more predictable sales channel — and their wholesale partners appreciate it too.
        </p>
      </div>
    ),
  },

  "fba-storage-fees": {
    category: "FBA Operations",
    date: "March 10, 2026",
    readTime: "6 min read",
    title: "Understanding FBA Storage Fees and How to Minimize Them",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          FBA storage fees are one of those costs that can sneak up on you. You're focused on sales, things are moving, and then you get your monthly fee breakdown and there's a line item that makes you do a double take. It happens to a lot of sellers, and it's almost always avoidable with a bit more attention to inventory planning.
        </p>
        <p>
          Here's how Amazon's storage fees actually work, and what we do in practice to keep them under control.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Monthly storage fees</h2>
        <p>
          Amazon charges a monthly fee based on the cubic footage your inventory occupies in their fulfillment centers. The rate changes by time of year — it's lower from January through September, and significantly higher from October through December because Amazon is protecting warehouse space heading into Q4.
        </p>
        <p>
          The category of your product matters too. Standard-size items are charged at a lower rate than oversized, and there are different tiers within each. If you're not sure how your products are classified, it's worth double-checking in Seller Central — misclassification happens and it can affect your fees.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Aged inventory surcharges</h2>
        <p>
          This is where things get expensive. Amazon charges an additional surcharge on inventory that's been sitting in their warehouses for more than 181 days. The longer it sits, the higher the fee per unit. Products that have been there over a year get hit the hardest.
        </p>
        <p>
          The tricky part is that aged inventory fees aren't always easy to spot until they've already accumulated. We check the FBA Inventory Age report regularly — it's one of the most useful tools in Seller Central for catching slow-moving SKUs before they become a real problem.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What we actually do to keep fees low</h2>
        <p>
          The single most effective thing is right-sizing your shipments. Sending three months of inventory because it saves on shipping might look efficient, but if sales slow down, you're paying storage fees on two months of dead stock. We try to keep inventory turns healthy — typically targeting 60–90 days of cover for most SKUs.
        </p>
        <p>
          For slower-moving products, we run targeted promotions or adjust pricing to accelerate sell-through before the aged inventory clock runs out. Sometimes taking a short-term margin hit is much cheaper than paying surcharges month after month.
        </p>
        <p>
          When a SKU is truly stuck, inventory removal is an option. Amazon will send your products back to you (or dispose of them) for a per-unit fee. It's not free, but it's usually cheaper than letting aged inventory fees compound. We treat removal as a last resort but don't hesitate to use it when the math makes sense.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">One thing a lot of sellers overlook</h2>
        <p>
          Amazon's inventory performance metrics — specifically the Inventory Performance Index (IPI) — affect how much storage space you're allowed to use. If your IPI drops below a certain threshold, Amazon limits how much inventory you can send in. That creates a real operational headache during high-demand seasons.
        </p>
        <p>
          Keeping your IPI healthy by managing excess inventory, reducing stranded listings, and maintaining solid in-stock rates is worth the effort. It gives you more flexibility when you need it most.
        </p>
      </div>
    ),
  },

  "brand-registry": {
    category: "Brand Protection",
    date: "February 28, 2026",
    readTime: "7 min read",
    title: "Amazon Brand Registry: What It Is and Why Every Seller Should Enroll",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          If you own a brand and you're selling on Amazon — or if you have any wholesale partners who are — Brand Registry is probably the most useful thing Amazon offers that a surprising number of brands still haven't signed up for. It's free, it doesn't take that long to set up, and the protections it gives you are genuinely valuable.
        </p>
        <p>
          Here's a plain-English breakdown of what Brand Registry actually does and what you get out of it.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What Brand Registry is</h2>
        <p>
          Brand Registry is Amazon's program for verified brand owners. To enroll, you need an active registered trademark (or a pending application in some cases). Amazon uses this to confirm that you actually own the brand you're claiming, which is how they're able to give you more control over your listings.
        </p>
        <p>
          Once you're enrolled, your brand gets tied to a set of ASINs on Amazon. You become the authority on what those listings look like — the title, images, description, and bullet points. Unauthorized sellers can still list against your ASINs, but they lose the ability to freely edit your listing content.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">The reporting tools are actually useful</h2>
        <p>
          Brand Registry gives you access to a violation reporting dashboard where you can flag counterfeit products, listings using your brand name without authorization, and other IP violations. Amazon's response time isn't always lightning fast, but having a direct reporting channel is a lot better than going through generic Seller Support.
        </p>
        <p>
          There's also a tool called Transparency that lets you add unique codes to individual product units. Customers can scan those codes to verify authenticity. It's mostly relevant for brands dealing with counterfeiting at scale, but it's good to know it exists.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">A+ Content</h2>
        <p>
          This is the one that directly affects conversion rates. Brand Registry unlocks A+ Content (formerly Enhanced Brand Content), which lets you replace the plain text product description with a richer layout — multiple images, comparison charts, custom headers, feature callouts. Done well, it makes your listing look significantly more polished than a competitor without it.
        </p>
        <p>
          The data on A+ Content is pretty consistent: it lifts conversion rates, often meaningfully. If you're already enrolled in Brand Registry and you haven't set up A+ Content yet, it should be near the top of your list.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Brand Analytics</h2>
        <p>
          Another underused benefit. Brand Analytics gives you access to search term data — what people are actually typing into Amazon to find products like yours. You can see search frequency rankings, click share, and conversion share for specific keywords. It's the kind of competitive intelligence that's hard to get anywhere else, and it's included with Brand Registry at no extra cost.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">How to get enrolled</h2>
        <p>
          You'll need a registered trademark in the country where you're enrolling. For the US, that means a USPTO registration or a pending application through Amazon's IP Accelerator program. Head to brandservices.amazon.com, submit your trademark information, and Amazon will verify it before approving your enrollment.
        </p>
        <p>
          The process is straightforward but can take a few weeks depending on verification timing. If you don't have a trademark yet, it's worth starting that process — the protections Brand Registry provides are worth it, and it only gets more valuable as your Amazon presence grows.
        </p>
      </div>
    ),
  },

  "wholesale-distribution-partner": {
    category: "Wholesale Partnerships",
    date: "February 14, 2026",
    readTime: "5 min read",
    title: "What to Look for in an Amazon Wholesale Distribution Partner",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Handing off your Amazon distribution to a wholesale partner is a significant decision. Done right, it frees you up to focus on your product and brand while someone who knows the platform handles the operational complexity. Done wrong, it can create pricing chaos, listing problems, and brand damage that takes months to undo.
        </p>
        <p>
          We've seen both outcomes. Here's what we think actually matters when evaluating a potential distribution partner.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Are they actually authorized?</h2>
        <p>
          This sounds basic, but it's the most important thing. An authorized distributor has a direct purchasing relationship with you or your approved supply chain. They're not buying your product from a liquidation pallet or a third-party marketplace and relisting it on Amazon.
        </p>
        <p>
          Ask for documentation. Ask how they source inventory. If the answer is vague or they can't show you a clear chain of custody, that's a red flag. Unauthorized sellers operating as if they're legitimate distributors are more common than you'd expect, and they create real problems for brand control.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Do they have genuine Amazon experience?</h2>
        <p>
          Amazon expertise isn't something you pick up overnight. The platform has its own rules, quirks, and best practices that take time to really understand. Ask about their track record: how many brands do they work with, what categories, what results have they actually driven?
        </p>
        <p>
          Specifics matter here. "We've grown revenue for our partners" is easy to say. Asking about their approach to listing optimization, how they handle Buy Box competition, or what their process is for managing aged inventory will tell you a lot more.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Will they respect your MAP policy?</h2>
        <p>
          A distribution partner who undercuts your MAP — even once — sends a signal to the rest of the marketplace. Ask upfront how they handle MAP compliance and what their track record looks like. If they're evasive about it or treat it as a suggestion rather than a real commitment, walk away.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What does reporting look like?</h2>
        <p>
          You should be able to see what's happening with your brand on Amazon without having to chase someone down for updates. A good distribution partner gives you regular, clear reporting on sales volume, inventory levels, and listing performance. Ask to see a sample report or talk through what data they provide and how often.
        </p>
        <p>
          Transparency isn't just nice to have — it's how you catch problems early and make good decisions about your inventory and pricing strategy.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Are the contract terms fair?</h2>
        <p>
          Read the agreement carefully. Pay attention to exclusivity terms, termination clauses, and what happens to existing inventory if the partnership ends. Some distributors lock brands into arrangements that are very hard to exit if things aren't working out.
        </p>
        <p>
          A partner who's confident in what they're offering shouldn't need onerous contract terms to keep you. Fair terms on both sides are a good sign.
        </p>
      </div>
    ),
  },

  "a-plus-content": {
    category: "Amazon Strategy",
    date: "January 30, 2026",
    readTime: "6 min read",
    title: "A+ Content: How Enhanced Listings Drive Higher Conversion Rates",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          There's a version of an Amazon listing that's just a product title, five bullet points, and a wall of plain text where the description should be. And then there's a version with lifestyle imagery, a clear feature breakdown, a comparison chart showing how this product stacks up, and a layout that actually looks like someone put thought into it.
        </p>
        <p>
          That second version is what A+ Content makes possible. And the conversion difference between a basic listing and a well-executed A+ listing is real — Amazon's own data has consistently shown conversion rate lifts in the range of 3–10% on average, and we've seen bigger jumps than that in competitive categories.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What A+ Content actually is</h2>
        <p>
          A+ Content replaces the standard product description section on your Amazon listing with a custom layout that you build using Amazon's module system. You get options like full-width image banners, side-by-side image and text blocks, product comparison tables, and feature highlight sections with icons.
        </p>
        <p>
          It's available to sellers enrolled in Amazon Brand Registry. If you're not enrolled, that's the first step — there's no way to access A+ Content without it.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What makes it actually work</h2>
        <p>
          The biggest mistake brands make with A+ Content is treating it like a brochure. They load it up with marketing language and brand story copy, and end up with something that looks polished but doesn't actually help the customer make a decision.
        </p>
        <p>
          The content that converts well does a few specific things. It answers the questions a customer would have at the point of purchase — what exactly is this, how does it work, what makes it better than the alternatives, and is it right for my situation. It uses real images of the product in use, not just white-background shots. And it's organized so that someone skimming it can pull out the key points in a few seconds.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Comparison charts are underrated</h2>
        <p>
          If you sell multiple products or SKUs within a category, the comparison module is one of the highest-leverage pieces of A+ Content you can create. It keeps customers in your brand's ecosystem when they're deciding between options, rather than sending them to a competitor's listing.
        </p>
        <p>
          It also signals to customers that this is a real brand with a real product line — not just a single item thrown up by a random seller. That trust factor is subtle but it matters.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Premium A+ Content</h2>
        <p>
          Brands that maintain a high Brand Registry score can unlock Premium A+ Content, which includes additional module types like video, interactive hotspots, and larger image carousels. Not every brand will hit the threshold for this, but it's worth knowing it exists as your presence on Amazon grows.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">The practical takeaway</h2>
        <p>
          If you're Brand Registry enrolled and your listings still have plain text descriptions, you're leaving conversion rate on the table. It doesn't have to be complicated — a few well-chosen modules with good images and clear copy will outperform a fancy but unfocused layout every time. Start with your top-selling ASINs and build from there.
        </p>
      </div>
    ),
  },

  "fba-vs-fbm": {
    category: "FBA Operations",
    date: "January 15, 2026",
    readTime: "8 min read",
    title: "FBA vs. FBM: Choosing the Right Fulfillment Model for Your Brand",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Most conversations about FBA vs. FBM frame it as an either/or decision, but the reality is that the right answer depends heavily on your product, your margins, and what you're trying to accomplish. A lot of experienced Amazon sellers actually use both simultaneously — FBA for their core SKUs and FBM as a backup or for specific situations where it makes more sense.
        </p>
        <p>
          Here's a realistic breakdown of both models and how to think about which one fits your situation.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What FBA actually means for your business</h2>
        <p>
          With Fulfillment by Amazon, you ship your inventory to Amazon's warehouses and they take it from there — picking, packing, shipping, handling returns, and managing customer service for order-related issues. Your listings become Prime-eligible, which is a significant conversion advantage. A large portion of Amazon's customer base filters by Prime eligibility by default.
        </p>
        <p>
          The cost is real though. You're paying FBA fulfillment fees per unit, monthly storage fees, and potentially aged inventory surcharges if product doesn't move fast enough. For small, low-cost items with thin margins, FBA fees can eat into profitability in a way that's hard to recover from. For larger, faster-moving products with stronger margins, FBA typically makes a lot of sense.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">FBM is more flexible than people give it credit for</h2>
        <p>
          With Fulfilled by Merchant, you (or your fulfillment partner) handle all shipping and customer service directly. You don't pay Amazon's fulfillment fees, and you have more control over packaging, delivery speed, and the customer experience.
        </p>
        <p>
          The obvious downside is that you lose automatic Prime eligibility. There's a workaround — Seller Fulfilled Prime — but it comes with strict performance requirements that aren't easy to maintain without a serious fulfillment operation. For most brands, FBM without SFP means competing against Prime-badged listings, which is a real disadvantage in most categories.
        </p>
        <p>
          That said, FBM works well for heavy or oversized products where FBA fulfillment fees are disproportionately high. It also works for made-to-order or customized products that don't fit Amazon's standardized fulfillment model. And it's a practical backup when FBA inventory runs out — having FBM listings live means you can still make sales while your next shipment is in transit to Amazon.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">The numbers that actually matter</h2>
        <p>
          The clearest way to compare them is to run the actual unit economics side by side. Take your product's selling price, subtract Amazon's referral fee (which applies to both models), and then compare the fulfillment cost for each path.
        </p>
        <p>
          For FBA, that's the per-unit fulfillment fee plus your storage cost allocation. For FBM, it's your actual shipping cost plus the labor or 3PL cost to pick and pack. Don't forget to account for the conversion rate difference — FBA's Prime badge typically drives higher conversion, which has real revenue implications even if the per-unit fulfillment cost is higher.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Our general take</h2>
        <p>
          For most consumer products in the $15–$150 range, FBA is the right default. The Prime badge, the logistics simplicity, and the Buy Box advantage it provides are hard to replicate through FBM. Where FBM makes sense to layer in is for products with dimensions or weights that make FBA fees punishing, or as a safety net for stockout scenarios.
        </p>
        <p>
          If you're early in your Amazon journey and trying to keep things simple, start with FBA for your core SKUs and get the fundamentals right before adding complexity. If you're at a point where margins are under pressure, it's worth doing the math on specific SKUs — there's no rule that says everything has to be handled the same way.
        </p>
      </div>
    ),
  },
};

const categoryColors: Record<string, string> = {
  "Amazon Strategy": "bg-blue-50 text-blue-600",
  "FBA Operations": "bg-green-50 text-green-600",
  "Brand Protection": "bg-purple-50 text-purple-600",
  "Wholesale Partnerships": "bg-orange-50 text-orange-600",
};

export default function BlogPost() {
  const [, navigate] = useLocation();
  const params = useParams<{ slug: string }>();
  const post = posts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Post not found.</p>
          <Button className="btn-primary" onClick={() => navigate("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 md:px-0">
          <button onClick={() => navigate("/")} className="flex items-center gap-3 hover:opacity-80 transition">
            <img src={ATD_LOGO} alt="Apex Trade Distribution" className="w-8 h-8" />
            <span className="font-semibold text-foreground">Apex Trade Distribution</span>
          </button>
          <button onClick={() => navigate("/blog")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
              {post.category}
            </span>
            <h1 className="text-3xl font-bold mt-4 mb-3 leading-snug">{post.title}</h1>
            <p className="text-xs text-muted-foreground">{post.date} · {post.readTime}</p>
          </div>

          <div className="border-t border-border pt-8">
            {post.content}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="font-semibold mb-1">Interested in working together?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Reach out to our team and let's talk about what wholesale distribution could look like for your brand.
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
