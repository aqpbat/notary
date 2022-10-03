const { src, dest, task, watch, series, parallel } = require('gulp');
const deleteAsync = require('del');
const options = require("./config");
const browserSync = require('browser-sync').create();

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const uglify = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');
const autoprefixer = require('gulp-autoprefixer');


function livePreview(done){
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base
    },
    port: options.config.port || 5000
  });
  done();
} 


function previewReload(done){
  browserSync.reload();
  done();
}


function devHTML(){
  return src(`${options.paths.src.base}/**/*.html`).pipe(dest(options.paths.dist.base));
} 


function devStyles(){
  const tailwindcss = require('tailwindcss'); 
  return src(`${options.paths.src.css}/**/*.scss`).pipe(sass().on('error', sass.logError))
    .pipe(dest(options.paths.src.css))
    .pipe(postcss([
      tailwindcss(options.config.tailwindjs),
      require('autoprefixer'),
    ]))
    .pipe(concat({ path: 'style.css'}))
    .pipe(autoprefixer({
      overrideBrowserlist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(dest(options.paths.dist.css));
}


function devScripts(){
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`,
    `!${options.paths.src.js}/**/external/*`
  ]).pipe(concat({ path: 'scripts.js'})).pipe(dest(options.paths.dist.js));
}


function devImages(){
  return src(`${options.paths.src.img}/**/*`).pipe(dest(options.paths.dist.img));
}


function watchFiles(){
  watch(`${options.paths.src.base}/**/*.html`,series(devHTML, devStyles, previewReload));
  watch([options.config.tailwindjs, `${options.paths.src.css}/**/*.scss`],series(devStyles, previewReload));
  watch(`${options.paths.src.js}/**/*.js`,series(devScripts, previewReload));
  watch(`${options.paths.src.img}/**/*`,series(devImages, previewReload));
  console.log("Watching for Changes...");
}


function devClean(){
  console.log("Cleaning dist folder for fresh start...");
  return deleteAsync(['dist']);
}


function prodHTML(){
  return src(`${options.paths.src.base}/**/*.html`).pipe(dest(options.paths.build.base));
}


function prodStyles(){
  return src(`${options.paths.dist.css}/**/*`)
  .pipe(purgecss({
    content: ['src/**/*.{html,js}'],
    defaultExtractor: content => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    }
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest(options.paths.build.css));
}


function prodScripts(){
  return src([
    `${options.paths.src.js}/libs/**/*.js`,
    `${options.paths.src.js}/**/*.js`
  ])
  .pipe(concat({ path: 'scripts.js'}))
  .pipe(uglify())
  .pipe(dest(options.paths.build.js));
}

function prodImages(){
  return src(`${options.paths.src.img}/**/*`).pipe(dest(options.paths.dist.img));
}


function prodClean(){
  console.log("Cleaning build folder for fresh start...");
  return deleteAsync(['build']);
}


function buildFinish(done){
  console.log(`Production build is complete. Files are located at ${options.paths.build.base}...`);
  done();
}


exports.default = series(
  devClean,
  parallel(devStyles, devScripts, devImages, devHTML),
  livePreview,
  watchFiles
);


exports.prod = series(
  prodClean,
  parallel(prodImages, prodStyles, prodScripts, prodHTML),
  buildFinish
);