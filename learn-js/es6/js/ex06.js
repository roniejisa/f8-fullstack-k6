///ES5: CommonJS --> Chỉ chạy được trên Server
//ES6: ES Module --> Chạy được cả server và browser

import F8, { a, b as c, getA } from './home.js';

console.log(F8);
console.log(a, c, getA());