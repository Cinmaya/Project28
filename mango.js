class Mango{
    constructor(x,y,diameter){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.x=x;
        this.y=y;
        this.diameter=diameter;
        this.image=loadImage("Sprite/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.diameter,options);
        World.add(world,this.body);
    }
    display(){
     push();
     translate(this.body.position.x,this.body.position.y)
     imageMode(CENTER);
     ellipseMode(CENTER);
     image(this.image,0,0,this.diameter,this.diameter);
     pop();
    }
}

