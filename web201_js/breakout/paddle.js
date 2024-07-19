import {canvas, ctx} from "background.js"
import {left, right} from "breakout.js";

let paddle = {
    x: canvas.width / 2 - 80,
    y: canvas.height - 20,
    w: 160,
    h: 20,
    dx: 5,
    init: function() {
        this.x=canvas.width / 2 - this.w/2;
        this.y=canvas.height - this.h;
    },

    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = 'black';
        ctx.fill();
    },
    update: function() {
        if (left) {
        if (this.x-this.dx>=0) this.x-=this.dx;
        }
        if (right) {
        if (this.x+this.w+this.dx<=canvas.width) this.x+=this.dx;
        }
    }
}

export {paddle};