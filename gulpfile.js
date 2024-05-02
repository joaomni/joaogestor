const { src, dest, series } = require('gulp')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const minifyHtml = require('gulp-minify-html')

// CSSNano
const buildHTML = () => {
  return src("public/*.html")
    .pipe(minifyHtml())
    .pipe(dest("public/"))
}

// CSSNano
const buildCSS = () => {
  return src("public/css/*.css")
    .pipe(cssnano())
    .pipe(dest("public/css/"))
}

// Babel
const buildBabel = () => {
  return src('public/js/*.js')
    .pipe(babel())
    .pipe(dest('public/js/'))
};

//JS
const buildJS = () => {
  return src('public/js/*.js')
    .pipe(uglify())
    .pipe(dest('public/js/'))
};

exports.buildDev = series(buildHTML, buildCSS, buildJS)
