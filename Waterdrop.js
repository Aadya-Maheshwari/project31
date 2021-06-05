class Waterdrpo{
    constructor(x,y){
       var option={
           
           restitution:0.8,
           friction:0.1,
         
       }
        this.body=Bodies.circle(x,y,50,option);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
