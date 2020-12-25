class Bomb extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("images/bomb.png")
    }
    
  
    display() {
      
      fill('yellow')
      super.display();
    }
  }