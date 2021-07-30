class Snow{

constructor(x,y){
 this.image = loadImage("snow5.webp");
 var bounce = {

 restitution: 0.8,
 friction: 0.8

 }
 this.body = Bodies.circle(x,y,40,bounce);
 this.r = 100;
 World.add(world,this.body);

}

display(){

push();
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);

pop();

}

}
