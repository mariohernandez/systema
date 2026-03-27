/**
 * Badge — JavaScript template helper
 *
 * @param {object} options
 * @param {string}  [options.label='Badge']         - Badge label text
 * @param {string}  [options.variant='default']     - default | primary | success | warning | error | info
 * @param {string}  [options.size='']               - '' (md) | 'sm' | 'lg'
 * @param {boolean} [options.pill=false]            - Fully rounded ends
 * @param {boolean} [options.outline=false]         - Outline style
 * @returns {string} HTML string
 */
export function createBadge({
  label = 'Badge',
  variant = 'default',
  size = '',
  pill = false,
  outline = false,
} = {}) {
  const classes = [
    'badge',
    `badge--${variant}`,
    size ? `badge--${size}` : '',
    pill ? 'badge--pill' : '',
    outline ? 'badge--outline' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `<span class="${classes}">${label}</span>`;
}
