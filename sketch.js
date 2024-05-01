var img;

function setup(){
  createCanvas(1191, 1684);
  img = loadImage("city reconstruct.png");
  img.resize(1191, 1684);
}

function draw(){
  background(255);
  
  fill(0);
  noStroke();
  
  var tiles = mouseX/10;
  var tileSize = width/tiles;
  
  translate(tileSize/2, tileSize/2);
  
  for (var x = 0; x < tiles; x++) {
      for (var y = 0; y < tiles; y++) {
        
        var c = img.get(int(x*tileSize), int(y*tileSize));
        var size = map(brightness(c), 0, 255, 10, 0);
        
        ellipse(x*tileSize, y*tileSize, size, size);
    }
  }
}