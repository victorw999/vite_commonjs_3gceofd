// #A
// ESM Syntax
import myModule from './myModule/myModule.js';
myModule.myFunction('#AAA');

//#B
// CJS Syntax
const myMod = require('./myModule/myModule.js');
myMod.myFunction('#BBB');
