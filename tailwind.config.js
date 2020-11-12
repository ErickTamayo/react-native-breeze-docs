module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.tsx", "./docs/**/*.mdx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
