import '@babel/polyfill'
import LazyLoad from 'vanilla-lazyload'
require('es6-promise/auto');

import '../sass/main.scss'

var lazyLoadInstance = new LazyLoad({
   elements_selector: ".lazy"

});
