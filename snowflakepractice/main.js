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
requestAnimationFrame(draw);
function draw(){
    ctx.clearRect(0,0,cnv.width,cnv.height);
    for (let i = 0; i < bubbles.length; i++){
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
        bubbleClicked(bubbles[i]);
        if (bubbles[i].y + bubbles[i].r  >= cnv.height){
            bubbles[i].y = cnv.height -bubbles[i].r
            bubbles[i].speed = bubbles[i].speed * -1
        }
        if (bubbles[i].y < -200){
            bubbles[i].y = -199
            bubbles[i].speed = bubbles[i].speed * -1
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