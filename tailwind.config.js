
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F1F1F1',
        surface: '#FFFFFF',
        foreground: '#1B1B1B',
        'text-secondary': '#727272',
        accent: '#2F80ED',
        'glass-border': 'rgba(255, 255, 255, 0.4)',
        'glass-bg': 'rgba(253, 253, 253, 0.75)',
        dark: '#101010',
      },
      fontFamily: {
        sans: ['"SF Pro"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '32px',
        'pill': '100px',
      },
      boxShadow: {
        'glass': '0px 32px 64px -12px rgba(0, 0, 0, 0.075), 0px 2.15px 0.5px -2px rgba(0, 0, 0, 0.25), 0px 24px 24px -16px rgba(8, 8, 8, 0.04)',
        'float': '0px 16px 32px -8px rgba(0, 0, 0, 0.1), 0px 4px 8px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(47, 128, 237, 0.3)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(180deg, rgba(253, 253, 253, 0.225) 0%, rgba(253, 253, 253, 0.75) 100%)',
      }
    },
  },
  plugins: [],
}
