export function stripSelectedPackagePrefix(text) {
  const prefix = "Selected package: ";

  if (!text.startsWith(prefix)) {
    return text;
  }

  const firstDoubleNewline = text.indexOf("\n\n");

  if (firstDoubleNewline === -1) {
    return "";
  }

  return text.slice(firstDoubleNewline + 2);
}

export function runDenoiseSelfTests() {
  const tests = [
    {
      name: "keeps text without selected package prefix",
      input: "Current operational challenge: We need better visibility.",
      expected: "Current operational challenge: We need better visibility.",
    },
    {
      name: "removes selected package prefix when body exists",
      input: "Selected package: Entry Engagement\n\nCurrent operational challenge: We need better visibility.",
      expected: "Current operational challenge: We need better visibility.",
    },
    {
      name: "removes selected package prefix when body is empty",
      input: "Selected package: Scale Engagement\n\n",
      expected: "",
    },
  ];

  tests.forEach((test) => {
    const actual = stripSelectedPackagePrefix(test.input);
    console.assert(actual === test.expected, `DENOISE self-test failed: ${test.name}`);
  });
}
