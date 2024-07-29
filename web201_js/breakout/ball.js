import {canvas, ctx} from "./background.js"
import {audioBounce, play} from "./audio.js"
import {collisionOnTop, collisionOnLeft, collisionOnRight, collisionOnBottom} from "./collision.js";
import {drawText} from "./text.js";
import {paddle} from "./paddle.js";
import {game, rows, cols, blocks} from "./breakout.js"

let maxAngle=160;
let minAngle=20;

let ball = {
    x: canvas.width/2,
    y: canvas.height-paddle.h-15,
    r: 15,
    dx: 2, // delta x
    dy: -8,
    
    init: function() {
    this.x=canvas.width/2;
    this.y=canvas.height-paddle.h-15;
    this.dx=0;
    this.dy=-8;
    },

    draw: function () {
        let ballg= ctx.createRadialGradient(this.x-5,this.y-5,this.r/8,this.x-5,this.y-5,this.r);
        ctx.beginPath();
        ballg.addColorStop(0,"white");
        ballg.addColorStop(1,"black");
        ctx.fillStyle = ballg;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    },
    update: function() {
        this.x+=this.dx;
        this.y-=this.dy;

        // ball hitting blocks
        for (let r=0; r<rows; r++) {
            for (let c=0; c<cols; c++) {
            if (blocks[r][c].exist && (collisionOnTop(this,blocks[r][c])
            || collisionOnLeft(this,blocks[r][c])
            || collisionOnRight(this,blocks[r][c])
            || collisionOnBottom(this,blocks[r][c]))) {
                blocks[r][c].exist=false;
                this.dy*=-1;
                play(audioBounce);

                game.score+=10;
                game.numOfBlocks--;
                if (game.numOfBlocks===0) {
                    game.level++;

                    if (game.level > game.maxLevel) {
                        game.youWin=true;
                        drawText(2, "YOU WIN! PRESS [SPACE] TO RESTART", 300, 300, "red")
                    }
                    
                    game.gameInit();
                }
            }
        }
    }
    
    // ball hitting sides of the canvas
    if (ball.x+ball.r > canvas.width || ball.x < 15) {
        this.dx*=-1;
        play(audioBounce);
    }

    // ball hitting top of canvas
    if (ball.y < 15) {
        this.dy*=-1;
        play(audioBounce);
    }

    // ball hitting bottom of canvas
    if (ball.y+ball.r > canvas.height+ball.r*2) {
        this.dy*=-1;
        game.pause=true;
        game.gameOver=true;
        drawText(2, "GAME OVER! PRESS [SPACE] TO TRY AGAIN", 300, 300, "red")
    }

    // ball hitting paddle
    if (collisionOnTop(this,paddle)) {
        console.log("ball hit paddle")

        let hitX=ball.x-paddle.x;
        let angle=maxAngle-Math.floor((maxAngle-minAngle)/paddle.w*hitX);
        let energy=(this.dx**2+this.dy**2)**0.5;
        this.dx=energy*Math.cos(angle*Math.PI/180);
        this.dy=energy*Math.sin(angle*Math.PI/180);

        play(audioBounce);
    }
    }
}

export {ball};