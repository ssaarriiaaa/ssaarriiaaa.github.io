import {c, bg, canvas, ctx} from "background.js"
import {audioBounce, play} from "audio.js"
import {drawText} from "text.js";
import {createBlocks, rows, cols, numOfBlocks, blocks} from "blocks.js";
import {paddle} from "paddle.js";
import {ball} from "ball.js";

let score=0;
let pause=true;
let gameOver=false;
let level=1;
let maxLevel=3;
let youWin=false;

function gameInit() {
    if (level===1) {
        score=0;
    }

    rows=level;
    numOfBlocks = rows*cols;
    blocks=createBlocks(rows,col);
    ball.init();
    paddle.init();
}

// background and game
bg.src="breakout_bg.avif";
bg.addEventListener("load", function(){
    c.drawImage(bg,0,0,bg.width/5.04,bg.height/5.04)
})

// audio
audioBounce.addEventListener('loadedmetadata', function(){
});

// events
let left=null;
let right=null;

window.addEventListener('keydown', function(e){
    if (e.code==="ArrowLeft") {
    left=true;
    }
    else if (e.code==="ArrowRight") {
    right=true;
    }
    else if (e.code==="Space") {
    if (!gameOver){
        pause=!pause;
    }
    if (gameOver){
        gameOver=false;
        pause=false;
        paddle.init();
        ball.init();
    }
    if (youWin) {
        youWin=false
        pause=false;
        paddle.init();
        ball.init();
    }
    }
});

window.addEventListener('keyup', function(e){
    if (e.code==="ArrowLeft") {
        left=false;
    }
    else if (e.code==="ArrowRight") {
        right=false;
    }
    });

// start
ball.draw();
paddle.draw();
drawText(2, "PRESS [SPACE] TO START", 300, 300, "red")
drawText(1, "Score: "+score, 5, 5, "blue");
drawTewt(1, "Level: "+level, 50, 5, "blue");
blocks.forEach(row => {
    row.forEach(block => {
    block.draw();
    });
});

// game loop
function loop() {
    requestAnimationFrame(loop);
    if(pause) return;
    
    // clear
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // draw
    drawText("SCORE: "+score,5,5,"blue");
    drawTewt(1, "Level: "+level, 50, 5, "blue");
    blocks.forEach(row => {
      row.forEach(block => {
        block.draw();
      });
    });
    paddle.draw();
    ball.draw();

    // update
    blocks.forEach(row => {
      row.forEach(block => {
        block.update();
      });
    });
    ball.update();
    paddle.update();
}

loop();

export {score, pause, gameOver, level, maxLevel, youWin, left, right};