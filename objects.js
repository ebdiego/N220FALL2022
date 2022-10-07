
//Eberto Diego
// N220
// 09/15/2022





let bouncyBall = {
color: "#FF0000",
width: 20,
height: 10,
x: 200,
y: 500,
}
  
// object

function drawBall() {



    background(220);


    circle(bouncyBall.x, bouncyBall.y, bouncyBall.width, bouncyBall.height);



}

//draw ball onto screen

let rectangle = {

width: 50,
height: 100,
x: 200,
y:100,


}

let rectangle2 = {


    width: 50,
    height: 100,
    x:600,
    y:100,

}


// making both rectangles

function setup () {

createCanvas(800, 500);


}



function drawRect() {

    rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    rect(rectangle2.x, rectangle2.y, rectangle2.width, rectangle2.height);



    if (keyIsDown(UP_ARROW)) {
        //change properties
      }

      if (keyIsUp(DOWN_ARROW)) {
        //change properties
      }
}


