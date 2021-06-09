class Waterdrop{
    constructor(x,y){
       var option={
           
           restitution:0.8,
           friction:0.1,
         
       }
        this.body=Bodies.circle(x,y,10,option);
        this.radius=10;
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
    display(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius/2,this.radius);
    }
}
