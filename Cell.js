
class Cell {
  constructor(x, y, w, shape) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.shape = shape;
  }
  
  show() {
    stroke(0);
    fill(15, 125, 155);
    rect(this.x * this.w, this.y * this.w, w, w);
    if (this.shape == true) {
      ellipseMode(CORNER);
      fill(230);
      circle(this.x*this.w, this.y*this.w, this.w);
    }else if (this.shape == false) {
      ellipseMode(CORNER);
      fill(25);
      stroke(255);
      circle(this.x*this.w, this.y*this.w, this.w);  
    }
  }
}
