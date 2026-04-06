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
    category: "Distribution Strategy",
    date: "March 18, 2026",
    readTime: "5 min read",
    title: "Why MAP Enforcement Is Critical for Your Brand's Wholesale Health",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          If you've spent any time distributing through wholesale channels, you've probably dealt with this: you set a MAP policy, sign agreements with your distributors, and a few weeks later someone's advertising your product at 30% below your price floor. It's frustrating, and it's more damaging than most brands realize.
        </p>
        <p>
          MAP — Minimum Advertised Price — is the lowest price a reseller is allowed to publicly advertise your product. It's a contractual commitment, not a suggestion. And when it breaks down in wholesale, the consequences ripple across every channel you sell through.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What actually happens when MAP breaks down</h2>
        <p>
          The immediate effect is obvious — your product is cheaper than you intended. But the downstream consequences are worse. Other authorized buyers see the violation and start demanding the same price to stay competitive. Retailers who bought inventory at standard wholesale pricing feel undercut and start pushing back. Within weeks, your entire pricing structure is under pressure.
        </p>
        <p>
          Beyond the margin hit, it signals to the market that your brand doesn't enforce its own rules. Brick-and-mortar retailers start questioning whether they can profitably carry your product when online prices are being blown out. The credibility damage spreads fast and takes a long time to repair.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Why wholesale makes this harder than direct-to-consumer</h2>
        <p>
          When you sell direct, you control the price. In wholesale, you've sold the product — you no longer own it, and your ability to dictate the resale price has legal limits. MAP policies work around this by setting a floor on advertised price rather than actual sale price, which is an important distinction.
        </p>
        <p>
          The challenge is that enforcement falls entirely on the brand. Your distributor agreed to your MAP policy, but if a downstream buyer they sold to doesn't honor it, you're multiple steps removed from the violation. That's why your distribution chain matters so much — every additional link is another potential leak.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What actually works</h2>
        <p>
          Tight distribution is the foundation. The more distributors and resellers you have, the harder MAP is to enforce. Working with fewer, more accountable wholesale partners — ones who contractually agree to MAP and flow those terms to their buyers — makes a real difference.
        </p>
        <p>
          Monitor regularly. Set up price tracking across the channels where your product appears and review it on a consistent cadence. Violations you catch within days are much easier to address than ones that have been running for months.
        </p>
        <p>
          When violations do happen, act quickly. Document the violation, identify the seller, and reach out directly. If they're a legitimate reseller who agreed to your MAP policy, give them a short window to correct it. Repeat offenders need to lose purchasing access — that's the only signal that actually changes behavior.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">The bottom line</h2>
        <p>
          MAP enforcement isn't glamorous, but it's one of the most important things you can do to protect your brand's long-term value in wholesale. Brands that enforce consistently build healthier, more predictable channel relationships — and their distribution partners appreciate it because it protects their margins too.
        </p>
      </div>
    ),
  },

  "inventory-carrying-costs": {
    category: "Wholesale Operations",
    date: "March 10, 2026",
    readTime: "6 min read",
    title: "Understanding Inventory Carrying Costs and How to Minimize Them",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Inventory carrying costs are one of those expenses that can quietly erode your margins if you're not watching them. You're focused on sales, things are moving, and then you look at the numbers and realize a meaningful chunk of your gross profit is tied up in the cost of holding stock. It happens to a lot of brands and distributors, and it's almost always addressable with better inventory discipline.
        </p>
        <p>
          Here's how carrying costs actually work, and what we do in practice to keep them under control.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What's actually included in carrying costs</h2>
        <p>
          Most people think of carrying costs as just warehousing fees, but it's a broader set of expenses. The main components are storage and warehousing, capital cost (the money tied up in inventory that could be deployed elsewhere), insurance, shrinkage and damage, and the cost of obsolescence for products that age out before they sell.
        </p>
        <p>
          A rough industry benchmark is that carrying costs run somewhere between 20–30% of inventory value annually. That means if you're holding $500,000 in inventory, you're spending $100,000–$150,000 per year just to hold it. That number changes how you think about how much stock to keep on hand.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Slow-moving SKUs are where the damage happens</h2>
        <p>
          Fast-moving inventory doesn't accumulate meaningful carrying costs because it turns before they add up. The problem is slow-moving SKUs — products sitting in the warehouse for 90, 120, 180 days or more. Each month they sit, you're paying to store them while also tying up capital that could fund faster-moving stock.
        </p>
        <p>
          We track inventory age by SKU on a regular cadence. Anything approaching 90 days without movement gets flagged for review. Often the right move is a price adjustment to accelerate sell-through — taking a smaller margin hit now beats paying carrying costs month after month.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Right-sizing purchase orders</h2>
        <p>
          The single most effective lever is purchasing discipline. Larger POs typically get better per-unit pricing, but that discount can disappear entirely if slow turns mean you're carrying the inventory for six months. We model the real landed cost — unit price plus carrying cost for the expected turn time — when evaluating order quantities.
        </p>
        <p>
          For seasonal products or new SKUs without established velocity data, we tend to buy conservatively on the first few orders and build up from there once we have confidence in the turn rate. It's better to miss a few sales than to be sitting on dead stock after the season ends.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Reorder timing matters as much as quantity</h2>
        <p>
          Inventory optimization isn't just about how much you buy — it's about when. Reordering too early means you're carrying excess stock unnecessarily. Reordering too late means stockouts and lost sales. Building accurate lead time and velocity data by SKU is what makes good reorder timing possible.
        </p>
        <p>
          We set reorder points based on lead time plus a safety stock buffer sized to the variability in both demand and supplier lead times. It's not complicated, but it requires actually maintaining that data rather than ordering on gut feel.
        </p>
      </div>
    ),
  },

  "brand-protection-wholesale": {
    category: "Brand Protection",
    date: "February 28, 2026",
    readTime: "7 min read",
    title: "Protecting Your Brand in Wholesale: Authorized Distributors and Gray Market Risk",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          One of the less-discussed risks of wholesale distribution is what happens to your product after it leaves your hands. You sell to an authorized distributor. They sell to a retailer. That retailer sells to someone else. Somewhere in that chain, product can end up in unauthorized hands — resold through channels you never agreed to, at prices that undercut your MAP policy, damaging your brand's reputation in ways that are hard to trace back.
        </p>
        <p>
          This is the gray market problem, and it's more common than most brands expect. Here's how it happens and what you can do about it.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">How gray market product gets into circulation</h2>
        <p>
          Gray market product isn't counterfeit — it's genuine product sold through unauthorized channels. It typically enters the market through a few common paths: a distributor sells excess inventory to a liquidator, an authorized retailer offloads slow-moving stock, or product from a foreign market gets diverted into the domestic channel.
        </p>
        <p>
          Once it's out there, it's hard to trace and even harder to pull back. The seller may not even know the product came from a problematic source. But from a brand perspective, it doesn't matter — the damage to pricing integrity and channel relationships is the same.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Why it matters more than you might think</h2>
        <p>
          The pricing impact is obvious — gray market product tends to show up at discounted prices that undercut your MAP and put pressure on your authorized sellers. But the reputational risk is often worse. Product that's been improperly stored or handled can arrive at the customer in poor condition. If customers associate your brand with that experience, the damage is yours to absorb even though you had nothing to do with it.
        </p>
        <p>
          Authorized retail partners also notice. A major retailer who has a wholesale account with you doesn't want to compete against product of unknown origin selling at prices they can't match. These situations erode trust and can cost you meaningful shelf placement.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">The most effective defenses</h2>
        <p>
          Tight distribution is the foundation. Every additional distributor or reseller in your chain is another potential source of leakage. Working with a small number of accountable partners — who agree in writing to flow your brand policies to their downstream buyers — significantly reduces gray market risk.
        </p>
        <p>
          Serialization and lot coding let you trace product back to the original shipment when violations occur. If you can identify which shipment a gray market unit came from, you can identify which distributor let it leak. That accountability changes behavior.
        </p>
        <p>
          Selective distribution agreements are another tool. Instead of selling wholesale to anyone who wants to buy, you define exactly which types of accounts are authorized to carry your brand and what channels they're permitted to sell through. More restrictive, but much easier to enforce.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What to do when you find a violation</h2>
        <p>
          Document it thoroughly — screenshots, purchase records if you can get them, timestamps. Then work backward through your distribution chain to identify the source. Send a formal cease-and-desist to the unauthorized seller and follow up if they don't comply. For repeat offenders, cutting off the supply source that's feeding them is usually more effective than chasing individual violations.
        </p>
      </div>
    ),
  },

  "wholesale-distribution-partner": {
    category: "Wholesale Partnerships",
    date: "February 14, 2026",
    readTime: "5 min read",
    title: "What to Look for in a B2B Wholesale Distribution Partner",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Choosing a wholesale distribution partner is one of the more consequential decisions a brand makes. Done right, it opens up buyer relationships and retail channels that would take years to build independently. Done wrong, it creates pricing problems, channel conflicts, and brand damage that can take even longer to fix.
        </p>
        <p>
          We've seen both outcomes. Here's what we think actually matters when evaluating a potential B2B distribution partner.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Do they have real buyer relationships?</h2>
        <p>
          A distributor's value is fundamentally tied to who they can sell to. Ask specifically about their buyer network — what types of retailers, what channels, what geographies. A good distributor can name accounts and describe the relationships. Vague answers about "broad retail coverage" aren't a good sign.
        </p>
        <p>
          Also ask about buyer concentration. If 80% of their volume goes through two accounts, that's a risk to understand. Losing one of those accounts means a significant drop in your distribution overnight.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Are they actually authorized and compliant?</h2>
        <p>
          An authorized distributor has a direct, documented purchasing relationship with you. They're not buying your product through liquidation channels, secondary markets, or unauthorized sources. Ask how they source inventory and what their compliance posture looks like. If the answer is vague, that's a red flag.
        </p>
        <p>
          This matters for more than just principle — unauthorized product in your distribution channel creates legal exposure, pricing chaos, and the exact brand damage you're trying to avoid by working with a distributor in the first place.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Will they respect your MAP policy?</h2>
        <p>
          A distribution partner who undercuts your MAP — or who sells to buyers who do — sends a signal to every other account in your channel. Ask upfront how they handle MAP compliance, what their track record looks like, and how they flow your brand policies to their downstream buyers. Treat evasiveness as a dealbreaker.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What does reporting look like?</h2>
        <p>
          You should be able to see what's happening with your brand in the channel without having to chase anyone down. A good distribution partner provides regular, clear reporting on sales volume, inventory levels, and account activity. Ask to see a sample report or talk through what data they share and on what cadence.
        </p>
        <p>
          Transparency isn't just a nice-to-have — it's how you catch problems early and make good decisions about inventory, pricing, and channel strategy.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Are the contract terms fair?</h2>
        <p>
          Read the agreement carefully. Pay close attention to exclusivity terms, termination clauses, and what happens to inventory if the partnership ends. Some distributors lock brands into arrangements that are very difficult to exit cleanly.
        </p>
        <p>
          A partner who's confident in what they deliver shouldn't need onerous terms to keep you. Clean, balanced contract terms are a good indicator of how the relationship will actually operate.
        </p>
      </div>
    ),
  },

  "multi-channel-distribution": {
    category: "Distribution Strategy",
    date: "January 30, 2026",
    readTime: "6 min read",
    title: "Multi-Channel Distribution: How to Reach More Buyers Without Losing Control",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Expanding your distribution reach is one of the most effective ways to grow wholesale volume — but it's also one of the fastest ways to create channel conflict if it's not done carefully. More buyers means more revenue potential, but it also means more complexity, more MAP enforcement challenges, and more opportunities for your brand positioning to drift.
        </p>
        <p>
          Here's how to think about scaling distribution across multiple channels without losing control of the things that matter most.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Define your channel strategy before you expand</h2>
        <p>
          Before adding new distribution channels, be explicit about what each channel is for and how they relate to each other. Which channels are your primary revenue drivers? Which are strategic for brand visibility? Which are secondary or opportunistic?
        </p>
        <p>
          Getting this clarity upfront makes it much easier to set appropriate pricing tiers, define account eligibility, and manage conflicts when they arise. Without it, you end up making channel decisions reactively and the policy gaps accumulate.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Pricing architecture is what holds multi-channel together</h2>
        <p>
          A well-designed wholesale pricing architecture — MSRP, MAP, distributor cost, key account pricing — is the backbone of a healthy multi-channel strategy. Every buyer in your channel needs to understand where they sit in that structure and what the rules are for their tier.
        </p>
        <p>
          The most common failure mode is inconsistent pricing across channels. One buyer gets a better price than another, word gets around, and suddenly everyone is asking for the exception. Building a consistent, defensible pricing structure from the start is far easier than trying to fix one after the fact.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Manage channel conflict proactively</h2>
        <p>
          Channel conflict — when different buyers compete against each other in the same market — is inevitable at a certain scale, but it can be managed. The keys are geographic segmentation, account type separation, and clear rules about where each channel can sell.
        </p>
        <p>
          If you have a regional distributor in the Pacific Northwest, they probably shouldn't be selling to the same accounts as your national distributor. Clear territory definitions and account ownership rules prevent the most common forms of conflict before they start.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Your distributors are part of your brand team</h2>
        <p>
          A common mistake is treating distributors as transactional — they buy product, that's the relationship. The brands that scale distribution well treat their key distributors as genuine channel partners: sharing sales data, co-developing market strategy, and giving them the tools and support to sell more effectively.
        </p>
        <p>
          Distributors who feel invested in a brand's success enforce MAP more consistently, develop new accounts more aggressively, and stick with the brand through the inevitable rough patches. That relationship quality is worth investing in.
        </p>
      </div>
    ),
  },

  "direct-vs-wholesale": {
    category: "Wholesale Operations",
    date: "January 15, 2026",
    readTime: "8 min read",
    title: "Direct vs. Wholesale Distribution: Choosing the Right Model for Your Brand",
    content: (
      <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Most brands don't start with a clean choice between direct and wholesale — they end up with some mix of both as they grow. But understanding the real tradeoffs between the two models is important if you're making deliberate decisions about how to build your distribution strategy.
        </p>
        <p>
          Here's a realistic look at both approaches and how to think about which fits your brand at its current stage.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What selling direct actually gives you</h2>
        <p>
          Selling direct — whether through your own website, direct-to-retail, or your own sales team — gives you maximum control. You set the price, you own the customer relationship, and you capture the full retail margin rather than sharing it with a distribution layer.
        </p>
        <p>
          The tradeoff is that everything costs more. You're building and funding your own sales operation, logistics infrastructure, and customer service capability. For a brand without established volume or capital, that overhead is a real burden. And without existing buyer relationships, building a meaningful direct retail channel takes time — often years.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">What wholesale distribution actually gives you</h2>
        <p>
          A good wholesale distribution partner brings buyer relationships you don't have and operational infrastructure you'd otherwise have to build. They can open doors to retail accounts that would take a direct sales team years to develop, and they handle the complexity of fulfilling B2B orders at scale.
        </p>
        <p>
          The tradeoff is margin — you're selling at wholesale cost rather than retail price, which means giving up a portion of the revenue per unit. You also give up some control over how your brand is presented and at what price, which is why MAP policies and distribution agreements matter so much.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">The unit economics comparison</h2>
        <p>
          The right way to compare the two models is on net margin after all costs — not gross margin on the transaction. Direct sales look better on a per-unit basis until you account for the cost of the sales team, marketing spend, logistics, and customer service required to drive them.
        </p>
        <p>
          Wholesale looks worse on a per-unit basis until you account for the volume it enables and the fixed costs you're not carrying. A brand doing $2M through wholesale at 40% gross margin may be generating more total profit than one doing $1.5M direct at 60% gross margin, once the overhead of the direct operation is factored in.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Most brands end up using both</h2>
        <p>
          The cleanest answer is usually not either/or. Direct-to-consumer captures full margin on a portion of volume and gives you a direct customer relationship for brand building. Wholesale distribution scales volume efficiently by leveraging buyer networks you don't have to build yourself.
        </p>
        <p>
          The key is being deliberate about which channels you prioritize and making sure your pricing architecture keeps them from competing against each other. Brands that let their wholesale and direct channels undercut each other end up with the worst of both worlds — channel conflict without the benefits of either model working cleanly.
        </p>
        <h2 className="text-lg font-semibold text-foreground pt-2">Our general take</h2>
        <p>
          For most consumer product brands trying to scale, wholesale distribution is the faster path to meaningful volume. Direct sales work well as a complement — particularly for building brand equity and capturing higher-margin revenue on a portion of your business — but building a direct channel first and wholesale second is often the harder route. The brands that grow fastest usually find a distribution partner early and use that scale to fund the direct operation over time.
        </p>
      </div>
    ),
  },
};

const categoryColors: Record<string, string> = {
  "Distribution Strategy": "bg-blue-50 text-blue-600",
  "Wholesale Operations": "bg-green-50 text-green-600",
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
              Request Partnership Review
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
