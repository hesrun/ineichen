const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
}

function scss() {
    return src('src/scss/**.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('dist'))
}

function scripts() {
    return src('src/js/**.js')
        .pipe(dest('dist/js'))
}

function folders() {
    return src('src/assets/**')
        .pipe(dest('dist/assets'))
}

function clear() {
    return del('dist')
}

function serve() {
    sync.init({
      server: './dist'
    })
  
    watch('src/**/**.html', series(html)).on('change', sync.reload)
    watch('src/scss/**/**.scss', series(scss)).on('change', sync.reload)
    watch('src/js/**.js', series(scripts)).on('change', sync.reload)
    watch('src/assets/**', series(folders)).on('change', sync.reload)
}


exports.build = series(clear, scss, html, scripts, folders)
exports.serve = series(clear, scss, html, scripts, folders, serve)
exports.clear = clear