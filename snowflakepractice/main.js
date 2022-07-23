let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;
let mouseX;
let mouseY;
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
let mouseIsPressed = false;
let bubbles = [];
for (let n = 1; n < 15; n++){
    bubbles.push(newRandomBubble());
}
function more(){
    bubbles.push(newRandomBubble());
}
function less(){
    bubbles.pop();
}

requestAnimationFrame(draw);
function draw(){
    ctx.clearRect(0,0,cnv.width,cnv.height);
    for (let i = 0; i < bubbles.length; i++){
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
        bubbleClicked(bubbles[i]);
        if (bubbles[i].y + bubbles[i].r  >= cnv.height){
            bubbles[i].y = cnv.height -bubbles[i].r
            bubbles[i].speed = bubbles[i].speed * -0.97
        }
        if (bubbles[i].y < -200){
            bubbles[i].y = -199
            bubbles[i].speed = bubbles[i].speed * -0.97
        }
        if (bubbles[i].x - bubbles[i].r < 0){
            bubbles[i].x = bubbles[i].r
            bubbles[i].speedX = bubbles[i].speedX * -1
        } else if(bubbles[i].x + bubbles[i].r > cnv.width){
            bubbles[i].x = cnv.width -bubbles[i].r
            bubbles[i].speedX = bubbles[i].speedX * - 1
        }
    }
    requestAnimationFrame(draw);
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

function mousedownHandler(event) {
    mouseIsPressed = true;
    var width = window.innerWidth;
    mouseX = event.clientX - width/2 + 400;
    mouseY = event.clientY;
}
function mouseupHandler() {
    mouseIsPressed = false;
}
function bubbleClicked(aBubble) {
    if (dist(mouseX, mouseY, aBubble.x, aBubble.y) < aBubble.r && mouseIsPressed) {
        aBubble.speed += -1
        aBubble.speedX = randomInt(-1,2)
    }
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