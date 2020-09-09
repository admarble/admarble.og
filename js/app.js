import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');
require('imagekit-javascript');
require('gsap');
require('gsap/ScrollTrigger');
require('flickity');
require('marquee3000');
require('./playground');
require('./extra');
require('./footer');
require('./scroll');
require('lodash');
require('mailgo');
require('./marquee');

$(document).foundation();