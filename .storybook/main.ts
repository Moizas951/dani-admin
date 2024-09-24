module.exports = {
    core: {
        builder: 'webpack5',
      },
    stories: ['../src/components/**/stories.tsx', '../src/designSystemComponents/**/stories.tsx'],
    addons: ['@storybook/addon-essentials'],
    webpackFinal: (config) => {
        config.resolve.modules.push(`${process.cwd()}/src`);
        return config;
    }
};
