import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-dark-mode',
    ],
    core: {
        disableTelemetry: true,
        enableCrashReports: false,
    },
    docs: {
        autodocs: 'tag'
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    stories: [
        '../../src/**/*.mdx',
    ],
    webpackFinal: async (config :any, { configType }) => {

        config.module.rules.push(
            {
                test: /\.s?[ac]ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]',
                                namedExport: true,
                            },
                            url: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    // {
                    //     loader: 'resolve-url-loader',
                    //     options: {
                    //         sourceMap: true,
                    //     },
                    // },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: './src/scss/base.scss',
                        },
                    },
                ],
            },
        );

        return config;
    },
};

export default config;