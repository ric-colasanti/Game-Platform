function Tile(canvas,context,img,offset,xpos,vx){
    this.canvas = canvas;
    this.context = context;
    this.img = img;
    this.yOffset = offset;
    this.xpos = xpos; 
    this.vx = vx  
}

Tile.prototype.draw =  function(delta){
    this.xpos = this.xpos - delta * this.vx ;
    if((this.xpos>=-this.img.width)&&(this.xpos<=this.canvas.width)){
        this.context.drawImage(this.img,Math.floor(this.xpos),Math.floor(this.yOffset));
    }
};
