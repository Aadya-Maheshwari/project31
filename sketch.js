const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;
var maxDrop=100;

var thunderCreatedFrame=0;

function preload(){
   thunder1=loadImage("thunderbolt/1.png");
   thunder2=loadImage("thunderbolt/2.png");
   thunder3=loadImage("thunderbolt/3.png");
   thunder4=loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    if(frameCount % 200===0){
        for(var i=0;i<maxDrop;i++){
            drops.push(new Waterdrop (random(0,400)),(random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background(0); 
    
    if(frameCount % 100===0){
        thunder=createSprite(200,500);

        var rand=Math.round(random(1,6));
            switch(rand){
                case 1: thunder.addImage(thunder1);
                break;
                case 2: thunder.addImage(thunder2);
                break;
                case 3: thunder.addImage(thunder3);
                break;
                case 4: thunder.addImage(thunder4);
                break;
                default:break;
            }
    }
    
   

    umbrella.display();
    for(var i=0;i<maxDrop;i++){
        drops[i].display();
    }

 
}   

