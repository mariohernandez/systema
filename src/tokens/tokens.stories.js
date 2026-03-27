/**
 * Design Tokens — Storybook documentation story
 *
 * Showcases all design token categories: colors, spacing, typography,
 * borders, shadows, and motion.
 */

export default {
  title: 'Design Tokens/Overview',
  parameters: {
    docs: {
      description: {
        component:
          'Design tokens are the single source of truth for the Systema visual language. All tokens are CSS custom properties defined in `src/tokens/tokens.css`.',
      },
    },
  },
};

/* ============================================================
   COLORS
   ============================================================ */
export const Colors = {
  render: () => {
    const semanticColors = [
      { name: 'Primary', value: 'var(--color-primary)', label: '--color-primary' },
      { name: 'Primary Hover', value: 'var(--color-primary-hover)', label: '--color-primary-hover' },
      { name: 'Primary Subtle', value: 'var(--color-primary-subtle)', label: '--color-primary-subtle' },
      { name: 'Accent', value: 'var(--color-accent)', label: '--color-accent' },
      { name: 'Accent Subtle', value: 'var(--color-accent-subtle)', label: '--color-accent-subtle' },
    ];

    const uiColors = [
      { name: 'Background', value: 'var(--color-bg)', label: '--color-bg' },
      { name: 'BG Subtle', value: 'var(--color-bg-subtle)', label: '--color-bg-subtle' },
      { name: 'Surface', value: 'var(--color-surface)', label: '--color-surface' },
      { name: 'Text', value: 'var(--color-text)', label: '--color-text' },
      { name: 'Text Muted', value: 'var(--color-text-muted)', label: '--color-text-muted' },
      { name: 'Border', value: 'var(--color-border)', label: '--color-border' },
    ];

    const statusColors = [
      { name: 'Success', value: 'var(--color-success)', label: '--color-success' },
      { name: 'Success Subtle', value: 'var(--color-success-subtle)', label: '--color-success-subtle' },
      { name: 'Warning', value: 'var(--color-warning)', label: '--color-warning' },
      { name: 'Warning Subtle', value: 'var(--color-warning-subtle)', label: '--color-warning-subtle' },
      { name: 'Error', value: 'var(--color-error)', label: '--color-error' },
      { name: 'Error Subtle', value: 'var(--color-error-subtle)', label: '--color-error-subtle' },
      { name: 'Info', value: 'var(--color-info)', label: '--color-info' },
      { name: 'Info Subtle', value: 'var(--color-info-subtle)', label: '--color-info-subtle' },
    ];

    const swatch = ({ name, value, label }) => `
      <div style="display:flex; flex-direction:column; gap:0.5rem; min-width:8rem;">
        <div style="
          width:100%;
          height:3.5rem;
          background-color:${value};
          border-radius:var(--radius-md);
          border:1px solid var(--color-border);
        "></div>
        <div>
          <div style="font-weight:600; font-size:var(--text-xs);">${name}</div>
          <div style="font-size:var(--text-xs); color:var(--color-text-muted); font-family:var(--font-mono);">${label}</div>
        </div>
      </div>
    `;

    const section = (title, colors) => `
      <div style="margin-block-end:2rem;">
        <h3 style="font-size:var(--text-base); font-weight:600; margin-block-end:1rem; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:0.05em; font-size:0.75rem;">${title}</h3>
        <div style="display:flex; flex-wrap:wrap; gap:1rem;">
          ${colors.map(swatch).join('')}
        </div>
      </div>
    `;

    return `
      <div>
        ${section('Brand', semanticColors)}
        ${section('UI', uiColors)}
        ${section('Status', statusColors)}
      </div>
    `;
  },
};

/* ============================================================
   SPACING
   ============================================================ */
