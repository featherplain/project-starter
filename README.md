Project Starter
============

Project starter for web development with gulp + Foundation

日本語: [ja-README](https://github.com/featherplain/project-starter/blob/master/ja-README.md)

### Requires
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Setup your project
You don't need to install gulp globaly.

1.  Install some dependencies.


        $ cd path/to/directory ; npm install


1.  Run gulp.

        // proxy mode
        $ npm run gulp

        // server-mode for static websites
        $ npm run gulp-server

## Options
### Foundation
You can install Foundation and initialize if you need.

```
$ npm run install foundation
```

### iconfont

You can install iconfont and initialize if you need.

```
$ npm run install iconfont
```

### Autoprefixer
You'd like to autoprefix specific browsers, edit below this line in `./gulp/config.js`.

```javascript
'autoprefix'       : ['last 2 versions'],
```

### proxy
If you like to run gulp with proxy mode, edit below this line in `./gulp/config.js`.

```javascript
'proxy'            : 'localhost',
```

## File structure
Basically source file placed in `src/`. It passed to `assets/` as destination through some gulp tasks.
~~~~
.
├── LICENSE.md
├── README.md
├── assets
│   └── index.html
├── bin
│   ├── foundation.sh
│   ├── iconfont.sh
│   └── zip.sh
├── gulp
│   ├── bundlejs.js
│   ├── config.js
│   ├── image.js
│   ├── jade.js
│   └── tasks.js
├── gulpfile.babel.js
├── ja-README.md
├── package.json
├── setting.json
├── src
│   ├── images
│   │   ├── sprite
│   │   └── sprite-svg
│   ├── jade
│   │   ├── inc
│   │   │   ├── core
│   │   │   │   ├── _base.jade
│   │   │   │   ├── _config.jade
│   │   │   │   └── _mixins.jade
│   │   │   ├── layouts
│   │   │   │   ├── _footer.jade
│   │   │   │   └── _header.jade
│   │   │   └── modules
│   │   │       └── _buttons.jade
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
│       │   ├── _font-awesome.scss
│       │   ├── _fonts.scss
│       │   ├── _foundation.scss
│       │   ├── _functions.scss
│       │   ├── _mixins.scss
│       │   ├── _placeholder.scss
│       │   ├── _settings.scss
│       │   └── _sprite.scss
│       ├── layouts
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   └── _layout.scss
│       ├── modules
│       │   └── _buttons.scss
│       └── styles
│           └── _features.scss
└── style.css

~~~~
