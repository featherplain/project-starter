myproject
============

## Outline

gulpfile for web development

* compile jade to html
* compile sass to css (+ sass-globbing option)
* combine js files and minify
* generate css sprite
* Browser-Sync support

## Requires

* bower
* Node.js
* npm
* Ruby
* Sass over3.1
* sass-globbing

## File structure
Basically source file placed in "src/". It passed to "dist/" as destination through the "gulp".
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

## Usage

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

### autoprefix

You'd like to autoprefix specific browsers, open gulpfile and edit below these lines.

>
	autoprefixer: {
  	browsers: ['last 2 versions']
	},


reference : [http://pleeease.io/docs/](http://pleeease.io/docs/)


### for WordPress

If you'd like to use for WordPress development :

1. Set hostname on line 21.

>
	'vhost': 'example.dev'

2. Uncomment below these lines in gulpfile.

>
	// Local server
	// gulp.task('browser-sync', function() {
	// 		browserSync({
	// 			proxy: paths.vhost,
	// 			open: 'external'
	// 		});
	// });
