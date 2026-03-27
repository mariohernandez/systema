import { createCard } from './card.js';
import { createButton } from '../button/button.js';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: (args) => createCard(args),
  argTypes: {
    title: { control: 'text', description: 'Card title' },
    subtitle: { control: 'text', description: 'Card subtitle / meta' },
    body: { control: 'text', description: 'Body text or HTML' },
    footer: { control: 'text', description: 'Footer HTML' },
    imageSrc: { control: 'text', description: 'URL for the media image' },
    imageAlt: { control: 'text', description: 'Alt text for the media image' },
    variant: {
      control: { type: 'select' },
      options: ['', 'bordered', 'flat'],
      labels: { '': 'default (shadowed)' },
      description: 'Visual variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', '', 'lg'],
      labels: { '': 'md (default)' },
      description: 'Card size',
    },
    interactive: {
      control: 'boolean',
      description: 'Adds hover lift / pointer cursor',
    },
  },
};

const PLACEHOLDER_IMAGE = 'https://picsum.photos/seed/systema/640/360';

/** Default — shadowed card with header and body. */
export const Default = {
  args: {
    title: 'Getting Started',
    subtitle: 'Quick start guide',
    body: 'Systema is a platform-agnostic design system built with modern CSS techniques, including custom properties, :is(), :where(), :not(), and :has().',
    footer: createButton({ label: 'Read the docs', variant: 'primary', size: 'sm' }),
  },
};

/** Bordered — no shadow, explicit border. */
export const Bordered = {
  args: {
    title: 'Bordered Card',
    subtitle: 'No shadow, explicit border',
    body: 'Use the bordered variant when you want to clearly delineate a surface without elevation.',
    variant: 'bordered',
  },
};

/** Flat — blends into the background. */
export const Flat = {
  args: {
    title: 'Flat Card',
    body: 'The flat variant uses a subtle background, perfect for secondary content or inside another surface.',
    variant: 'flat',
  },
};

/** Interactive — hover lift and pointer cursor. */
export const Interactive = {
  args: {
    title: 'Interactive Card',
    subtitle: 'Hover or focus to see the lift effect',
    body: 'Add `card--interactive` to make a card feel clickable. Combine with a wrapping anchor for full accessibility.',
    interactive: true,
    imageSrc: PLACEHOLDER_IMAGE,
    imageAlt: 'Abstract landscape',
  },
};

/** With media image. */
export const WithMedia = {
  args: {
    title: 'Scenic Destination',
    subtitle: 'Featured',
    body: 'Discover breathtaking landscapes and hidden gems around the world with our curated travel guides.',
    footer: `
      ${createButton({ label: 'Explore', variant: 'primary', size: 'sm' })}
      ${createButton({ label: 'Save', variant: 'ghost', size: 'sm' })}
    `,
    imageSrc: PLACEHOLDER_IMAGE,
    imageAlt: 'Scenic landscape',
    interactive: true,
  },
};

/** Card grid — auto-fill responsive layout. */
export const Grid = {
  render: () => `
    <div class="card-grid">
      ${createCard({
        title: 'Design Tokens',
        body: 'A structured set of CSS custom properties for color, spacing, typography, and motion.',
        footer: createButton({ label: 'View tokens', variant: 'outline', size: 'sm' }),
        variant: 'bordered',
      })}
      ${createCard({
        title: 'Components',
        body: 'Ready-to-use UI building blocks — buttons, cards, headings, badges, and more.',
        footer: createButton({ label: 'Browse components', variant: 'outline', size: 'sm' }),
        variant: 'bordered',
      })}
      ${createCard({
        title: 'Theming',
        body: 'Light and dark themes out of the box, powered by CSS custom properties and data attributes.',
        footer: createButton({ label: 'Learn more', variant: 'outline', size: 'sm' }),
        variant: 'bordered',
      })}
    </div>
  `,
};

/** Size comparison. */
export const Sizes = {
  render: () => `
    <div style="display:flex; flex-direction:column; gap:1.5rem; max-width:36rem;">
      ${createCard({ title: 'Small Card', body: 'Compact card for dense layouts.', size: 'sm', variant: 'bordered' })}
      ${createCard({ title: 'Default Card', body: 'The standard card size.', variant: 'bordered' })}
      ${createCard({ title: 'Large Card', body: 'Spacious card for featured content.', size: 'lg', variant: 'bordered' })}
    </div>
  `,
};
