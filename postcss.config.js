const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    'public/**/*.html',
    'src/**/*.js',
    'styles/**/*.css',
    'src/tailwind.css',
  ],
  //defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Purge and minify CSS only production builds only
    ...(process.env.NODE_ENV === 'production'
      ? [purgecss, require('cssnano')]
      : []),
  ],
};
