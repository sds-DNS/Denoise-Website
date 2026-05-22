import { useState } from "react";
import { stripSelectedPackagePrefix, runDenoiseSelfTests } from "./lib/text";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import WhatWeDo from "./components/sections/WhatWeDo";
import HowWeWork from "./components/sections/HowWeWork";
import Systems from "./components/sections/Systems";
import Pricing from "./components/sections/Pricing";
import WhyDenoise from "./components/sections/WhyDenoise";
import Proof from "./components/sections/Proof";
import Insights from "./components/sections/Insights";
import Consultation from "./components/sections/Consultation";

if (typeof window !== "undefined") {
  runDenoiseSelfTests();
}

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [challengeText, setChallengeText] = useState("");

  const handlePackageSelect = (packageName) => {
    const cleanExistingText = stripSelectedPackagePrefix(challengeText);
    const defaultChallengeText = "Current operational challenge: ";
    const nextChallengeText = cleanExistingText || defaultChallengeText;

    setChallengeText(`Selected package: ${packageName}\n\n${nextChallengeText}`);
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Placeholder for the real CRM/email backend call.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-cream text-ink selection:bg-brand selection:text-white">
      <Header />
      <Hero />
      <Problem />
      <WhatWeDo />
      <HowWeWork />
      <Systems />
      <Pricing onPackageSelect={handlePackageSelect} />
      <WhyDenoise />
      <Proof />
      <Insights />
      <Consultation
        submitted={submitted}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
        challengeText={challengeText}
        onChallengeChange={(event) => setChallengeText(event.target.value)}
      />
      <Footer />
    </main>
  );
}

export default App;
