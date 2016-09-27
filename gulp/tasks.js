'use strict';

//---------------------------------------------------------------------------
// Dependences
//---------------------------------------------------------------------------
import { paths } from './config';

import gulp from 'gulp';

//---------------------------------------------------------------------------
// Tasks
//---------------------------------------------------------------------------
gulp.task('watch', () => {
  gulp.watch([paths.imageDest + 'sprite/*.png'], ['sprite']);
  gulp.watch([paths.imagePath + 'sprite-svg/*.svg'], ['sprite:svg'])
  gulp.watch([paths.jadePath  + '**/*.jade'], ['jade']);
  gulp.watch([paths.jsPath    + '**/*.js'], ['bundle:js']);
  gulp.watch([paths.scssPath  + '**/*.scss'], ['sass']);
});

gulp.task('default', [ 'watch', 'browserSync' ]);
