// Animation variants for Framer Motion
// Purposeful motion with unified easing curves

export const easing = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
};

export const duration = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
};

// Page-level reveal
export const pageReveal = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: duration.slow, ease: easing.out },
  },
};

// Text reveal from bottom (for hero lines)
export const textReveal = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: duration.slow, ease: easing.out },
  },
};

// Container for staggered children
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Fade up - for general content
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easing.out },
  },
};

// Fade in - simple opacity
export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.out },
  },
};

// Clip path reveal - for dramatic text reveals
export const clipReveal = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  animate: {
    clipPath: 'inset(0 0 0 0)',
    transition: { duration: duration.slower, ease: easing.out },
  },
};

// Scale reveal - for cards entering view
export const scaleReveal = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easing.out },
  },
};

// Slide from left
export const slideFromLeft = {
  initial: { x: -30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.out },
  },
};

// Slide from right
export const slideFromRight = {
  initial: { x: 30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.out },
  },
};

// Hover variants for interactive cards
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 4px 12px rgba(26, 26, 24, 0.06)',
  },
  hover: {
    y: -2,
    boxShadow: '0 12px 32px rgba(26, 26, 24, 0.08)',
    transition: { duration: duration.fast, ease: easing.out },
  },
};

// Link underline expand
export const linkUnderline = {
  rest: { width: 0 },
  hover: {
    width: '100%',
    transition: { duration: duration.normal, ease: easing.out },
  },
};

// Nav item hover
export const navItemHover = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: { duration: duration.fast, ease: easing.out },
  },
};

// Accordion expand/collapse
export const accordionContent = {
  initial: { height: 0, opacity: 0 },
  animate: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: duration.normal, ease: easing.out },
      opacity: { duration: duration.fast, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: duration.normal, ease: easing.inOut },
      opacity: { duration: duration.instant },
    },
  },
};

// Viewport animation trigger settings
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: '-50px',
};
