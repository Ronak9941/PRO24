class Soil{

    constructor(){
        var options = {
            restitution:0.001,
            friction:3.5,
            density:0.2
        }
        this.body = Bodies.circle(300,690,5,options)
        this.radius = 3;
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS);
        fill("brown");
        ellipse(0,0,this.radius,this.radius)
        pop();
    
    }

}