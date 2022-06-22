const CracoLessPlugin = require("craco-less");
const { getThemeVariables } = require("antd/dist/theme");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true, // Enable dark mode
              compact: true, // Enable compact mode
            }),
            modifyVars: {
              "@primary-color": "#0193DC",
              "@primary-color-hover": "#027AB6",
              "@primary-color-active": "#015580",
              "@btn-padding-horizontal-base": "44px",
              "@btn-font-weight": "700",
              "@border-radius-base": "4px",
              "@font-family": "Readex Pro",
              "@code-family": "JetBrains Mono",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
