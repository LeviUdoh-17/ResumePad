/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './dist/*.{html,js}',
  ],
  theme: {
    extend: {
      before: { 
        'strikethrough-diagonal': { 
          content: '""', 
          position: 'absolute', 
          left: '11rem', 
          top: '27%', 
          right: '0px', 
          transform: 'skewY(-20deg)', 
          borderTop: '4px solid', 
          borderColor: 'hsl(var(--muted-foreground) / .5)',
          width: '55px' 
        }, 
      },
      fontFamily: {
        inter: ['Inter', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
};
