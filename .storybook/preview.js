import '../src/index.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#14151a' },
        { name: 'subtle', value: '#f5f5f7' },
      ],
    },
    layout: 'padded',
    docs: {
      story: {
        inline: true,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light';
      const rendered = story();
      const wrapper = document.createElement('div');
      wrapper.setAttribute('data-theme', theme);
      wrapper.style.backgroundColor = theme === 'dark' ? 'hsl(220 20% 8%)' : '';
      wrapper.style.color = theme === 'dark' ? 'hsl(220 20% 92%)' : '';
      wrapper.style.padding = 'var(--space-6, 1.5rem)';
      wrapper.style.minHeight = '100%';
      if (typeof rendered === 'string') {
        wrapper.innerHTML = rendered;
      } else {
        wrapper.appendChild(rendered);
      }
      return wrapper;
    },
  ],
};

export default preview;
