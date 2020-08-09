module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        lightblue: '#18A0FB', // an example of extending tailwind
      },
    },
    borderRadius: {
      sm: '10px',
    },
    width:{
      '1/5':'257px'
    },
    height:{
      '3/12':'290px'
    }
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      const movieCard = {
        '.movie-card-width-height': {
          width: '250px',
          height: '282px',},

          '.movie-card':{
             '&:hover':{
               '.movie-card__poster':{
                 position: 'absolute',
            opacity: '100%',

               },
            
            '.title-display':{
               'display': 'block',
              }
          }
          
         
        
        },
        '.gradient-orange':{
          background:'linear-gradient(#ff7521, #ffb421)',

        }
      };
      addComponents(movieCard);
    },
  ],
};
