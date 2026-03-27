/**
 * Button — JavaScript template helper
 *
 * Returns an HTML string for a button element.
 *
 * @param {object} options
 * @param {string}  [options.label='Button']      - Visible button label
 * @param {string}  [options.variant='primary']   - primary | secondary | outline | ghost | danger
 * @param {string}  [options.size='']             - '' (md) | 'sm' | 'lg'
 * @param {boolean} [options.disabled=false]      - Disabled state
 * @param {boolean} [options.fullWidth=false]     - Stretch to container width
 * @param {string}  [options.type='button']       - button | submit | reset
 * @returns {string} HTML string
 */
export function createButton({
  label = 'Button',
  variant = 'primary',
  size = '',
  disabled = false,
  fullWidth = false,
  type = 'button',
} = {}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    fullWidth ? 'btn--full' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const disabledAttr = disabled ? ' disabled aria-disabled="true"' : '';

  return `<button class="${classes}" type="${type}"${disabledAttr}>${label}</button>`;
}
