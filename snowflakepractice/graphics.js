function fill(color){
    ctx.fillStyle = color;
}
function stroke(color){
    ctx.strokeStyle = color;
}
function circle(x,y,r,mode){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode == "fill"){
        ctx.fill();
    }
    else if (mode == "stroke"){
        ctx.stroke();
    }
}
function dist(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

function drawBubble(aBubble){
    stroke(aBubble.color);
    circle(aBubble.x,aBubble.y,aBubble.r,"stroke");
}
function moveBubble(aBubble){
    aBubble.speed += aBubble.accel;
    if(aBubble.speed < -7){
        aBubble.speed = -7
    }
    aBubble.y += aBubble.speed;
    aBubble.x += aBubble.speedX;
}
