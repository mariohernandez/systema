import { createButton } from './button.js';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  argTypes: {
    label: {
      control: 'text',
      description: 'Visible button text',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', '', 'lg'],
      labels: { '': 'md (default)' },
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to full container width',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
    },
  },
};

/** Primary — the default call-to-action style. */
export const Primary = {
  args: {
    label: 'Get Started',
    variant: 'primary',
  },
};

/** Secondary — lower visual weight, same action hierarchy. */
export const Secondary = {
  args: {
    label: 'Learn More',
    variant: 'secondary',
  },
};

/** Outline — bordered with no fill. */
export const Outline = {
  args: {
    label: 'View Details',
    variant: 'outline',
  },
};

/** Ghost — minimal, text-only style. */
export const Ghost = {
  args: {
    label: 'Cancel',
    variant: 'ghost',
  },
};

/** Danger — destructive actions. */
export const Danger = {
  args: {
    label: 'Delete',
    variant: 'danger',
  },
};

/** All sizes side-by-side. */
export const Sizes = {
  render: () => `
    <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
      ${createButton({ label: 'Small', variant: 'primary', size: 'sm' })}
      ${createButton({ label: 'Medium', variant: 'primary', size: '' })}
      ${createButton({ label: 'Large', variant: 'primary', size: 'lg' })}
    </div>
  `,
};

/** Disabled state across variants. */
export const Disabled = {
  render: () => `
    <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
      ${createButton({ label: 'Primary', variant: 'primary', disabled: true })}
      ${createButton({ label: 'Secondary', variant: 'secondary', disabled: true })}
      ${createButton({ label: 'Outline', variant: 'outline', disabled: true })}
      ${createButton({ label: 'Ghost', variant: 'ghost', disabled: true })}
      ${createButton({ label: 'Danger', variant: 'danger', disabled: true })}
    </div>
  `,
};

/** Full-width button. */
export const FullWidth = {
  args: {
    label: 'Sign Up Now',
    variant: 'primary',
    fullWidth: true,
  },
};

/** All variants at a glance. */
export const AllVariants = {
  render: () => `
    <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
      ${createButton({ label: 'Primary', variant: 'primary' })}
      ${createButton({ label: 'Secondary', variant: 'secondary' })}
      ${createButton({ label: 'Outline', variant: 'outline' })}
      ${createButton({ label: 'Ghost', variant: 'ghost' })}
      ${createButton({ label: 'Danger', variant: 'danger' })}
    </div>
  `,
};

/** Button group — adjacent buttons sharing a visual container. */
export const Group = {
  render: () => `
    <div class="btn-group">
      ${createButton({ label: 'Left', variant: 'outline' })}
      ${createButton({ label: 'Middle', variant: 'outline' })}
      ${createButton({ label: 'Right', variant: 'outline' })}
    </div>
  `,
};
