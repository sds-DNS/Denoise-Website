export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Shared viewport config so animations replay every time a section
// scrolls back into view (once: false), not just on first reveal.
export const replayViewport = { once: false, margin: "-100px" };
