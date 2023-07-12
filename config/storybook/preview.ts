import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { branding } from './branding';

// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!resolve-url-loader!sass-loader!./index.scss';

const preview: Preview = {
    parameters: {
        actions: {
            argTypesRegex: '^on[A-Z].*',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        darkMode: {
            classTarget: 'html',
            current: 'light',
            dark: {
                ...themes.dark,
                ...branding.dark,
            },
            darkClass: 'theme-dark',
            light: {
                ...themes.dark,
                ...branding.dark,
            },
            lightClass: 'theme-light',
            stylePreview: true,
        },
    },
};

export default preview;