export const Spacing = {
  render: () => {
    const steps = [
      { token: '--space-1', rem: '0.25rem', px: '4px' },
      { token: '--space-2', rem: '0.5rem', px: '8px' },
      { token: '--space-3', rem: '0.75rem', px: '12px' },
      { token: '--space-4', rem: '1rem', px: '16px' },
      { token: '--space-5', rem: '1.25rem', px: '20px' },
      { token: '--space-6', rem: '1.5rem', px: '24px' },
      { token: '--space-8', rem: '2rem', px: '32px' },
      { token: '--space-10', rem: '2.5rem', px: '40px' },
      { token: '--space-12', rem: '3rem', px: '48px' },
      { token: '--space-16', rem: '4rem', px: '64px' },
    ];

    return `
      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        ${steps
          .map(
            ({ token, rem, px }) => `
          <div style="display:flex; align-items:center; gap:1rem;">
            <div style="
              height:1.5rem;
              width:var(${token});
              background-color:var(--color-primary);
              border-radius:2px;
              min-width:4px;
            "></div>
            <code style="font-family:var(--font-mono); font-size:var(--text-xs); color:var(--color-primary); min-width:8rem;">${token}</code>
            <span style="font-size:var(--text-xs); color:var(--color-text-muted);">${rem} / ${px}</span>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  },
};

/* ============================================================
   TYPOGRAPHY
   ============================================================ */
export const Typography = {
  render: () => {
    const sizes = [
      { token: '--text-xs', label: 'text-xs', sample: 'The quick brown fox' },
      { token: '--text-sm', label: 'text-sm', sample: 'The quick brown fox' },
      { token: '--text-base', label: 'text-base', sample: 'The quick brown fox' },
      { token: '--text-lg', label: 'text-lg', sample: 'The quick brown fox' },
      { token: '--text-xl', label: 'text-xl', sample: 'The quick brown fox' },
      { token: '--text-2xl', label: 'text-2xl', sample: 'The quick brown fox' },
      { token: '--text-3xl', label: 'text-3xl', sample: 'Systema' },
      { token: '--text-4xl', label: 'text-4xl', sample: 'Systema' },
      { token: '--text-5xl', label: 'text-5xl', sample: 'Systema' },
    ];

    return `
      <div style="display:flex; flex-direction:column; gap:1.5rem;">
        ${sizes
          .map(
            ({ token, label, sample }) => `
          <div style="display:flex; align-items:baseline; gap:1.5rem;">
            <code style="font-family:var(--font-mono); font-size:var(--text-xs); color:var(--color-text-muted); min-width:7rem;">${label}</code>
            <span style="font-size:var(${token}); line-height:1.2;">${sample}</span>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  },
};

/* ============================================================
   SHADOWS
   ============================================================ */
export const Shadows = {
  render: () => {
    const shadows = [
      { token: '--shadow-xs', label: 'shadow-xs' },
      { token: '--shadow-sm', label: 'shadow-sm' },
      { token: '--shadow-md', label: 'shadow-md' },
      { token: '--shadow-lg', label: 'shadow-lg' },
      { token: '--shadow-xl', label: 'shadow-xl' },
      { token: '--shadow-2xl', label: 'shadow-2xl' },
    ];

    return `
      <div style="display:flex; flex-wrap:wrap; gap:2rem; padding:1rem;">
        ${shadows
          .map(
            ({ token, label }) => `
          <div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
            <div style="
              width:6rem;
              height:6rem;
              background-color:var(--color-surface);
              border-radius:var(--radius-xl);
              box-shadow:var(${token});
            "></div>
            <code style="font-size:var(--text-xs); font-family:var(--font-mono); color:var(--color-text-muted);">${label}</code>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  },
};

/* ============================================================
   BORDER RADIUS
   ============================================================ */
export const BorderRadius = {
  render: () => {
    const radii = [
      { token: '--radius-none', label: 'none' },
      { token: '--radius-sm', label: 'sm' },
      { token: '--radius-base', label: 'base' },
      { token: '--radius-md', label: 'md' },
      { token: '--radius-lg', label: 'lg' },
      { token: '--radius-xl', label: 'xl' },
      { token: '--radius-2xl', label: '2xl' },
      { token: '--radius-3xl', label: '3xl' },
      { token: '--radius-full', label: 'full' },
    ];

    return `
      <div style="display:flex; flex-wrap:wrap; gap:1.5rem; align-items:flex-end;">
        ${radii
          .map(
            ({ token, label }) => `
          <div style="display:flex; flex-direction:column; align-items:center; gap:0.75rem;">
            <div style="
              width:4rem;
              height:4rem;
              background-color:var(--color-primary-subtle);
              border:2px solid var(--color-primary);
              border-radius:var(${token});
            "></div>
            <code style="font-size:var(--text-xs); font-family:var(--font-mono); color:var(--color-text-muted);">${label}</code>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  },
};
