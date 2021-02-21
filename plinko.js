 class plinko{
   constructor(x,y,r){
     var options={
      isStatic:true
     }
     //Create a circle
     this.body=Bodies.circle(x,y,r,options);
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
     
     fill(255);
     rectMode(CENTER);
     circle(pos.x,pos.y,17);
   }
 }
