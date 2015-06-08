project starter
============

## Outline

Project starter foe web development with gulpfile

* compile jade to html
* compile sass to css (+ sass-globbing option)
* combine js files and minify
* generate css sprite
* Browser-Sync support

### Requires

* Bower
* Node.js
* npm
* Ruby
* Sass over3.1
* sass-globbing

## File structure
Basically source file placed in `src/`. It passed to `dist/` as destination through the "gulp".
~~~~
.
├── README.md
├── bower_components
├── bower.json
├── dist
│   ├── css
│   │   └── app.css
│   ├── img
│   │   ├── bx_loader.gif
│   │   ├── controls.png
│   │   └── sprite.png
│   └── js
│       ├── lib.min.js
│       └── script.min.js
├── gulpfile.js
├── node_modules
├── package.json
├── setting.json
├── src
│   ├── html
│   │   └── index.html
│   ├── img
│   │   └── sprite
│   │       ├── icon_star-red.png
│   │       ├── icon_star-yellow.png
│   │       └── icon_star_blue.png
│   ├── jade
│   │   ├── inc
│   │   │   ├── core
│   │   │   │   ├── _base.jade
│   │   │   │   ├── _config.jade
│   │   │   │   └── _mixins.jade
│   │   │   ├── layout
│   │   │   │   ├── _layout-footer.jade
│   │   │   │   └── _layout-header.jade
│   │   │   └── modules
│   │   │       └── _module-button.jade
│   │   └── index.jade
│   ├── js
│   │   ├── app
│   │   │   └── script.js
│   │   └── lib
│   │       ├── highlight.pack.js
│   │       └── jquery.bxslider.min.js
│   └── scss
│       ├── app.scss
│       ├── core
│       │   ├── _config.scss
│       │   ├── _default.scss
│       │   ├── _mixins.scss
│       │   └── _normalize.scss
│       ├── layout
│       │   ├── _layout-common.scss
│       │   ├── _layout-footer.scss
│       │   └── _layout-header.scss
│       └── module
│           ├── _module-buttons.scss
│           ├── _module-jquery.bxslider.scss
│           ├── _module-monokai.scss
│           └── _module-sprite.scss
└── style.css
~~~~

## Setup your project

1.  Install gulp.

		$ npm install -g gulp

2.  Install some dependencies.

		$ cd path/to/directory ; npm install
	
3.  Install sass-globbing.

		$ gem install sass-globbing

4.  Install bower components and initialize them.

		$ npm run gulp-init

5.  Run gulp.

		$ gulp

### Options

#### Connect with local server

If you'd like to connect "browser-sync" with local server, edit `gulpfile.js`.

1. Set hostname on line 21.

>
	'vhost': 'example.dev'

2. Uncomment below these lines.

>
	// Local server
	// gulp.task('browser-sync', function() {
	// 		browserSync({
	// 			proxy: paths.vhost,
	// 			open: 'external'
	// 		});
	// });

reference : [http://www.browsersync.io/docs/gulp/](http://www.browsersync.io/docs/gulp/)

#### autoprefix

You'd like to autoprefix specific browsers, open `gulpfile.js` and edit below these lines.

>
	autoprefixer: {
  		browsers: ['last 2 versions']
	},


reference : [http://pleeease.io/docs/](http://pleeease.io/docs/)

## Thanks

This project forked from [vwxyutarooo/mygulpfile](https://github.com/vwxyutarooo/mygulpfile).
