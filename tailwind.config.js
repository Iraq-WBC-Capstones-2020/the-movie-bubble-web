module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        lightblue: '#18A0FB', // an example of extending tailwind
        darkgray: '#1D2530',
      },
      spacing: {
        '0.08': '0.08rem',
      },
      screens: {
        x910: { max: '910px' },
      },
      skew: {
      '-20': '-20deg',
      },
    },    
  },
  variants: { scale: ['hover'] },
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