'use strict';
var Weight = require('./js/weight');
var Plate = require('./js/plate');

var w = new Weight(45);
console.log(w);

var w2 = new Weight();
console.log(w2);
console.log(w2 == false);
console.log(w2 == {});

var p1 = new Plate();
console.log(p1);