'use strict';

//---------------------------------------------------------------------------
// Dependences
//---------------------------------------------------------------------------
import { paths } from './config';

import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

import gulp from 'gulp';

//---------------------------------------------------------------------------
// Bundlejs
//---------------------------------------------------------------------------
gulp.task('bundle:js', () => {
  browserify({
    entries: './src/js/app.js',
    extensions: ['.js']
  })
  .transform(babelify)
  .bundle()
  .on("error", function (err) {
			console.log('Error : ' + err.message);
			this.emit('end');
		})
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(paths.jsDest))
});
