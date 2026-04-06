import { useState, useRef } from "react";
import { useLocation } from "wouter";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Loader2, Mail } from "lucide-react";

const ATD_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663451688190/FU7Ur5az9t2KrqkVbzouk3/atd-logo-geometric-DeNTt8WipdkNfx6Kipa6Xz.webp";

const nextSteps = [
  {
    number: "1",
    heading: "We review your submission",
    body: "We look at your product category, volume, and distribution setup to assess fit.",
  },
  {
    number: "2",
    heading: "We schedule a call",
    body: "If there's potential, we'll reach out to schedule an introductory call — typically within 2 business days.",
  },
  {
    number: "3",
    heading: "Go/no-go decision",
    body: "After the call, we'll give you a direct answer on whether we want to move forward and what that looks like.",
  },
];

export default function Contact() {
  const [, navigate] = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg(
        "Email service is not configured yet. Please contact us directly at sales@apexdistribution.co"
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again or email us directly at sales@apexdistribution.co");
      setStatus("error");
    }
  }

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
        <div className="max-w-5xl mx-auto">
          {status === "success" ? (
            <div className="text-center py-16 max-w-xl mx-auto">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Submission Received</h2>
              <p className="text-muted-foreground mb-8">
                We'll review your information and follow up within 2 business days if there's a potential fit.
              </p>
              <Button className="btn-primary" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-5 gap-12">

              {/* Form — left, wider */}
              <div className="md:col-span-3">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-2">Request Partnership Review</h1>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll follow up within 2 business days to discuss whether there's a fit.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="to_email" value="sales@apexdistribution.co" />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="first_name" className="text-sm font-medium">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        required
                        placeholder="John"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="last_name" className="text-sm font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="user_email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="john@yourbrand.com"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="business_name" className="text-sm font-medium">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="business_name"
                      name="business_name"
                      type="text"
                      required
                      placeholder="Your Brand LLC"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="business_info" className="text-sm font-medium">
                      Business Details
                    </label>
                    <input
                      id="business_info"
                      name="business_info"
                      type="text"
                      placeholder="Industry, annual revenue, product categories…"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="text-sm font-medium">
                      What are you looking for? <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-muted-foreground">Include your product category, SKU count, and current distribution setup.</p>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="e.g. We make a line of 8 health supplement SKUs currently sold DTC. Looking for a wholesale partner to expand into retail channels…"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full py-3 text-base font-semibold"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Submit for Review"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 1–2 business days.
                  </p>
                </form>
              </div>

              {/* Info panel — right */}
              <div className="md:col-span-2 space-y-8">

                {/* What happens next */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">What Happens Next</h2>
                  <div className="space-y-5">
                    {nextSteps.map((step) => (
                      <div key={step.number} className="flex gap-4">
                        <div className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {step.number}
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-0.5">{step.heading}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Who we work with */}
                <div className="rounded-xl border border-border p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">Who We Work With</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We work with established brands that have retail-ready products, valid UPC/EAN barcodes, and the ability to fulfill consistent wholesale purchase orders. We evaluate every partnership on unit economics — if the numbers don't work for both sides, we'll tell you directly.
                  </p>
                </div>

                {/* Direct contact */}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">Prefer Email?</h2>
                  <a
                    href="mailto:sales@apexdistribution.co"
                    className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    sales@apexdistribution.co
                  </a>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
