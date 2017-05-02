'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    gcmq = require('gulp-group-css-media-queries'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    data = require('gulp-data'),
    nunjucksRender = require('gulp-nunjucks-render'),
    csscomb = require('gulp-csscomb'),
    htmlbeautify = require('gulp-html-beautify'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    svgSprite = require('gulp-svg-sprite'),
    cache = require('gulp-cached'),
    del = require('del'),
    fs = require('fs'),
    path = require('path'),
    browserSync = require('browser-sync').create();



// *** SETTINGS ***

// Error handler for gulp-plumber
var onError = function(err) {
  notify.onError({
    title:    'Gulp',
    subtitle: 'Failure!',
    message:  'Error: <%= error.message %>',
    sound:    'Beep'
  })(err);
  this.emit('end');
};

// Browsers for autopreffixer
var supportedBrowsers = [
  'last 3 version',
  '> 1%',
  'ie >= 9'
  ];

// SVG Config
var spriteConfig = {
  mode: {
    symbol: { // symbol mode to build the SVG
      dest: 'svg',  // destination folder
      sprite: 'sprite.svg', //sprite name
      example: true // Build sample page
    }
  },
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false // don't include the !DOCTYPE declaration
  }
};

// BrowserSync server config
var serverConfig = {
  server: { baseDir: './dist' },
  // tunnel: true,
  xip: true
};



// *** STYLES ***

// beautify source files on save
gulp.task('comb', function() {
  return gulp.src(['src/sass/**/*.{css,scss}', '!src/sass/main.scss', '!src/sass/vendor/*'])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(cache('combing'))
    .pipe(csscomb())
    .pipe(gulp.dest('src/sass'));
});

// compile, preffix and minify with sourcemaps
// gulp.task('sass', ['comb'], function() {
gulp.task('sass', function() {
  return gulp.src('src/sass/main.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(prefix({ browsers: supportedBrowsers }))
      .pipe(gcmq())
      .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream({match: '**/*.css'}))
    .pipe(notify({message: 'Styles done!', onLast: true}));
});



// *** HTML ***

// kill json cache
function requireUncached(obj) {
    delete require.cache[require.resolve(obj)];
    return require(obj);
}

// render nunjucks
gulp.task('render', function() {
  return gulp.src('src/templates/pages/**/*.{njk,html}')
    .pipe(plumber({ errorHandler: onError }))
      .pipe(data(function() {
        return requireUncached('./src/templates/data/data.json')
      }))
    .pipe(nunjucksRender({
      path: ['src/templates/']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(notify({message: 'Templates done!', onLast: true }));
});

// make sure render is complete when browsers reload
gulp.task('render-watch', ['render'], browserSync.reload);



// *** SCRIPTS ***

gulp.task('js', function () {
  return gulp.src('src/js/**/!(_)*.js')
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({message: 'Scripts done!', onLast: true}));
});



// *** IMAGES ***

gulp.task('img', function () {
  return gulp.src('src/img/**/*')
    // .pipe(cache('images'))
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({message: 'Images done!', onLast: true}));
});



// *** SVG ***

gulp.task('svg-sprite', function() {
  return gulp.src('src/svg/**/*.svg')
    .pipe(svgSprite(spriteConfig))
    .pipe(gulp.dest('dist'));
});



// *** FONTS ***

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(notify({message: 'Fonts moved!', onLast: true}));
});



// *** EXTRAS ***

gulp.task('extras', function() {
  return gulp.src('src/extras/**/*')
    .pipe(gulp.dest('dist'))
    .pipe(notify({message: 'Extras moved!', onLast: true}));
});



// *** DEFAULT SERVE & WATCH ***

gulp.task('default', ['sass', 'render', 'js', 'img', 'svg-sprite','fonts', 'extras'], function () {
  browserSync.init(serverConfig);
  gulp.watch('src/sass/**/*.{css,scss}', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']).on('change', browserSync.reload);
  gulp.watch('src/templates/**/*.{html,njk,json}', ['render-watch']).on('change', browserSync.reload);
  gulp.watch('src/img/**/*', ['img']);
  gulp.watch('src/svg/**/*', ['svg-sprite']);
  gulp.watch('src/fonts/**/*', ['fonts']);
  gulp.watch('src/extras/**/*', ['extras']);
});



// *** BUILD ***

// wiping out dist
gulp.task('clean', function() {
    return del(['dist/**/*']);
});

gulp.task('build', ['sass', 'render', 'js', 'img', 'svg-sprite', 'fonts', 'extras'], function() {
    return console.log('Build Complete!');
});
