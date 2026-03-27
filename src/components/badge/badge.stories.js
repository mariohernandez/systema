import { createBadge } from './badge.js';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  render: (args) => createBadge(args),
  argTypes: {
    label: { control: 'text', description: 'Badge text label' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Color variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', '', 'lg'],
      labels: { '': 'md (default)' },
      description: 'Badge size',
    },
    pill: {
      control: 'boolean',
      description: 'Fully rounded (pill) shape',
    },
    outline: {
      control: 'boolean',
      description: 'Outline style (no background fill)',
    },
  },
};

/** Default badge. */
export const Default = {
  args: { label: 'New', variant: 'default' },
};

/** Primary. */
export const Primary = {
  args: { label: 'Featured', variant: 'primary' },
};

/** Success. */
export const Success = {
  args: { label: 'Active', variant: 'success' },
};

/** Warning. */
export const Warning = {
  args: { label: 'Pending', variant: 'warning' },
};

/** Error. */
export const Error = {
  args: { label: 'Failed', variant: 'error' },
};

/** Info. */
export const Info = {
  args: { label: 'Beta', variant: 'info' },
};

/** Pill shape. */
export const Pill = {
  args: { label: 'Pill Badge', variant: 'primary', pill: true },
};

/** Outline style. */
export const Outline = {
  args: { label: 'Outline', variant: 'primary', outline: true },
};

/** All variants. */
export const AllVariants = {
  render: () => `
    <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
      ${createBadge({ label: 'Default', variant: 'default' })}
      ${createBadge({ label: 'Primary', variant: 'primary' })}
      ${createBadge({ label: 'Success', variant: 'success' })}
      ${createBadge({ label: 'Warning', variant: 'warning' })}
      ${createBadge({ label: 'Error', variant: 'error' })}
      ${createBadge({ label: 'Info', variant: 'info' })}
    </div>
  `,
};

/** All pill variants. */
export const AllPillVariants = {
  render: () => `
    <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
      ${createBadge({ label: 'Default', variant: 'default', pill: true })}
      ${createBadge({ label: 'Primary', variant: 'primary', pill: true })}
      ${createBadge({ label: 'Success', variant: 'success', pill: true })}
      ${createBadge({ label: 'Warning', variant: 'warning', pill: true })}
      ${createBadge({ label: 'Error', variant: 'error', pill: true })}
      ${createBadge({ label: 'Info', variant: 'info', pill: true })}
    </div>
  `,
};

/** All outline variants. */
export const AllOutlineVariants = {
  render: () => `
    <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
      ${createBadge({ label: 'Default', variant: 'default', outline: true })}
      ${createBadge({ label: 'Primary', variant: 'primary', outline: true })}
      ${createBadge({ label: 'Success', variant: 'success', outline: true })}
      ${createBadge({ label: 'Warning', variant: 'warning', outline: true })}
      ${createBadge({ label: 'Error', variant: 'error', outline: true })}
      ${createBadge({ label: 'Info', variant: 'info', outline: true })}
    </div>
  `,
};

/** Sizes. */
export const Sizes = {
  render: () => `
    <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
      ${createBadge({ label: 'Small', variant: 'primary', size: 'sm' })}
      ${createBadge({ label: 'Medium', variant: 'primary', size: '' })}
      ${createBadge({ label: 'Large', variant: 'primary', size: 'lg' })}
    </div>
  `,
};
