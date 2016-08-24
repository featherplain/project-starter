#!/bin/bash

function copy:foundation() {
  # scss files
  cp ./node_modules/foundation-sites/scss/settings/_settings.scss ./src/scss/core/_settings.scss
  cp ./node_modules/foundation-sites/scss/foundation.scss ./src/scss/core/_foundation.scss
  return
}

if [[ -f ./src/scss/core/_foundation.scss || -f ./src/scss/core/settings.scss ]]
then
  echo 'file already exists.'
else
  echo 'start copy foundation files.'
  copy:foundation
fi
