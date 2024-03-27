import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        'light-yellow': '#FFEAD0',
        'orange-bg':'#E17654',
        'dark-green':'#115E59',
        'btn-black':'#161616'

      },
      textColor:{
        'dark-grey':'#4D4D4D',
        'heading-black':'#161616',
        'light-yellow': '#FFEAD0',
        

      },
      borderColor:{
        'border-orange':'#E17654'
      }
    },
  },
  plugins: [],
};
export default config;
