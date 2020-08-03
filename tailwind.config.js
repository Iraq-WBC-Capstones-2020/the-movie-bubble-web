module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        lightblue: '#18A0FB', // an example of extending tailwind
      },
    },
    screens: {
      sm: { min: '320px', max: '700px' },
      md: { min: '701px', max: '970px' },
      lg: { min: '971px', max: '1300px' },
      xl: { min: '1301px' },
    },
  },
  variants: {},
  plugins: [],
};
