 class particle{
   constructor(x,y,r){
     var options={
      restitution:0.4
     }
     //Create a circle
     this.body=Bodies.circle(x,y,10,options);
     this.color = color(random(0,255),random(0,255),random(0,255));
     //Add it to the world
     World.add(world,this.body);
  }
   //Define the x and y positions
  x_pos(){
      return this.body.position.x ;
}
   
     y_pos(){
      return this.body.position.y ;
}
   
   display(){
     //Create a variable for the position of the body
     var pos = this.body.position
     var angle = this.body.angle
     
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     noStroke();
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,10,10);
     pop();
   }
 }


