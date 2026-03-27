/**
 * Heading — JavaScript template helper
 *
 * @param {object} options
 * @param {string}  [options.eyebrow='']         - Small label above the heading
 * @param {string}  [options.title='Heading']    - Main heading text
 * @param {string}  [options.sub='']             - Sub-heading / description text
 * @param {number}  [options.level=2]            - Semantic heading level (1–6)
 * @param {number}  [options.displayLevel=0]     - Visual display level (1–6, 0 = no override)
 * @param {string}  [options.align='']           - '' | 'center' | 'end'
 * @param {boolean} [options.divider=false]      - Show decorative divider below title
 * @returns {string} HTML string
 */
export function createHeading({
  eyebrow = '',
  title = 'Heading',
  sub = '',
  level = 2,
  displayLevel = 0,
  align = '',
  divider = false,
} = {}) {
  const tag = `h${Math.min(Math.max(level, 1), 6)}`;

  const wrapperClasses = [
    'heading',
    align ? `heading--${align}` : '',
    displayLevel ? `heading--display-${displayLevel}` : '',
    divider ? 'heading--divider' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `
    <div class="${wrapperClasses}">
      ${eyebrow ? `<span class="heading__eyebrow">${eyebrow}</span>` : ''}
      <${tag} class="heading__title">${title}</${tag}>
      ${sub ? `<p class="heading__sub">${sub}</p>` : ''}
    </div>
  `.trim();
}
