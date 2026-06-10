import { useState } from "react";
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
import { validateConsultationForm } from "./lib/validation";

const emptyForm = {
  name: "",
  email: "",
  position: "",
  company: "",
  companySize: "",
  selectedPackage: "",
  challenge: "",
};

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [form, setForm] = useState(emptyForm);

  const updateField = (field) => (event) => {
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear an existing error for this field as soon as the user edits it.
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const { [field]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const handlePackageSelect = (packageName) => {
    setForm((prev) => ({ ...prev, selectedPackage: packageName }));
    setFieldErrors((prev) => {
      const { selectedPackage: _r, ...rest } = prev;
      return rest;
    });
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    // Client-side validation first so users get instant feedback per field.
    const localErrors = validateConsultationForm(form);
    if (Object.keys(localErrors).length > 0) {
      setFieldErrors(localErrors);
      setErrorMessage("Please fix the highlighted fields.");
      return;
    }

    // isSubmitting drives the loading spinner + disabled state on the
    // submit button inside <Consultation /> (see Consultation.jsx).
    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
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
        fieldErrors={fieldErrors}
        onSubmit={handleSubmit}
        form={form}
        onFieldChange={updateField}
      />
      <Footer />
    </main>
  );
}

export default App;
