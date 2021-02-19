
var music;
var box1, box2, box3 , box4, box5;
var box6, box7, box8 , box9, box10;
var box11, box12, box13 , box14, box15;
var box16, box17, box18 , box19, box20;
function preload(){
    backgroundImg = loadImage("thunder.png");
    manImg = loadImage("man.png");
}


function setup(){
    createCanvas(600,600);


    box1 = createSprite(200,200,10,10);
    box1.shapeColor  = "purple";

    box2 = createSprite(180,220,10,10);
    box2.shapeColor  = "purple";
    

    box3 = createSprite(240,240,10,10);
    box3.shapeColor  = "purple";

   box4 = createSprite(260,260,10,10);
   box4.shapeColor  = "purple";

   box5 = createSprite(280,280,10,10);
   box5.shapeColor  = "purple";

   box6 = createSprite(300,300,10,10);
    box6.shapeColor  = "purple";

    box7 = createSprite(320,320,10,10);
    box7.shapeColor  = "purple";
    

    box8 = createSprite(340,340,10,10);
    box8.shapeColor  = "purple";

   box9 = createSprite(360,360,10,10);
   box9.shapeColor  = "purple";

   box10 = createSprite(380,380,10,10);
   box10.shapeColor  = "purple";
  
   


}

function draw() {
    background("black");
    
    
    drawSprites();
}
