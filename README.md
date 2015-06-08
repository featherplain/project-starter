project starter
============

## Outline

Project starter for web development with gulp

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
├── LICENSE.md
├── README.md
├── bower.json
├── bower_components
├── dist
│   ├── css
│   │   └── app.css
│   ├── images
│   │   ├── pages
│   │   └── sprite.png
│   ├── index.html
│   └── js
│       ├── lib.min.js
│       └── script.min.js
├── gulpfile.js
├── package.json
├── setting.json
├── src
│   ├── images
│   │   └── sprite
│   ├── jade
│   │   ├── inc
│   │   │   ├── core
│   │   │   │   ├── _base.jade
│   │   │   │   ├── _config.jade
│   │   │   │   └── _mixins.jade
│   │   │   ├── layout
│   │   │   │   ├── _l-footer.jade
│   │   │   │   └── _l-header.jade
│   │   │   └── module
│   │   │       └── _m-buttons.jade
│   │   └── index.jade
│   ├── js
│   │   ├── app
│   │   │   └── script.js
│   │   └── lib
│   │       └── jquery.js
│   └── scss
│       ├── app.scss
│       ├── core
│       │   ├── _config.scss
│       │   ├── _default.scss
│       │   ├── _mixins.scss
│       │   └── _placeholder.scss
│       ├── layout
│       │   ├── _l-footer.scss
│       │   └── _l-header.scss
│       └── module
│           ├── _m-buttons.scss
│           └── _m-sprite.scss
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

If you'd like to connect BrowserSync with local server, edit `gulpfile.js`.

1. Set hostname on line 21.

    ```
    'vhost': 'example.dev'
    ```

2. Uncomment below these lines.

    ```
    // Local server
    // gulp.task('browser-sync', function() {
    //    browserSync({
    //      proxy: paths.vhost,
    //      open: 'external'
    //    });
    // });
    ```

reference : [http://www.browsersync.io/docs/gulp/](http://www.browsersync.io/docs/gulp/)

#### autoprefix

You'd like to autoprefix specific browsers, open `gulpfile.js` and edit below these lines.

    autoprefixer: {
      browsers: ['last 2 versions']
    },

reference : [http://pleeease.io/docs/](http://pleeease.io/docs/)

## Thanks

This project forked from [vwxyutarooo/gulp-web-starter](https://github.com/vwxyutarooo/gulp-web-starter).
