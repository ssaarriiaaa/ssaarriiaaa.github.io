function drawText(num,text,x,y,color) {
    if (num===1) {
        ctx.beginPath();
        ctx.font="20px monospace";
        ctx.textBaseline="top";
        ctx.textAlign="left";
        ctx.fillStyle=color;
        ctx.fillText(text,x,y);
    } else if (num===2) {
        ctx.beginPath();
        ctx.font="25px monospace";
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        ctx.fillStyle=color;
    }
}

export {drawText};