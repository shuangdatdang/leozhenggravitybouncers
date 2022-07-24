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
function randomRGB() {
    let r = randomInt(0,256);
    let g = randomInt(0, 256);
    let b = randomInt(0, 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
function randomInt(low,high){
    return Math.floor(Math.random() * (high -low) + low);
}
function newRandomBubble(){
    return{
        x: randomInt(0, cnv.width),
        y:randomInt(0, cnv.height * 3/4),
        r:randomInt(22,50),
        color: randomRGB(),
        speed: 0,
        accel: 0.05,
        speedX: randomInt(-1, 2)
    };
}
function mousedownHandler() {
    mouseIsPressed = true;
}
function mouseupHandler() {
    mouseIsPressed = false;
}
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(event){
    mouseX = event.clientX - window.innerWidth/2 + 400;
    mouseY = event.clientY;
}
function bubbleClicked(aBubble) {
    if (dist(mouseX, mouseY, aBubble.x, aBubble.y) < aBubble.r && mouseIsPressed) {
        aBubble.speed += -3
        aBubble.speedX = randomInt(-1,2)
    }
}