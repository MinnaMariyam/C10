var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["89179eb9-b8e0-45c8-997e-c8e6f7639bd6"],"propsByKey":{"89179eb9-b8e0-45c8-997e-c8e6f7639bd6":{"name":"ball","sourceUrl":null,"frameSize":{"x":32,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"wBh52Zg6seU5uLLWkJ5BHEc54LjzaEDh","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":27},"rootRelativePath":"assets/89179eb9-b8e0-45c8-997e-c8e6f7639bd6.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// creating first row
var brick1 = createSprite(25, 75,50,50);
brick1.shapeColor="pink";
var brick2 = createSprite(75, 75,50,50);
brick2.shapeColor="green";
var brick3 = createSprite(125, 75,50,50);
brick3.shapeColor="blue";
var brick4 = createSprite(175, 75,50,50);
brick4.shapeColor="purple";
var brick5 = createSprite(225, 75,50,50);
brick5.shapeColor="brown";
var brick6 = createSprite(275, 75,50,50);
brick6.shapeColor="red";
var brick7 = createSprite(325, 75,50,50);
brick7.shapeColor="yellow";
var brick8 = createSprite(375, 75,50,50);
brick8.shapeColor="orange";

// creating second row
var brick9 = createSprite(25, 125,50,50);
brick9.shapeColor="orange";
var brick10 = createSprite(75, 125,50,50);
brick10.shapeColor="yellow";
var brick11 = createSprite(125, 125,50,50);
brick11.shapeColor="red";
var brick12 = createSprite(175, 125,50,50);
brick12.shapeColor="brown";
var brick13 = createSprite(225, 125,50,50);
brick13.shapeColor="purple";
var brick14 = createSprite(275, 125,50,50);
brick14.shapeColor="blue";
var brick15 = createSprite(325, 125,50,50);
brick15.shapeColor="green";
var brick16 = createSprite(375, 125,50,50);
brick16.shapeColor="pink";

//creating paddle and ball
var paddle=createSprite(200,300,100,20);
paddle.shapeColor="black";
var ball=createSprite(200,200,20,20);
ball.shapeColor="black";
ball.setAnimation("ball");

// creating variable score and gameState 
var Score=0;
var gameState="serve";
 


function draw() {
background("white");

// creating score
textSize(18);
stroke("red");
fill("black");
text("Score: "+  Score,310,20);

// making the ball bounceoff the paddle and edges
createEdgeSprites();
ball.bounceOff(paddle);
ball.bounceOff(topEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);

if (Score==16) {
textSize(25);
stroke("red");
text("You Win",150,150);  
}  

if (gameState=="serve") {
// creating Welcome message
textSize(20);
text("Welcome,Press enter key to start the game",5,200);

if (keyDown("ENTER")) {
ball.velocityX=5;
ball.velocityY=4;
gameState="play";
}
}

if (gameState=="play") {
// moving the paddle along with X axis
paddle.x=World.mouseX; 

if (ball.isTouching(bottomEdge)||Score==16) {

gameState="end" ; 
}
}

if (gameState=="end") {
ball.velocityX=0;
ball.velocityY=0;

// creating gameover massage
textSize(18);
stroke("red");
fill("black");
text("Game Over!.Your Score is "+  Score,70,200);
}

// destroying the bricks when the ball is touching the bricks
if(ball.isTouching(brick1)){
  brick1.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick2)){
  brick2.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick3)){
  brick3.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick4)){
  brick4.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick5)){
  brick5.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick6)){
  brick6.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick7)){
  brick7.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick8)){
  brick8.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick9)){
  brick9.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick10)){
  brick10.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick11)){
  brick11.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick12)){
  brick12.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick13)){
  brick13.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick14)){
  brick14.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick15)){
  brick15.destroy();
  Score=Score+1;
}

if(ball.isTouching(brick16)){
  brick16.destroy();
  Score=Score+1;
}

drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
