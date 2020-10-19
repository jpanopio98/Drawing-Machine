


let array = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  strokeWeight(5);
  noFill();
}

function draw() {
  if (mouseIsPressed == true) {

    //line(mouseX, mouseY,pmouseX,pmouseY);
    array.push([mouseX,mouseY])
  }
}

function keyTyped(){


  if(key == 's'){
    //saves image
    saveCanvas('filename', 'png');
  }else if (key == 'd') {
    //displays image

beginShape();
    for (let i = 0;i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
endShape();
  }

  return false;
}
