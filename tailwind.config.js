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
      scale: {
        '300': '3',
      },
      height: {
        '20r': '20rem',
      },
      inset: {
        '10%': '10%',
        '60vh': '60vh',
      },

      screens: {
        'max-910p': { max: '910px' },
      },
    },
  },
  variants: { scale: ['hover', 'responsive'] },
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
