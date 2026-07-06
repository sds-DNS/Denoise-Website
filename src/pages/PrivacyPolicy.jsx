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

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-2">
            DENOISE SYSTEMS FZ LLC ("DENOISE", "we", "our", or "us") is committed to protecting
            your privacy and handling your personal information responsibly.
          </p>
          <p className="mt-4 text-base leading-8 text-muted-2">
            This Privacy Policy explains how we collect, use, store, and protect information when
            you visit our website or engage with our consulting and talent acquisition services.
          </p>

          <div className="mt-10 border-t border-ink/8" />

          <Section number="1" title="Information We Collect">
            <p>
              Depending on how you interact with us, we may collect the following information:
            </p>
            <div>
              <p className="font-semibold text-ink">Information you provide directly</p>
              <List
                items={[
                  "Full name",
                  "Work email address",
                  "Company name",
                  "Job title",
                  "Company size",
                  "Service or package selected",
                  "Information you submit through consultation forms",
                  "Information provided when contacting us by email or LinkedIn",
                ]}
              />
            </div>
            <div>
              <p className="font-semibold text-ink">Recruitment Information</p>
              <p>
                When using our Talent Acquisition services, we may also process:
              </p>
              <List
                items={[
                  "Candidate resumes (CVs)",
                  "Employment history",
                  "Skills and qualifications",
                  "Interview notes",
                  "Hiring preferences",
                  "Recruitment communications",
                ]}
              />
            </div>
          </Section>

          <Section number="2" title="How We Use Your Information">
            <p>We use your information to:</p>
            <List
              items={[
                "Respond to enquiries",
                "Schedule consultations",
                "Deliver our consulting services",
                "Deliver recruitment and talent acquisition services",
                "Improve our services",
                "Communicate with you regarding projects or enquiries",
                "Send important business-related updates",
              ]}
            />
            <p className="font-semibold text-ink">We do not sell your personal information.</p>
          </Section>

          <Section number="3" title="Recruitment Services">
            <p>
              Where DENOISE provides recruitment or talent acquisition services, candidate
              information is processed solely for recruitment purposes and shared only with relevant
              hiring organizations involved in the recruitment process.
            </p>
            <p>
              Candidate information is treated confidentially and only retained for as long as
              reasonably necessary for recruitment activities or as required by applicable law.
            </p>
          </Section>

          <Section number="4" title="Cookies">
            <p>
              Our website may use cookies or similar technologies to improve website performance,
              understand visitor behaviour, and enhance user experience.
            </p>
            <p>You may disable cookies through your browser settings if you prefer.</p>
          </Section>

          <Section number="5" title="Data Storage and Security">
            <p>
              We take reasonable technical and organizational measures to protect personal
              information from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p>
              While we implement appropriate safeguards, no method of internet transmission or
              electronic storage can be guaranteed to be completely secure.
            </p>
          </Section>

          <Section number="6" title="Third-Party Services">
            <p>
              We may use trusted third-party services to operate our business, including:
            </p>
            <List
              items={[
                "Website hosting providers",
                "Cloud storage providers",
                "Email services",
                "Scheduling platforms",
                "CRM systems",
                "Recruitment platforms",
                "Analytics services",
              ]}
            />
            <p>
              These providers may process information on our behalf where necessary to provide
              their services.
            </p>
          </Section>

          <Section number="7" title="Data Retention">
            <p>We retain personal information only for as long as necessary to:</p>
            <List
              items={[
                "Provide requested services",
                "Complete recruitment engagements",
                "Meet legal, accounting, or regulatory obligations",
                "Resolve disputes",
                "Enforce our agreements",
              ]}
            />
            <p>
              Information that is no longer required is securely deleted where reasonably
              practicable.
            </p>
          </Section>

          <Section number="8" title="Your Rights">
            <p>Subject to applicable law, you may request to:</p>
            <List
              items={[
                "Access your personal information",
                "Correct inaccurate information",
                "Request deletion of your information",
                "Withdraw consent where applicable",
                "Request information about how your data is processed",
              ]}
            />
            <p>
              To exercise these rights, please contact us using the details below.
            </p>
          </Section>

          <Section number="9" title="External Links">
            <p>
              Our website may contain links to third-party websites, including LinkedIn and
              WhatsApp.
            </p>
            <p>We are not responsible for the privacy practices of external websites.</p>
            <p>
              We encourage you to review the privacy policies of those websites separately.
            </p>
          </Section>

          <Section number="10" title="Changes to this Policy">
            <p>We may update this Privacy Policy from time to time.</p>
            <p>
              The updated version will always be published on this page together with the latest
              revision date.
            </p>
          </Section>

          <Section number="11" title="Contact Us">
            <p>
              If you have any questions regarding this Privacy Policy or how we handle personal
              information, please contact us.
            </p>
            <div className="rounded-2xl border border-ink/8 bg-white p-6">
              <p className="font-black text-ink">DENOISE SYSTEMS FZ LLC</p>
              <div className="mt-3 space-y-1 text-sm text-muted-2">
                <p>314 Taraf 1, JVC</p>
                <p>Dubai, United Arab Emirates</p>
                <a
                  href="mailto:consult@denoisesystems.com"
                  className="block transition hover:text-brand"
                >
                  consult@denoisesystems.com
                </a>
                <a href="tel:+971585941007" className="block transition hover:text-brand">
                  +971 58 594 1007
                </a>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
