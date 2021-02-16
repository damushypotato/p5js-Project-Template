const fr = 60;
const sketchHolder = document.getElementById('p5sketch');

function preload() {

    frameRate(fr);

    

}

function setup() {

    let cnv = createCanvas(1200, 700);
    cnv.parent(sketchHolder);

    

}

function draw() {

    background(255)
    drawSprites();

    

}