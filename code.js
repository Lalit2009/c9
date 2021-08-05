var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["09ab797a-1c94-40fd-9a73-bd987db7557c","6d315b0c-bdae-4715-a4fe-f7c24fd591f9","faabf27f-6d15-441c-b536-7422e0cee7fc","807ac060-8e80-4906-8c41-ba87e36b04e8"],"propsByKey":{"09ab797a-1c94-40fd-9a73-bd987db7557c":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"6d315b0c-bdae-4715-a4fe-f7c24fd591f9":{"name":"car_green_1","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"faabf27f-6d15-441c-b536-7422e0cee7fc":{"name":"motoside_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/XhF6XWCD9VXdhJ4xGrFZGvqk9uM_AYNa/category_vehicles/motoside_08.png","frameSize":{"x":284,"y":171},"frameCount":1,"looping":true,"frameDelay":2,"version":"XhF6XWCD9VXdhJ4xGrFZGvqk9uM_AYNa","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":171},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XhF6XWCD9VXdhJ4xGrFZGvqk9uM_AYNa/category_vehicles/motoside_08.png"},"807ac060-8e80-4906-8c41-ba87e36b04e8":{"name":"motoside_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3vjOzQ5K.aHE0DEc.I_iLH0I_IgzH9G9/category_vehicles/motoside_09.png","frameSize":{"x":244,"y":153},"frameCount":1,"looping":true,"frameDelay":2,"version":"3vjOzQ5K.aHE0DEc.I_iLH0I_IgzH9G9","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":153},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3vjOzQ5K.aHE0DEc.I_iLH0I_IgzH9G9/category_vehicles/motoside_09.png"}}};
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

var life =0;


var worker = createSprite(1,200,20,20);


var car1 = createSprite(96,3,20,70)
car1.setAnimation("car_blue_1");
car1.scale = 0.4


var car2 = createSprite(247,3,20,70)
car2.setAnimation("car_green_1");
car2.scale = 0.4


var bike1 = createSprite(175,397,20,50)
bike1.setAnimation("motoside_08_1");
bike1.scale = 0.2


var bike2 = createSprite(319,394,20,50)
bike2.setAnimation("motoside_09_1");
bike2.scale = 0.2


var office = createSprite(394,200,20,100)
office.shapeColor = "red"









function draw() {

background("white")
textSize(25)
text("life =  "+life,300,25)

  



if (keyDown(ENTER)) {
  car1.velocityX = 0
  car1.velocityY = 8
  car2.velocityX = 0
  car2.velocityY = 8
  bike1.velocityX = 0
  bike1.velocityY = -8
  bike2.velocityX = 0
  bike2.velocityY = -8

  
}




createEdgeSprites()

worker.bounce(leftEdge)
worker.bounce(rightEdge)

car1.bounceOff(topEdge)
car1.bounceOff(bottomEdge)
car2.bounceOff(topEdge)
car2.bounceOff(bottomEdge)

bike1.bounceOff(topEdge)
bike1.bounceOff(bottomEdge)
bike2.bounceOff(topEdge)
bike2.bounceOff(bottomEdge)


if (keyDown(RIGHT_ARROW)) {
  worker.x = worker.x + 4
}

if (keyDown(LEFT_ARROW)) {
  worker.x = worker.x - 4
}


if (worker.isTouching(car1) ||
worker.isTouching(car2) ||
worker.isTouching(bike1) ||
worker.isTouching(bike2))

{
  worker.x = 1
  worker.y = 200
  life = life+1
  
}

if (worker.isTouching(office)) {
  textSize(50)
  text("You win!",200,200)
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
