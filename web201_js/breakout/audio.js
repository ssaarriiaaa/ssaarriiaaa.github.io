let audioBounce=new Audio("./bounce.mp3");

function play(audio) {
    audio.volume=0.1;
    let a=audio.cloneNode();
    a.play();
}

export {audioBounce, play};