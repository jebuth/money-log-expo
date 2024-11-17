import React, { createContext, useState, useContext } from 'react';

// const ThemeContext = createContext({
//   theme: 'light',
//   toggleTheme: () => {},
// });

const ThemeContext = createContext();

  export function ThemeProvider({children}){

    const [isDarkMode, setIsDarkMode] = useState(true);
    const theme = {
        isDarkMode,
        colors: {
            buttonBackgroundColor: isDarkMode ? 'bg-darkerGreen' : 'bg-iosBlue',
            primaryBackgroundColor: isDarkMode ? 'bg-discordBlack' : 'bg-white',
            secondaryBackgroundColor: isDarkMode ? 'bg-discordDark' : 'bg-iosOffWhite',
            //textColor: isDarkMode ? 'text-discordWhite' : 'text-discordBlack',
            textColor: isDarkMode ? 'text-gainsboro' : 'text-discordBlack',
            secondaryTextColor: isDarkMode ? 'text-discordRed' : 'text-discordRed',
            textInputBackgroundColor: isDarkMode ? 'bg-zinc-700' : 'bg-gainsboro', // same
            textInputBorderHighlightedColor: isDarkMode ? 'focus:border-darkerGreen' : 'focus:border-iosBlue',
            menuItemBackgroundColor: isDarkMode ? 'bg-zinc-700' : 'bg-gainsboro', // same
            addSheetsButtonStyle: isDarkMode ? '#009063' : '#007AFF',
            // nav items
            // tabBarActiveTintColor: isDarkMode ? '#FEE75C' : '#009063',
            tabBarActiveTintColor: isDarkMode ? '#FEE75C' : '#009063',
            tabBarInActiveTintColor: isDarkMode ? '#3F3F46' : '#DCDCDC',
            tabBarStyleBackgroundColor: isDarkMode ? '#23272A' : '#FFFFFF'
        },
        toggleTheme: () => setIsDarkMode(prev => !prev)
    };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error('CustomErroR: useTheme must be used within a ThemeProvider');
    }
    return context;
  }

//export const useTheme = () => useContext(ThemeContext);