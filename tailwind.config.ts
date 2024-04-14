import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
import animations from '@midudev/tailwind-animations'


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), animations],
};
export default config;
