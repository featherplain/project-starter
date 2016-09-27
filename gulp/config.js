'use strict';

//---------------------------------------------------------------------------
// File destination
//---------------------------------------------------------------------------
export const paths = {
  'root'           : './',
// html
  'htmlDest'       : 'assets/',
// images
  'imageDest'      : 'assets/images/',
  'imagePath'      : 'src/images/',
// jade
  'jadePath'       : 'src/jade/',
// JavaScript
  'jsPath'         : 'src/js/',
  'jsDest'         : 'assets/js/',
// scss
  'scssPath'       : 'src/scss/',
// css
  'cssDest'        : 'assets/css/'
};

export const options = {
  'proxy'            : 'localhost',
  // Autoprefixer options
  // @param string
  'autoprefix'       : ['last 2 versions'],
  // Browsersync options
  // @param boolean: Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
  }
};

export const sassConf = {
  // sass options
  includePaths     : [
    './node_modules/foundation-sites/scss/',
    './node_modules/font-awesome/scss/',
  ],
  outputStyle  : 'compressed'
};
