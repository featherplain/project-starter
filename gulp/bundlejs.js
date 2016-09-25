'use strict';

//---------------------------------------------------------------------------
// Dependences
//---------------------------------------------------------------------------
import { paths } from './config';

import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

//---------------------------------------------------------------------------
// Bundlejs
//---------------------------------------------------------------------------
gulp.task('js', () => {
  return gulp.src(paths.jsPath + '*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.jsDest));
});
