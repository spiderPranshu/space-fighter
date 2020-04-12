var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ad9f2a49-2335-492e-abc4-5d273e3abd8d","4a13c08d-2105-462b-9f39-e7764cd7030e","6e50eb5c-8451-4a7c-a944-09a3d4901e38","563e2715-27c3-4bfe-8b84-33fe2c23572b","4d5bf550-8f21-477e-bf27-6137105da5f9","00ac8153-041d-4758-8bfe-6ccfda82fd00","2410b3b3-2783-46ce-8526-f3f3bc5f2059","9cff4f6d-2dcd-4946-88ab-d8f38607eaae","dfc2acea-d8d9-4271-ac34-8864ada6822b"],"propsByKey":{"ad9f2a49-2335-492e-abc4-5d273e3abd8d":{"name":"player","sourceUrl":null,"frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":12,"version":"Epo1dRtSzwABR6kGVVKS4LGQkGvE5uZU","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/ad9f2a49-2335-492e-abc4-5d273e3abd8d.png"},"4a13c08d-2105-462b-9f39-e7764cd7030e":{"name":"alien","sourceUrl":null,"frameSize":{"x":235,"y":215},"frameCount":1,"looping":true,"frameDelay":12,"version":"i1_Gk.zvU0Dze55m33yx1ftdO.l21sDF","loadedFromSource":true,"saved":true,"sourceSize":{"x":235,"y":215},"rootRelativePath":"assets/4a13c08d-2105-462b-9f39-e7764cd7030e.png"},"6e50eb5c-8451-4a7c-a944-09a3d4901e38":{"name":"1","sourceUrl":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/6e50eb5c-8451-4a7c-a944-09a3d4901e38.png","frameSize":{"x":222,"y":227},"frameCount":1,"looping":true,"frameDelay":4,"version":"HB56Wmwpa73sotfa1xxV3QQfvmXWFNjQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":222,"y":227},"rootRelativePath":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/6e50eb5c-8451-4a7c-a944-09a3d4901e38.png"},"563e2715-27c3-4bfe-8b84-33fe2c23572b":{"name":"2","sourceUrl":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/563e2715-27c3-4bfe-8b84-33fe2c23572b.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"PB_Gsn.L.JYDPZTWBpLwjHuukHDlu7Nv","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/563e2715-27c3-4bfe-8b84-33fe2c23572b.png"},"4d5bf550-8f21-477e-bf27-6137105da5f9":{"name":"3","sourceUrl":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/4d5bf550-8f21-477e-bf27-6137105da5f9.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"ziKuA56mGiVphg0MhRWuMizuIQ_Irh6n","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/4d5bf550-8f21-477e-bf27-6137105da5f9.png"},"00ac8153-041d-4758-8bfe-6ccfda82fd00":{"name":"4","sourceUrl":null,"frameSize":{"x":261,"y":193},"frameCount":1,"looping":true,"frameDelay":12,"version":"YaAvVXuPe9IEeiLbERq9sPctvGMwd1fL","loadedFromSource":true,"saved":true,"sourceSize":{"x":261,"y":193},"rootRelativePath":"assets/00ac8153-041d-4758-8bfe-6ccfda82fd00.png"},"2410b3b3-2783-46ce-8526-f3f3bc5f2059":{"name":"5","sourceUrl":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/2410b3b3-2783-46ce-8526-f3f3bc5f2059.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"gyaRXdEulQva4Jm7aIG.rPARm3GoAUkt","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/2410b3b3-2783-46ce-8526-f3f3bc5f2059.png"},"9cff4f6d-2dcd-4946-88ab-d8f38607eaae":{"name":"6","sourceUrl":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/9cff4f6d-2dcd-4946-88ab-d8f38607eaae.png","frameSize":{"x":125,"y":238},"frameCount":1,"looping":true,"frameDelay":4,"version":"mJjgk37lq6ibudinqO2.tYYRF7FbYfO2","loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":238},"rootRelativePath":"assets/v3/animations/zaHX9NRbwW-QAZasZFNkMTjBbNffEZwoAKcnnuy-a9s/9cff4f6d-2dcd-4946-88ab-d8f38607eaae.png"},"dfc2acea-d8d9-4271-ac34-8864ada6822b":{"name":"bullet","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"u2YiDl_bAPiLUj643sM49znCgo3wfmLf","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/dfc2acea-d8d9-4271-ac34-8864ada6822b.png"}}};
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

var player=createSprite(200,375,1,1);
player.setAnimation("player");
player.scale=0.3;

var alien=createSprite(200,55,1,1);
alien.setAnimation("alien");
alien.scale=0.5;

var a=createSprite(35,60,1,1);
a.setAnimation("1");
a.scale=0.2;

var b=createSprite(105,60,1,1);
b.setAnimation("2");
b.scale=0.2;

var c=createSprite(295,60,1,1);
c.setAnimation("3");
c.scale=0.2;

var d=createSprite(355,60,1,1);
d.setAnimation("4");
d.scale=0.2;

var e=createSprite(35,160,1,1);
e.setAnimation("1");
e.scale=0.2;

var f=createSprite(105,160,1,1);
f.setAnimation("2");
f.scale=0.2;

var g=createSprite(295,160,1,1);
g.setAnimation("3");
g.scale=0.2;

var h=createSprite(355,160,1,1);
h.setAnimation("4");
h.scale=0.2;

var i=createSprite(170,180,1,1);
i.setAnimation("5");
i.scale=0.24;

var j=createSprite(230,180,1,1);
j.setAnimation("6");
j.scale=0.24;


    


  
function draw() {
  background("#0a0931");
  player.x = World.mouseX;
  createEdgeSprites();
  player.collide(bottomEdge);
  
 if(keyWentDown("space")){
   spawnBullets();
 }
 
 alien.velocityY=0.09;
 a.velocityY=0.1;
b .velocityY=0.1;
c.velocityY=0.1;
 d.velocityY=0.1;
e .velocityY=0.1;
f .velocityY=0.1;
 g.velocityY=0.1;
 h.velocityY=0.1;
 i.velocityY=0.1;
 j.velocityY=0.1;
  
   drawSprites();
}

function spawnBullets() {
   if(World.frameCount % 5 === 0 ){
     var bullet = createSprite(200,375,40,10);
     bullet.setAnimation("bullet");
     bullet.x=player.x;
    bullet.velocityY=-4;
    
     
   }
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
