(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
Copyright (c) 2011 Aaron BLohowiak
Dual licensed under the MIT and GPL licenses.
*/


(function(exports){
  var BASE64URICHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''); 

  exports.newId = function(len, radix) {
    var chars = BASE64URICHARS, newId = [], i=0;
    radix = radix || chars.length;
    len = len || 22;

    for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random()*radix];

    return newId.join('');
  };
  
  exports.withPrefix = function(prefix, len, radius){
    return function(){
      return prefix + exports.newId(len, radius);
    }
  }

})(typeof exports === 'undefined'? this['newId']={}: exports);;
},{}],2:[function(require,module,exports){
var newId = require("uuid-pure").newId;

const generateInterviewId = () => '#' + newId(13);
 
inp = document.getElementById('unique-id');
inp.value = generateInterviewId();

// to show dropdown if Elsewhere is selected
function myFunction_IP() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }
// // to show dropdown if visa is selected
// function yesnoCheck(that) {
//     if (that.value == "visa") {
//         alert("check");
//         document.getElementById("ifYes").style.color = "red";
//     } else {
//         document.getElementById("ifYes").style.color = "blue";
//     }
// }
// // to redirect after submit
// // window.location.href = 'view.html';


},{"uuid-pure":1}]},{},[2])