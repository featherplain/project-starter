'use strict';

//---------------------------------------------------------------------------
// Dependences
//---------------------------------------------------------------------------
import { paths } from './config';

import gulp from 'gulp';
import jade from 'gulp-jade';
import plumber from 'gulp-plumber';
import data from 'gulp-data';

//---------------------------------------------------------------------------
// Jade
//---------------------------------------------------------------------------
gulp.task('jade', () => {
  return gulp.src(paths.jadePath + '*.jade')
    .pipe(data(() => {
      return require('./../setting.json');
    }))
    .pipe(plumber())
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(paths.htmlDest));
});
