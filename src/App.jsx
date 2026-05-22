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
  const [challengeText, setChallengeText] = useState("");

  const handlePackageSelect = (packageName) => {
    const cleanExistingText = stripSelectedPackagePrefix(challengeText);
    const defaultChallengeText = "Current operational challenge: ";
    const nextChallengeText = cleanExistingText || defaultChallengeText;

    setChallengeText(`Selected package: ${packageName}\n\n${nextChallengeText}`);
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#FFFEFB] text-[#17131F] selection:bg-[#5B2EFF] selection:text-white">
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
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        challengeText={challengeText}
        onChallengeChange={(event) => setChallengeText(event.target.value)}
      />
      <Footer />
    </main>
  );
}

export default App;
