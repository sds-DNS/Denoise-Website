import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Section({ number, title, children }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-black tracking-[-0.02em] text-ink">
        {number}. {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-muted-2">{children}</div>
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="ml-5 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ContactBlock() {
  return (
    <div className="rounded-2xl border border-ink/8 bg-white p-6">
      <p className="font-black text-ink">DENOISE SYSTEMS FZ LLC</p>
      <div className="mt-3 space-y-1 text-sm text-muted-2">
        <p>Taraf 1, JVC</p>
        <p>Dubai, United Arab Emirates</p>
        <a href="mailto:consult@denoisesystems.com" className="block transition hover:text-brand">
          consult@denoisesystems.com
        </a>
        <a href="tel:+971585941007" className="block transition hover:text-brand">
          +971 58 594 1007
        </a>
      </div>
    </div>
  );
}

export default function TermsAndConditions() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="px-6 pt-32 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Last Updated: 29 June 2026
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-ink md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-2">
            Welcome to the DENOISE SYSTEMS FZ LLC website ("Website").
          </p>
          <p className="mt-4 text-base leading-8 text-muted-2">
            By accessing or using this Website, you agree to be bound by these Terms & Conditions.
            If you do not agree with these Terms, please discontinue use of the Website.
          </p>

          <div className="mt-10 border-t border-ink/8" />

          <Section number="1" title="About Us">
            <p>This Website is owned and operated by:</p>
            <ContactBlock />
          </Section>

          <Section number="2" title="Purpose of this Website">
            <p>
              This Website provides information about DENOISE SYSTEMS FZ LLC, our consulting
              services, talent acquisition services, knowledge resources, and methods of contacting
              our team.
            </p>
            <p>
              Nothing on this Website constitutes professional, legal, financial, accounting, tax,
              or employment advice.
            </p>
          </Section>

          <Section number="3" title="Website Content">
            <p>
              All content published on this Website, including but not limited to:
            </p>
            <List
              items={[
                "Text",
                "Graphics",
                "Logos",
                "Branding",
                "Images",
                "Documents",
                "Methodologies",
                "Service descriptions",
                "Website design",
              ]}
            />
            <p>
              is the intellectual property of DENOISE SYSTEMS FZ LLC unless otherwise stated.
            </p>
            <p>
              You may not reproduce, modify, distribute, or commercially use any material without
              prior written permission.
            </p>
          </Section>

          <Section number="4" title="Service Information">
            <p>
              Information describing our consulting or recruitment services is provided for general
              informational purposes only.
            </p>
            <p>
              Any proposal, quotation, pricing, scope of work, timeline, or deliverable will be
              confirmed separately through written communication or a formal service agreement.
            </p>
            <p>Nothing on this Website creates a contractual relationship.</p>
          </Section>

          <Section number="5" title="Consultation Requests">
            <p>
              Submitting an enquiry or consultation request through this Website does not create a
              client relationship.
            </p>
            <p>
              DENOISE reserves the right to accept or decline enquiries at its sole discretion.
            </p>
          </Section>

          <Section number="6" title="Talent Acquisition Services">
            <p>Where DENOISE provides recruitment or talent acquisition services:</p>
            <List
              items={[
                "Candidate recommendations are based on information reasonably available during the recruitment process.",
                "Hiring decisions remain solely the responsibility of the client.",
                "DENOISE cannot guarantee the future performance, conduct, or continued employment of any candidate.",
                "Specific recruitment terms, replacement policies, fees, and engagement conditions will be governed by separate written agreements.",
              ]}
            />
          </Section>

          <Section number="7" title="Knowledge Hub">
            <p>
              Articles, guides, operational insights, and educational material published within the
              Knowledge Hub are intended for informational and educational purposes only.
            </p>
            <p>
              While we strive for accuracy, DENOISE does not warrant that all content is complete,
              current, or suitable for every organization or circumstance.
            </p>
            <p>
              Organizations should seek professional advice before implementing significant
              operational or employment decisions.
            </p>
          </Section>

          <Section number="8" title="External Links">
            <p>
              This Website may contain links to external websites, including LinkedIn, WhatsApp,
              and other third-party platforms.
            </p>
            <p>
              DENOISE is not responsible for the content, availability, security, or privacy
              practices of external websites.
            </p>
            <p>Accessing third-party websites is entirely at your own risk.</p>
          </Section>

          <Section number="9" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, DENOISE SYSTEMS FZ LLC shall not
              be liable for any direct, indirect, incidental, consequential, special, or punitive
              damages arising from:
            </p>
            <List
              items={[
                "Use of this Website",
                "Inability to access this Website",
                "Reliance on Website content",
                "Errors or omissions",
                "Interruptions or technical failures",
                "Third-party services or external websites",
              ]}
            />
          </Section>

          <Section number="10" title="Website Availability">
            <p>We aim to keep this Website available at all times.</p>
            <p>
              However, we do not guarantee uninterrupted access and may suspend, modify, or
              discontinue any part of the Website without prior notice.
            </p>
          </Section>

          <Section number="11" title="Privacy">
            <p>Your use of this Website is also governed by our Privacy Policy.</p>
            <p>
              By using this Website, you acknowledge that you have read our{" "}
              <Link to="/privacy-policy" className="font-semibold text-brand hover:text-brand-dark">
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section number="12" title="Changes to these Terms">
            <p>DENOISE may revise these Terms & Conditions at any time.</p>
            <p>
              Updated versions will be published on this page together with the latest revision
              date.
            </p>
            <p>
              Continued use of the Website after updates constitutes acceptance of the revised
              Terms.
            </p>
          </Section>

          <Section number="13" title="Governing Law">
            <p>
              These Terms & Conditions shall be governed by and interpreted in accordance with the
              laws of the United Arab Emirates.
            </p>
            <p>
              Any disputes arising from these Terms or the use of this Website shall be subject to
              the jurisdiction of the competent courts of the United Arab Emirates, unless otherwise
              agreed in writing.
            </p>
          </Section>

          <Section number="14" title="Contact">
            <p>
              If you have any questions regarding these Terms & Conditions, please contact us.
            </p>
            <ContactBlock />
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
