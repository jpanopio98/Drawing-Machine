


let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  noFill();
}

function draw() {
    background(220, 50, 133,5);

    strokeWeight(strokeWidth);


    noiseOffset += 0.01;
    strokeWidth = noise(noiseOffset) * 100;

    drawGrid();
    stroke(map(mouseX,0,600,0,255,true))
    line(width - mouseX, height - mouseY, width-pmouseX, height- pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }


function keyTyped(){


  if(key == 's'){
    //saves image
    saveCanvas('filename', 'png');
  }else if (key == 'c') {
    //clears canvas
    clear();


beginShape();
    for (let i = 0;i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
endShape();
  }

  return false;
}


function drawGrid(){

numCells = 20;

  for (let i = 0; i <= width; i+= width/numCells){
    for (let j = 0; j <= height; j+= height/numCells){
      rect(i,j,width/numCells,height/numCells);
    }
  }
}
