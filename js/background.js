function Background(canvas,context,img,offset,vx){
    this.canvas = canvas;
    this.context = context;
    this.img = img;
    this.yOffset = offset;
    this.xpos = 0; 
    this.vx = vx  
}

Background.prototype.draw =  function(delta){
    this.xpos = this.xpos - delta * this.vx ;
    this.context.drawImage(this.img,this.xpos,this.yOffset);
    var imgEdge = this.xpos+this.img.width
    xOffset = imgEdge-this.canvas.width
    if(xOffset<0){
        this.context.drawImage(this.img,imgEdge,this.yOffset);
    }
    if(imgEdge<=0){
        this.xpos=imgEdge;
    }  
};
