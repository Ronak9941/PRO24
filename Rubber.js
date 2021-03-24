class Rubber{
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0.2,
            density:0.2
        }
        this.body = Bodies.circle(x,y,50,options)
        this.radius = 50;
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS);
        fill("blue");
        strokeWeight(4);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}