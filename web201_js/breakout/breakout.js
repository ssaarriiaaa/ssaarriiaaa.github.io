import {c, bg, canvas, ctx} from "./background.js"
import {audioBounce} from "./audio.js"
import {drawText} from "./text.js";
import {createBlocks} from "./blocks.js";
import {paddle} from "./paddle.js";
import {ball} from "./ball.js";

// make blocks here so game object can be used
let rows = 1;
let cols = 5;
// let numOfBlocks = rows*cols;
let blocks = createBlocks(rows,cols);

let game={
    score: 0,
    pause: true,
    gameOver: false,
    level: 1,
    maxLevel: 3,
    youWin: false,
    nomOfBlocks: rows*cols,
    gameInit: function() {
        if (this.level===1) {
            this.score=0;
        }
    
        rows=this.level;
        numOfBlocks = rows*cols;
        blocks=createBlocks(rows,col);
        ball.init();
        paddle.init();
    }
    }

// background and game
 // 1 get selected file
 fileLoader.addEventListener('change', function (e) {
    // 2 read file
    let fileReader = new FileReader();
    fileReader.readAsDataURL(fileLoader.files[ 0 ]);
    fileReader.addEventListener('load', function (e) {
      bg.src=fileReader.result;
      bg.addEventListener('load',function(e){
        c.drawImage(bg,0,0,600,600);
      });
    });
  });

// OLD BACKGROUND
// bg.src="breakout_bg.avif";
// bg.addEventListener("load", function(){
//     c.drawImage(bg,0,0,bg.width/5.04,bg.height/5.04)
// })

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
    if (!game.gameOver){
        game.pause=!game.pause;
    }
    if (game.gameOver){
        game.gameOver=false;
        game.pause=false;
        paddle.init();
        ball.init();
    }
    if (game.youWin) {
        game.youWin=false
        game.pause=false;
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
drawText(1, "SCORE: "+game.score, 5, 5, "blue");
drawText(1, "LEVEL: "+game.level, 150, 5, "blue");
blocks.forEach(row => {
    row.forEach(block => {
    block.draw();
    });
});

// game loop
function loop() {
    requestAnimationFrame(loop);
    if(game.pause) return;
    
    // clear
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // draw
    drawText(1, "SCORE: "+game.score,5,5,"blue");
    drawText(1, "LEVEL: "+game.level, 150, 5, "blue");
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

export {rows, cols, blocks, game, left, right};