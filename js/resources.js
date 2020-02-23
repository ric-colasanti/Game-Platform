
function Resources(images,onLoad){
    
    
    function imageLoader( count,funct){
        var counter = count;
        var fun = funct;
        return function(){
            counter --;
            if(counter<=0){
                funct();
            }
        }
    }
    
    
    this.imageObjects = {}
    var loaded = imageLoader(images.length,onLoad)
    for(i=0; i<images.length; i++){
        img = new Image();
        img.onload = loaded;
        img.src = images[i]
        imgLabAray = images[i].split("/")
        imgLab = imgLabAray[imgLabAray.length-1].split(".")[0]
        this.imageObjects[imgLab]=img;
    }
}

