// draw background
var bgCanvas=document.querySelector("#background");
var c=bgCanvas.getContext("2d");
let bg = new Image();

// draw game
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

export {bgCanvas, c, bg, canvas, ctx};