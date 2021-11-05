const postcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        plugins: [
          tailwindcss({
            purge: {
            enabled: true,
              content: ['./src/**/*.{js,jsx,ts,tsx}','./src/*.{js,jsx,ts,tsx}','./example/*.{js,jsx,ts,tsx}']
            } ,
            darkMode: false, // or 'media' or 'class'
            theme: {
              extend: {},
            },
            variants: {
              extend: {},
            },
            plugins: [],
          }),
         
        ],
        inject: true,
        extract: false,
        minimize: true,
      })
    );
    return config;
  },
};