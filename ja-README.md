Project Starter
============

[ project discription here ]

## 必要なもの

- [Node.js](https://nodejs.org/en/)
  - 日本語: [Node.js 日本ユーザーグループ](http://nodejs.jp/)
- [npm](https://www.npmjs.com/)

ファイルの編集に、タスクランナーの [gulp](http://gulpjs.com/) を使用しています。gulp を実行するには Node.js および npm が必要になります。Node.js と npm がお使いのマシンに入っていない場合、Node.js をインストールしてください。Node.js のインストール時に、自動的に npm も一緒にインストールされます。

- Mac: [Homebrew](http://brew.sh/index_ja.html)
- Windows: [Node.js のダウンロードページ](https://nodejs.org/en/download/)

## ディレクトリ構造

編集用などのソースファイルは `src/` にあります。 gulp のタスク実行後、コンパイルされたファイルは `dist/` に格納されます。

- ファイルを編集する場合はプロジェクトのセットアップ後、 `src/` ディレクトリ内を参照
- 納品用(閲覧用)ファイルは `dist/` ディレクトリ内を参照

gulp を実行せず `dist/` 以下のファイルを直接編集も可能ですが、`src/` 内のソースファイルと**内容に差分が生じる**ので注意してください。

~~~
.
├── LICENSE.md
├── README.md
├── dist/
│   ├── css/
│   ├── images/
│   ├── index.html
│   └── js/
├── gulpfile.js
├── package.json
├── setting.json
├── src/
│   ├── images/
│   ├── jade/
│   ├── js/
│   ├── scss/
│   └── shell/
└── style.css // WordPress のテーマ制作時に必須になる CSS ファイル
~~~

## プロジェクトのセットアップ

gulp はグローバルにインストールする必要はありません。下記のコマンドを順番に実行すると、gulp が起動してファイルの編集ができます。


      $ cd path/to/your-directory
      $ npm install 
      $ npm run gulp-server  

## npm の実行コマンド

[ project name ] では、以下の npm コマンドが使えます。

| コマンド名  | 説明  |
|---|---|
| $ npm run gulp | [プロキシモード](#プロキシモード)で gulp を実行する |
| $ npm run gulp-server | 静的サイト(ファイル)制作時に gulp を実行する |
| $ npm run gulp-init | [Foundation](#Foundation) のインストール |
| $ npm run gulp-zip | `dist/` ディレクトリを圧縮し、zip 化する ※ Windows 環境では shell スクリプトが実行できないので注意 |

## gulp のタスク一覧

| タスク名  | 説明  | リファレンスサイト | 
|---|---|---|
| browser-sync | ブラウザのオートリロード | [BrewserSync](https://www.browsersync.io/) |
| image-min | 画像ファイルの圧縮<br>`optimizationLevel: 3` の数字によって圧縮レベルが変わる | [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) |
| sprite-svg |  svg のスプライト画像を生成 | [gulp-svg-sprite](https://github.com/shakyshane/gulp-svg-sprites) | 
| sprite |  スプライト画像を生成 | [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith) | 
| jade | テンプレートエンジン [Jade](http://jade-lang.com/) を HTML にコンパル | [gulp-jade](https://github.com/phated/gulp-jade) | 
| js |  JavaScript ファイルの結合、圧縮、`*.min.js` にリネーム | [gulp-concat](https://github.com/contra/gulp-concat), [gulp-uglify](https://github.com/terinjokes/gulp-uglify), [gulp-rename](https://github.com/hparra/gulp-rename) | 
| sass | ソースマップの作成、`*.scss` ファイルの globbing、Sass ファイルを CSS にコンパイルする |[node-sass](https://github.com/sass/node-sass), [gulp-css-globbing](https://github.com/jsahlen/gulp-css-globbing), [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)　|
| watch | ファイルの監視 |-|
| default | 上記タスクを実行する |-|

### Foundation

| タスク名  | 説明  |
|---|---|
| npm:install | Foundation のインストール |
| install:foundation | `bash src/shell/foundation.sh` を実行 |
| init | `npm:install` と `install:foundation` を実行 |

**Windows では shell スクリプトが実行できないので注意してください。**

## オプション

### プロキシモード

1. gulp をプロキシモードで実行する場合、`gulpfile.js` の18行目を任意のホスト名に書き換えてください。


        'vhost'          : 'example.dev'
    

1.  gulp を起動します。


        $ npm run gulp


### autoprefix

オートプレフィックスは、CSS のベンダープレフィックスを自動で生成してくれるツールです。
オートプレフィックスを特定のブラウザに合わせたい場合、`gulpfile.js` を編集してください。

```javascript
.pipe($.autoprefixer({
  browsers: ['last 2 versions', 'ie 10', 'ie 9'], // この行を編集します
  cascade: false
}))
```
参考: [https://github.com/postcss/autoprefixer#browsers](https://github.com/postcss/autoprefixer#browsers)


## サードパーティ製のリソース

### Font Awesome

アイコンフォント

- License:
  - Font License: SIL OFL 1.1
  - Code License: MIT License
- Source: [https://fortawesome.github.io/Font-Awesome/](https://fortawesome.github.io/Font-Awesome/)

~~~
src/
└── fonts/
    └── font-awesome/
~~~

### Foundation

CSS フレームワーク

- License: MIT
- Source: [http://foundation.zurb.com/](http://foundation.zurb.com/)
- Documentation: [http://foundation.zurb.com/sites/docs/](http://foundation.zurb.com/sites/docs/)

~~~
src/
└── scss/
    └── core/
        └── foundation/
            ├── components/
            ├── forms/
            ├── grid/
            ├── typography/
            ├── util/
            ├── _global.scss
            ├── _settings.scss
            └── _foundation.scss
~~~
