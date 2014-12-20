/***************************************************************************
* DEPENDENCIES
***************************************************************************/

var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  }),
  browserSync = require('browser-sync')
  mainBowerFiles = require('main-bower-files')
//  saveLicense = require('uglify-save-license')
;

/***************************************************************************
* FILE DESTINATIONS
***************************************************************************/

var paths = {
  'dest'        : './',
  'vhost'       : 'example.dev',
  'port'        : 3000,
// html
  'htmlDest'    : 'src/html',
  'htmlFiles'   : 'src/html/*.html',
// images
  'imgDest'     : 'dist/img',
  'imgDir'      : 'src/img',
// jade
  'jadeFiles'   : ['src/jade/*.jade', 'src/jade/**/*.jade'],
  'jadeDir'     : 'src/jade/*.jade',
// JavaScript
  'jsAppFiles'  : 'src/js/app/*.js',
  'jsLibFiles'  : 'src/js/lib/*.js',
  'jsDir'       : 'src/js',
  'jsDest'      : 'dist/js',
// scss
  'scssDest'    : 'src/scss',
  'scssFiles'   : 'src/scss/**/*.scss',
// css
  'cssDest'     : 'dist/css',
// others
  'filterDir'   : 'bower_components'
}

/***************************************************************************
* bower-init
***************************************************************************/

gulp.task('bower-init', function(){
  var filterJs = $.filter('*.js');
  var filterCss = $.filter('*.css');
  var filterScss = $.filter('*.scss');
  var filterImage = $.filter(['*.png', '*.gif', '*.jpg']);
  return gulp.src(mainBowerFiles())
    .pipe(filterJs)
    .pipe(gulp.dest(paths.jsDir + '/lib'))
    .pipe(filterJs.restore())
    .pipe(filterCss)
    .pipe($.rename({ prefix: '_module-', extname: '.scss' }))
    .pipe(gulp.dest('src/scss/module/components'))
    .pipe(filterCss.restore())
    .pipe(filterImage)
    .pipe(gulp.dest(paths.imgDest))
    .pipe(filterImage.restore());
});

/***************************************************************************
* browser-sync
***************************************************************************/

// Local server
// gulp.task('browser-sync', function() {
//   browserSync({
//     proxy: paths.vhost,
//     open: 'external'
//   });
// });

// Static server
gulp.task('browser-sync', function() {
 browserSync({
   server: {
     baseDir: paths.dest
   },
   startPath: paths.htmlDest
 });
});

// Reload all browsers
gulp.task('bs-reload', function() {
  browserSync.reload()
});

/***************************************************************************
* image tasks
***************************************************************************/

gulp.task('sprite', function() {
  var spriteData = gulp.src(paths.imgDir + '/sprite/*.png')
  .pipe($.spritesmith({
    imgName: 'sprite.png',
    imgPath: '/' + paths.imgDest + '/sprite.png',
    cssName: '_module-sprite.scss'
  }));
  spriteData.img.pipe(gulp.dest(paths.imgDest));
  spriteData.css.pipe(gulp.dest(paths.scssDest + '/module'));
});

/*******************************************************************************
 * Jade Tasks
*******************************************************************************/

gulp.task('jade', function() {
  return gulp.src(paths.jadeDir)
    .pipe($.data(function(file) {
      return require('./setting.json');
    }))
    // .pipe($.changed(paths.htmlDest, { extension: '.html' }))
    .pipe($.plumber())
    .pipe($.jade({ pretty: true }))
    .pipe(gulp.dest(paths.htmlDest))
    .pipe(browserSync.reload({ stream: true }));
});

/***************************************************************************
* js tasks
***************************************************************************/

gulp.task('jsLib', function() {
  return gulp.src(paths.jsLibFiles)
    .pipe($.concat('lib.js'))
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.jsDest))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('jsApp', function() {
  return gulp.src(paths.jsAppFiles)
    .pipe($.concat('script.js'))
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.jsDest))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('jsTasks', [
  'jsApp',
  'jsLib'
]);

/***************************************************************************
* Sass tasks
***************************************************************************/

gulp.task('rubySass', function () {
  gulp.src(paths.scssFiles)
    .pipe($.plumber())
    .pipe($.rubySass({
      r: 'sass-globbing',
      'sourcemap=none': true
    }))
    .pipe($.filter('*.css'))
    .pipe($.pleeease({
      autoprefixer: {
        browsers: ['last 2 versions']
      },
      sourcemaps: true
    }))
    .pipe($.filter('*.css').restore())
    .pipe(gulp.dest(paths.cssDest))
    .pipe(browserSync.reload({ stream: true }));
});

/***************************************************************************
* gulp tasks
***************************************************************************/

gulp.task('watch', function() {
  gulp.watch([paths.imgDest + '/sprite/*.png'], ['sprite']);
  gulp.watch([paths.htmlFiles], ['bs-reload']);
  gulp.watch([paths.jadeFiles], ['jade']);
  gulp.watch([paths.jsDest], ['jsTasks']);
  gulp.watch([paths.scssFiles], ['rubySass']);
});

gulp.task('default', [
  'browser-sync',
  'bs-reload',
  'jade',
  'jsTasks',
  'rubySass',
  'sprite',
  'watch'
]);

gulp.task('init', [
  'bower-init',
  'jsTasks'
]);
