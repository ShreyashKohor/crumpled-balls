class Paper{
   constructor(x,y,r) {
   var options = {
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
   }



 
  this.x=50;
  this.y=100;
  this.r=10;
  this.body = Matter.Bodies.circle(this.x,this.y,this.r,options,0)
  
  World.add(world,this.body)
   } 
  display(){
  var pos =this.body.position;
 
  push()
  translate(pos.x,pos.y)
  rectMode(CENTER)
  strokeWeight(3)
  stroke("white")
  fill(255,0,255)
  ellipse(800,570,20,20)
   pop()
  }
}