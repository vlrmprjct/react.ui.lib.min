
import { create } from '@storybook/theming/create';
// import logo from './logo.png';

export const branding = {
    dark: {
        appBg: '#21252B',
        appBorderColor: '#3B4048',
        appContentBg: '#282C34',
        barBg: '#282C34',
        barSelectedColor: '#53BE7E',
        base: 'dark',
        // brandImage: logo,
        brandTitle: 'UI Storybook',
        brandUrl: '.',
        colorSecondary: '#53BE7E',
        fontBase: '"Open Sans", sans-serif',
        fontCode: 'Consolas',
        inputBg: '#21252B',
        inputBorder: '#3B4048',
        inputTextColor: '#999999',
        textColor: '#999999',
    },
};

export default create({
    ...branding.dark as any,
});
