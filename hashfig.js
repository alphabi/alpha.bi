"use strict";

let hash = '9f5dcee262101684d4a1eed3d45f6822';
let alphabi = 'teaspoonfuls unconsciously ordained preferable vilification enabling hoodwinking skeletons consequences trumping misfortunes parallel plague';
let bitQuartet = (val) => {
  let bi = val.toString(2); return '0000'.slice(bi.length) + bi;
};
let bitSpans = (bits) => {
  return bits.replace(/(.)/g,'<span class="ab$1">$1</span>');
};
let figQuartet = (hex) => {
  return '<span class="quartet">'
    +'<span class="digit">'+hex+'</span>'
    +'<span class="bits">'+bitSpans(bitQuartet(parseInt(hex,16)))+'</span>'
    +'</span>';
};
let bitColoredLetters = (char) => /[a-zA-Z]/.test(char) ?
  ('<span class="ab'+(+(char.toLowerCase()>'m'))+'">'+char+'</span>') : char;

//console.log(hash.replace(/./g,figQuartet));
//console.log(hash.replace(/./g,hex => bitQuartet(parseInt(hex,16))));
console.log(alphabi.replace(/./g,bitColoredLetters));
