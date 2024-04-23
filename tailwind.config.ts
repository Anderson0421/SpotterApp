import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
import animations from '@midudev/tailwind-animations'
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': "#E8FBFF",
        'midnight': '#02080A',
        'primary': "#85d3e9",
        'button': "#b043dd",
        'secondary': "#491c97",
        'dashboard-primary': '#11180f',
        'dashboard-second': '#162113'
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), animations],
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
