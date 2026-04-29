function preload(){

}

function setup(){

}

function draw(){
    
}

class Arrow(){
    constructor(label,cx,cy,w,h,id){
    this.label = label; 
    this.cx = cx;
    this.cy = cy;
    this.w = w; 
    this.h = h; 
    this.id = id;
    this.enabled = true;
  }

    draw(){
        const hover = this.isClicked(mouseX,mouseY);
        //fill(hover? color1:color2);
        //stroke(color 3); 
        strokeWeight(1);
        rect(this.cx-this.w/2, this.cy-this.h/2, this.w, this.h, 5);
        noStroke();
      }
}

class NPCCard(){
    
}

class StatPanel(){

    
}

class Backgrounds(){

}

class BGM(){

    
}
