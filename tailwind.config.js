module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        lightblue: '#18A0FB', // an example of extending tailwind
        darkgrey: '#1D2530',
      },
      fontSize: {
        '15r': '15rem',
        '10r': '10rem',
      },
      spacing: {
        '-20r': '-20rem',
        '-10': '-10rem',
      },
      width: {
        '300p': '300px',
        '40%': '40%',
        '60r': '60rem',
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
  variants: {},
  plugins: [
    function ({ addComponents }) {
      const buttons = {
        '.main-gradient': {
          background: 'linear-gradient(270deg, #ffb421 11.7%, #ff7521 90.81%)',
        },
        '.text-orange-gradient': {
          background:
            '-webkit-linear-gradient(270deg, #ff7521 11.7%, #ffb421 90.81%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      };

      addComponents(buttons);
    },
  ],
};
