class Waterdrpo{
    constructor(x,y){
       var option={
           isStatic:false,
           restitution:0.8,
           friction:0.1,
           density:1
       }
        this.body=Bodies.circle(x,y,50,opition);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        push()
        var maxDrop=100;
        for(var i=0;i<maxDrop;i++){
            drop.push(new createDrop (random(0,400)),(random(0,400)));
        }
        pop()
    }
}