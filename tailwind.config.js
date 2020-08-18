module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        lightblue: '#18A0FB', // an example of extending tailwind
        darkgray: '#1D2530',
      },
      borderRadius: {
        20: '20px',
      },
      boxShadow: {
        '3xl': '28px 2px 18px 10px #101010',
      },
      fontSize: {
        '15r': '15rem',
        '10r': '10rem',
      },
      spacing: {
        '0.08': '0.08rem',
        '-20r': '-20rem',
        '-10': '-10rem',
      },
      width: {
        '300p': '300px',
        '40%': '40%',
        '60r': '60rem',
      },
      minHeight: {
        '10': '2.5rem',
      },
      minWidth: {
        '20': '7rem',
      },
      inset: {
        '10%': '10%',
        '60vh': '60vh',
      },
      screens: {
        x910: { max: '910px' },
      },
      skew: {
        '-20': '-20deg',
      },
    },
  },

  variants: {
    scale: ['hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },

  plugins: [
    function ({ addComponents }) {
      const buttons = {
        '.main-gradient': {
          background: 'linear-gradient(270deg, #ffb421 11.7%, #ff7521 90.81%)',
        },
      };

      addComponents(buttons);
    },
  ],
};
