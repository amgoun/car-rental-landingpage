import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "762px",
        lg: "1024px",
        xl: "1300px",
      },
      colors: {
        secondary:"#F4F6FF",
        yellow:"#FBD46D",
        dark_green:"#4F8A8B",
        primary: "#07031A",
        accent: {
          DEFFAULT: "#4F8A8B",
          hover: "#dd242a",
        }, 
        
   
        body: "#dedede",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "map_bg": "url('../public/images/map_bg3.png')",
         
      },
    },
  },
  plugins: [],
};
export default config;
