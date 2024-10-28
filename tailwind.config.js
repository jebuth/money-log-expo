/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'bg-darkerGreen',
    'bg-discordYellow',
    'bg-discordRed',
    'bg-iosBlue',
    'bg-discordBlack',
    'bg-discordWhite',
    'bg-iosOffWhite',
    'bg-white',
    'bg-indigo',
    'text-discordWhite',
    'text-discordBlack',
    'text-discordRed',
    'text-iosOffWhite',
    'text-gainsboro',
    'focus:border-darkerGreen',
    'focus:border-discordGreen',
    'focus:border-iosBlue'
  ],
  theme: {
    extend: {
      colors: {

        'white': "#FFFFFF",
        'ivory': "#FAFAFA",
        'smoke': "#F0F0F0",
        'snow': "#FCFCFC",
        // gray: {
        //   100: "#CDCDE0",
        // },
        'indigo': "#EEF2FF",
        'gainsboro': "#DCDCDC",
        //green: "#7fd1ae",
        'darkerGreen': "#009063",
        //discordBlurple: "#5865F2",
        'discordBlack': "#23272A", // works
        'discordGrey': "#99AAB5", // works
        'discordDark': "#2C2F33", // works
        'discordWhite': "#FFFFFF", // works
        'discordGreen': "#57F287", // works
        'discordRed': "#ED4245",
        'discordYellow': "#FEE75C",
        'discordBlackText': "#1E1E1E",
        //darkerGreen: "black",
        'iosOffWhite': "#F2F2F7",
        'iosSeparator': "#C6C6C8",
        'iosBlue': "#007AFF",
        // slate: {
        //   400: '#94a3b8',
        //   600: '#475569'
        // }
        // iosGreen: "#34C759",
        // iosRed: "#FF3B30",
        // iosYellow: "#FFCC00"

      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
