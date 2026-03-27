# Systema

A platform-agnostic front-end design system built on web standards — vanilla CSS and vanilla JavaScript with zero runtime dependencies.

![Storybook — Button variants](https://github.com/user-attachments/assets/47cecb1c-c096-48c2-bae8-426e55e054f3)

## Features

- **Modern CSS** — custom properties, `:is()`, `:where()`, `:not()`, `:has()`, fluid `clamp()` typography
- **Design Tokens** — single source of truth for color, spacing, typography, borders, shadows, and motion
- **Light & Dark themes** — zero-JS theme switching via `data-theme` attribute
- **Responsive** — fluid type scale and mobile-first media queries throughout
- **Storybook** — interactive component catalogue with controls, autodocs, and a dark-theme toolbar toggle
- **Minimal footprint** — only 3 dev dependencies (Storybook + Vite); no preprocessors, no frameworks, no runtime JS

## Getting Started

**Requirements:** Node.js ≥ 20 (LTS)

```bash
npm install
npm run storybook   # opens http://localhost:6006
```

To build a static Storybook for deployment:

```bash
npm run build-storybook
```

## Project Structure

```
systema/
├── .storybook/
│   ├── main.js          # Storybook config (html-vite framework)
│   └── preview.js       # Global CSS import, theme decorator, backgrounds
├── src/
│   ├── index.css        # Main CSS entry — imports all layers in order
│   ├── tokens/
│   │   ├── tokens.css   # All design tokens (colors, spacing, type, …)
│   │   └── tokens.stories.js
│   ├── base/
│   │   ├── reset.css    # Modern CSS reset using :where(), :is(), :not()
│   │   └── typography.css
│   └── components/
│       ├── button/      # button.css · button.js · button.stories.js
│       ├── card/        # card.css · card.js · card.stories.js
│       ├── heading/     # heading.css · heading.js · heading.stories.js
│       └── badge/       # badge.css · badge.js · badge.stories.js
└── package.json
```

## Design Tokens

All tokens are CSS custom properties defined in `src/tokens/tokens.css`.

| Category | Examples |
|---|---|
| **Colors** | `--color-primary`, `--color-bg`, `--color-text`, `--color-success` |
| **Spacing** | `--space-1` → `--space-24` (4 px base) |
| **Typography** | `--text-xs` → `--text-5xl` (fluid `clamp()` values) |
| **Border radius** | `--radius-sm` → `--radius-full` |
| **Shadows** | `--shadow-xs` → `--shadow-2xl` |
| **Motion** | `--duration-fast`, `--ease-spring`, `--transition-base` |

## Theming

Switch between light and dark by setting `data-theme` on any ancestor element:

```html
<body data-theme="dark">…</body>
```

All semantic color tokens (`--color-bg`, `--color-text`, `--color-primary`, etc.) automatically remap to their dark-mode values.

## Components

| Component | Variants / Notes |
|---|---|
| **Button** | `primary`, `secondary`, `outline`, `ghost`, `danger` · sizes `sm`/`md`/`lg` · `disabled`, `full-width`, button groups |
| **Card** | `bordered`, `flat`, `interactive` · sizes `sm`/`lg` · media, header, body, footer slots · auto-fill grid |
| **Heading** | Eyebrow, title, sub-heading · display size override · divider modifier · `center`/`end` alignment |
| **Badge** | `primary`, `success`, `warning`, `error`, `info` · `pill`, `outline` · sizes `sm`/`lg` |

## License

MIT © Mario Hernandez
