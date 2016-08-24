#!/bin/bash

function copy:iconfont() {
  cp ./node_modules/font-awesome/scss/font-awesome.scss ./src/scss/core/_font-awesome.scss
  return
}

if [[ -f ./src/scss/core/_font-awesome.scss ]]
then
  echo 'fonts already exists.'
else
  echo 'start copy fonts.'
  copy:iconfont
fi
