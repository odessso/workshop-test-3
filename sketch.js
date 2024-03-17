let img; 

function preload() {
  img = loadImage('images/icarus.jpeg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(0); 
  drawImage(100, 100, 200, 200); 
}

function drawImage(x, y, w, h) {
  let scaleFactor = min(400 / img.width, 400 / img.height);
  
  let imgWidth = img.width * scaleFactor;
  let imgHeight = img.height * scaleFactor;

  let imgX = (width - imgWidth) / 2; 
  let imgY = (height - imgHeight) / 2; 
  
  image(img, imgX, imgY, imgWidth, imgHeight);
}

