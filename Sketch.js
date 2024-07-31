let cor;
let Horizontal;
let Vertical; 

function setup() {

    createCanvas(1000, 800);
    background("black");
    cor =color(random(0, 55), random(0, 155), random(0,255));
    Vertical = 300;
    Horizontal = 200;
 }
    
function draw() {
    
     fill(cor);
    circle(Horizontal, Vertical, 100);
    
    if(mouseX < Horizontal) {
    Horizontal--
    }
    if(mouseX > Horizontal) {
    Horizontal++
}
if(mouseY < Vertical) {
    Vertical--
}
    
if(mouseY > Vertical) {
    Vertical++
} 
    if(mouseIsPressed) {
    cor = color(random(0, 755), random(0, 755), random(0,755));
}
}
