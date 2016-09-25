'use strict';

//---------------------------------------------------------------------------
// Dependences
//---------------------------------------------------------------------------
import { paths } from './config';

import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import svgSprite from 'gulp-svg-sprite';
import rename from 'gulp-rename';

//---------------------------------------------------------------------------
// image tasks
//---------------------------------------------------------------------------zw
// sprite
gulp.task('sprite', () => {
  var spriteData = gulp.src(paths.imagePath + 'sprite/*.png')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../images/sprite.png',
    cssName: '_sprite.scss',
    algorithm: 'top-down',
    padding: 20
  }));
  spriteData.img.pipe(gulp.dest(paths.imageDest));
  spriteData.css.pipe(gulp.dest(paths.scssPath + 'core'));
});
// sprite svg
gulp.task('sprite:svg', () => {
  return gulp.src(paths.imagePath + 'sprite-svg/*.svg')
    .pipe(svgSprite({
      dest: './',
      mode: { symbol: { dest: './' } }
    }))
    .pipe(rename({
      basename: 'symbol',
      dirname: './',
      prefix: 'sprite' + '.'
    }))
    .pipe(gulp.dest(paths.imageDest));
});
