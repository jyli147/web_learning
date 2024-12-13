const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  htmlWhitespaceSensitivity: "strict",
  singleAttributePerLine: false,

  overrides: [
    {
      files: "*.css",
      options: {
        singleAttributePerLine: true,
      },
    },
  ],
};

module.exports.default = config;
