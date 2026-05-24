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

const emptyForm = {
  name: "",
  email: "",
  position: "",
  company: "",
  companySize: "",
  challenge: "",
};

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState(emptyForm);

  const updateField = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handlePackageSelect = (packageName) => {
    const cleanExistingText = stripSelectedPackagePrefix(form.challenge);
    const defaultChallengeText = "Current operational challenge: ";
    const nextChallengeText = cleanExistingText || defaultChallengeText;

    setForm((prev) => ({
      ...prev,
      challenge: `Selected package: ${packageName}\n\n${nextChallengeText}`,
    }));
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setForm(emptyForm);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
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
        errorMessage={errorMessage}
        onSubmit={handleSubmit}
        form={form}
        onFieldChange={updateField}
      />
      <Footer />
    </main>
  );
}

export default App;
