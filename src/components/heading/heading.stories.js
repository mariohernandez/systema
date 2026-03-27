import { createHeading } from './heading.js';

export default {
  title: 'Components/Heading',
  tags: ['autodocs'],
  render: (args) => createHeading(args),
  argTypes: {
    eyebrow: { control: 'text', description: 'Small uppercase label above the heading' },
    title: { control: 'text', description: 'Main heading text' },
    sub: { control: 'text', description: 'Sub-heading or description text' },
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Semantic HTML heading level (h1–h6)',
    },
    displayLevel: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6],
      labels: { 0: 'none (use semantic size)' },
      description: 'Visual size override (independent of semantic level)',
    },
    align: {
      control: { type: 'select' },
      options: ['', 'center', 'end'],
      labels: { '': 'start (default)' },
      description: 'Text alignment',
    },
    divider: {
      control: 'boolean',
      description: 'Show decorative line below the heading',
    },
  },
};

/** Default heading. */
export const Default = {
  args: {
    title: 'Platform-Agnostic Design System',
    level: 2,
  },
};

/** With eyebrow label and sub-heading. */
export const WithEyebrowAndSub = {
  args: {
    eyebrow: 'Design System',
    title: 'Build Faster, Build Better',
    sub: 'Systema provides a cohesive set of design tokens, base styles, and reusable components built with modern vanilla CSS and JavaScript.',
    level: 2,
  },
};

/** Centered alignment. */
export const Centered = {
  args: {
    eyebrow: 'Our Mission',
    title: 'Consistent Interfaces at Scale',
    sub: 'Every token, component, and pattern is designed to work together seamlessly across products and platforms.',
    align: 'center',
    level: 2,
  },
};

/** With divider decoration. */
export const WithDivider = {
  args: {
    title: 'Core Principles',
    sub: 'Accessibility, performance, and design consistency guide every decision.',
    divider: true,
    level: 2,
  },
};

/** Display size override. */
export const DisplayOverride = {
  args: {
    eyebrow: 'Welcome to',
    title: 'Systema',
    sub: 'A front-end design system built on web standards.',
    level: 1,
    displayLevel: 1,
    divider: false,
  },
};

/** All heading levels. */
export const AllLevels = {
  render: () => `
    <div style="display:flex; flex-direction:column; gap:2rem;">
      ${createHeading({ title: 'Heading Level 1', level: 1 })}
      ${createHeading({ title: 'Heading Level 2', level: 2 })}
      ${createHeading({ title: 'Heading Level 3', level: 3 })}
      ${createHeading({ title: 'Heading Level 4', level: 4 })}
      ${createHeading({ title: 'Heading Level 5', level: 5 })}
      ${createHeading({ title: 'Heading Level 6', level: 6 })}
    </div>
  `,
};
