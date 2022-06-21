const mix = require('laravel-mix');

mix
  .js('src/assets/js/main.js', `dist/assets/main.js`)
  .sass('src/assets/scss/main.scss', 'dist/assets')
  .options({
    processCssUrls: false,
  })
  .browserSync({ server: 'dist', proxy: null })
  .copy('src/index.html', 'dist')
  .copy('src/images', 'dist/images')
  .setPublicPath('./dist');
