/**
 * Card — JavaScript template helper
 *
 * @param {object} options
 * @param {string}  [options.title='']          - Card title
 * @param {string}  [options.subtitle='']       - Card subtitle
 * @param {string}  [options.body='']           - Card body text / inner HTML
 * @param {string}  [options.footer='']         - Card footer inner HTML
 * @param {string}  [options.imageSrc='']       - URL for media image
 * @param {string}  [options.imageAlt='']       - Alt text for media image
 * @param {string}  [options.variant='']        - '' | 'bordered' | 'flat'
 * @param {string}  [options.size='']           - '' | 'sm' | 'lg'
 * @param {boolean} [options.interactive=false] - Adds hover lift effect
 * @returns {string} HTML string
 */
export function createCard({
  title = '',
  subtitle = '',
  body = '',
  footer = '',
  imageSrc = '',
  imageAlt = '',
  variant = '',
  size = '',
  interactive = false,
} = {}) {
  const classes = [
    'card',
    variant ? `card--${variant}` : '',
    size ? `card--${size}` : '',
    interactive ? 'card--interactive' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const mediaHtml = imageSrc
    ? `<div class="card__media">
        <img src="${imageSrc}" alt="${imageAlt}" loading="lazy" />
      </div>`
    : '';

  const headerHtml =
    title || subtitle
      ? `<div class="card__header">
          <div>
            ${title ? `<h3 class="card__title">${title}</h3>` : ''}
            ${subtitle ? `<p class="card__subtitle">${subtitle}</p>` : ''}
          </div>
        </div>`
      : '';

  const bodyHtml = body
    ? `<div class="card__body">${body}</div>`
    : '';

  const footerHtml = footer
    ? `<div class="card__footer">${footer}</div>`
    : '';

  return `<div class="${classes}">${mediaHtml}${headerHtml}${bodyHtml}${footerHtml}</div>`;
}
