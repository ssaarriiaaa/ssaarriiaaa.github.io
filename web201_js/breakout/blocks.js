import {ctx} from "background.js"

let block = {
  x: 200,
  y: 100,
  w: 80,
  h: 20,
  exist: true,

  draw: function() {
    if (!this.exist) return;
    let blockg=ctx.createLinearGradient(this.x,this.y,this.x+this.w,this.y+this.h);
    blockg.addColorStop(0,"white");
    blockg.addColorStop(1,"blue");
    ctx.beginPath();
    ctx.fillStyle=blockg;
    ctx.rect(this.x,this.y,this.w,this.h);
    ctx.fill();
  }
}
  
function createBlocks(rows, cols) {
  let blocks=[];
  for (let r=0;r<rows;r++) {
    let newRow=[];
    for (let c=0; c<cols; c++) {
      let b = {...block};
      b.r=r;
      b.c=c;
      b.x=c*(b.w+30)+50;
      b.y=r*(b.h+20)+50;
      newRow.push(b);
    }
    blocks.push(newRow);
  }
  return blocks;
}
let rows = 1;
let cols = 5;
let numOfBlocks = rows*cols;
let blocks = createBlocks(rows,cols);

export {block, createBlocks, rows, cols, numOfBlocks, blocks}