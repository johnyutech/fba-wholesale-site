import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

export default function Privacy() {
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: March 26, 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-foreground">

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p>
                Apex Trade Distribution ("Company," "we," "us," or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an inquiry through our contact form. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
              <p className="mb-2">We collect information that you voluntarily provide when you fill out our partnership inquiry form, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>First and last name</li>
                <li>Business email address</li>
                <li>Phone number</li>
                <li>Business name and industry details</li>
                <li>Any message or information you choose to submit</li>
              </ul>
              <p className="mt-2">
                We do not automatically collect cookies, tracking data, or analytics beyond standard web server logs unless explicitly disclosed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information you provide solely for legitimate business purposes, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responding to your wholesale partnership inquiry</li>
                <li>Evaluating brand fit for our B2B wholesale distribution network</li>
                <li>Communicating about potential or existing business relationships</li>
                <li>Complying with legal obligations</li>
              </ul>
              <p className="mt-2">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
              <p>
                We use EmailJS to process and transmit contact form submissions. EmailJS operates as a data processor on our behalf and is subject to its own privacy policy. Form data is transmitted securely via their platform solely to deliver your message to our team. We do not share your data with any other third-party services except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. B2B Wholesale Distribution Compliance</h2>
              <p>
                As an authorized B2B wholesale distributor, we adhere to applicable trade regulations, brand distribution policies, and anti-counterfeiting requirements. Any brand or product information shared with us is treated as confidential and used solely for the purpose of evaluating and executing wholesale distribution agreements. We do not disclose brand-specific terms, pricing, or proprietary information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Data Retention</h2>
              <p>
                We retain your contact and business information for as long as necessary to fulfill the purpose for which it was collected, maintain our business records, and comply with applicable legal requirements. If you wish to have your information deleted, please contact us and we will process your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Data Security</h2>
              <p>
                We implement commercially reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Your Rights</h2>
              <p className="mb-2">Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Opt-out:</strong> Opt out of any future communications from us</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:sales@apexdistribution.co" className="text-primary underline">sales@apexdistribution.co</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Children's Privacy</h2>
              <p>
                Our website and services are intended for business use only and are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by updating the "Last updated" date at the top of this page. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
              <div className="mt-2 space-y-1">
                <p><strong>Apex Trade Distribution</strong></p>
                <p>Email: <a href="mailto:sales@apexdistribution.co" className="text-primary underline">sales@apexdistribution.co</a></p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
