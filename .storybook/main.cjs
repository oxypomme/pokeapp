const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    interactionsDebugger: true,
    storyStoreV7: true,
  },
  viteFinal: async (config, { configType }) => {
    // Add absolute imports @
    config.resolve.alias = config.resolve.alias || [];
    config.resolve.alias.push({
      find: "@",
      replacement: path.resolve(__dirname, "../src"),
    });
    return config;
  },
};
