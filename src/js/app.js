'use strict';

// import './classes/scroll';

import smoothScroll from 'smoothscroll';

const exampleBtn = document.getElementById('start');
const exampleDestination = document.getElementById('end');

const handleClick = event => {
  event.preventDefault();

  smoothScroll(exampleDestination);
};
exampleBtn.addEventListener('click', handleClick);
