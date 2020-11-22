class Log extends BaseClass{
    constructor(x,y){
      super(x,y,100,100);
      this.image = loadImage("sprites/tree.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }