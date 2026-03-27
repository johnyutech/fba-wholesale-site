import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

export default function Terms() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 md:px-0">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <img src={ATD_LOGO} alt="Apex Trade Distribution" className="w-8 h-8" />
            <span className="font-semibold text-foreground">Apex Trade Distribution</span>
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: March 26, 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-foreground">

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing our website or engaging with Apex Trade Distribution ("Company," "we," "us," or "our") in any wholesale partnership capacity, you ("Brand," "Partner," or "you") agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services or submit any inquiry. These terms apply to all visitors, partners, and brands who engage with our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Nature of Services</h2>
              <p className="mb-2">
                Apex Trade Distribution is an authorized wholesale distributor that partners with consumer brands to expand their presence on Amazon's marketplace through the Fulfillment by Amazon (FBA) program. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Wholesale purchasing of brand inventory at agreed-upon pricing</li>
                <li>Storage, fulfillment, and logistics management via Amazon FBA</li>
                <li>Listing optimization and marketplace management on Amazon</li>
                <li>Brand protection and authorized seller compliance</li>
                <li>Sales reporting and performance analytics</li>
              </ul>
              <p className="mt-2">
                All specific terms related to pricing, purchase volumes, exclusivity, and performance expectations are governed by individual wholesale agreements executed separately between Apex Trade Distribution and each brand partner.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Authorized Reseller Status</h2>
              <p>
                Apex Trade Distribution operates exclusively as an authorized reseller. We purchase inventory directly from brands or their authorized distributors and resell through legitimate wholesale channels. We do not engage in unauthorized, gray market, or counterfeit product sales. All products sold through our network are genuine, unaltered, and sourced through compliant supply chains in accordance with Amazon's policies and applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Amazon Marketplace Compliance</h2>
              <p className="mb-2">Both parties agree to operate in full compliance with Amazon's policies, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Amazon's Seller Code of Conduct</li>
                <li>Amazon Brand Registry requirements</li>
                <li>Amazon's Anti-Counterfeiting Policy</li>
                <li>Amazon's Condition Guidelines for product listings</li>
                <li>MAP (Minimum Advertised Price) policies where applicable</li>
              </ul>
              <p className="mt-2">
                Violation of Amazon policies by either party that results in account suspension, listing removal, or financial penalty shall be addressed through the individual partnership agreement between the parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
              <p>
                Brand partners retain full ownership of their trademarks, logos, product images, and all associated intellectual property. Apex Trade Distribution is granted a limited, non-exclusive license to use brand assets solely for the purpose of creating and managing product listings on Amazon and other approved sales channels. We will not sublicense, modify, or use brand assets outside the scope of the partnership without prior written consent.
              </p>
              <p className="mt-2">
                All content on the Apex Trade Distribution website, including but not limited to text, graphics, logos, and design elements, is the property of Apex Trade Distribution and may not be reproduced without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential all non-public information exchanged during the course of the partnership, including pricing terms, purchase volumes, sales data, and business strategies. This obligation survives the termination of any partnership agreement and continues for a period of two (2) years following the end of the business relationship, unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Payment and Pricing</h2>
              <p>
                Wholesale pricing, payment terms, and invoicing schedules are agreed upon in individual purchase orders or wholesale agreements. All transactions are conducted in U.S. dollars unless otherwise specified. Apex Trade Distribution reserves the right to adjust purchasing volumes based on market conditions, inventory performance, and platform metrics. Late payments may result in suspension of purchases or termination of the partnership.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Apex Trade Distribution shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, including but not limited to loss of revenue, loss of profits, loss of business, or loss of data. Our total liability to any brand partner for any claim shall not exceed the total amount paid by Apex Trade Distribution for inventory purchases in the ninety (90) days preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Disclaimer of Warranties</h2>
              <p>
                Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding specific sales volumes, revenue outcomes, or marketplace performance results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Termination</h2>
              <p>
                Either party may terminate the wholesale partnership with written notice as specified in the individual partnership agreement. Apex Trade Distribution reserves the right to terminate access to its services immediately if a brand partner violates these Terms of Service, engages in fraudulent activity, or breaches Amazon's marketplace policies in a manner that creates risk for our business operations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the United States and the state in which Apex Trade Distribution is incorporated, without regard to its conflict of law provisions. Any disputes arising under these terms shall first be submitted to good-faith negotiation. If unresolved within thirty (30) days, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. We will notify existing partners of material changes via email. Your continued engagement with our services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
              <p>For questions regarding these Terms of Service, please contact us at:</p>
              <div className="mt-2 space-y-1">
                <p><strong>Apex Trade Distribution</strong></p>
                <p>Email: <a href="mailto:john.yu@apexdistribution.co" className="text-primary underline">john.yu@apexdistribution.co</a></p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
