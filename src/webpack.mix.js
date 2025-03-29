const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath(`src/public`);
mix.js('src/js/app.js', 'js')
    .js('node_modules/chart.js/dist/chart.umd.js', 'js')
    .sourceMaps();
