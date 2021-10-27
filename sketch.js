var pl, plImg,enemie1,enemie2,enemie3,enemie4,enemie5,edges,mn1, mn2, mn3, mn4, mn5;
var wallxyz,wall1, wallxyz1 , wallxyz2, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21;
var bgImg, endImg;

function preload() {
  mn1 = loadImage("monster1.png");
  mn2 = loadImage("monster2.png");
  mn3 = loadImage("monster3.png");
  mn4 = loadImage("monster4.png");
  mn5 = loadImage("monster5.png");
  bgImg = loadImage("space.jpg");
  plUP = loadImage("pl_up.png");
  plDOWN = loadImage("pl_down.png");
  plLEFT = loadImage("pl_left.png");
  plRIGHT = loadImage("pl_right.png");
  health = loadImage("health.png");
  endImg = loadImage("end.png")
}

function setup() {
  createCanvas(600, 400);

  edges = createEdgeSprites()

  wall1 = createSprite(90, 50, 20, 20);
  wall1.shapeColor = "red";

  wall2 = createSprite(150, 50, 20, 20);
  wall2.shapeColor = "red";

  wall3 = createSprite(200, 50, 20, 20);
  wall3.shapeColor = "red";

  wall4 = createSprite(250, 50, 20, 20);
  wall4.shapeColor = "red";

  wall5 = createSprite(300, 50, 20, 20);
  wall5.shapeColor = "red";

  wall6 = createSprite(350, 50, 20, 20);
  wall6.shapeColor = "red";

  wall7 = createSprite(400, 50, 20, 20);
  wall7.shapeColor = "red";

  wall8 = createSprite(450, 50, 20, 20);
  wall8.shapeColor = "red";

  wall9 = createSprite(500, 50, 20, 20);
  wall9.shapeColor = "red";

  wall10 = createSprite(550, 50, 20, 20);
  wall10.shapeColor = "red";

  wall11 = createSprite(60, 110, 20, 20);
  wall11.shapeColor = "red";

  wall12 = createSprite(110, 110, 20, 20);
  wall12.shapeColor = "red";

  wall13 = createSprite(160, 110, 20, 20);
  wall13.shapeColor = "red";

  wall14 = createSprite(210, 110, 20, 20);
  wall14.shapeColor = "red";

  wall15 = createSprite(260, 110, 20, 20);
  wall15.shapeColor = "red";

  wall16 = createSprite(310, 110, 20, 20);
  wall16.shapeColor = "red";

  wall17 = createSprite(360, 110, 20, 20);
  wall17.shapeColor = "red";

  wall18 = createSprite(410, 110, 20, 20);
  wall18.shapeColor = "red";

  wall19 = createSprite(460, 110, 20, 20);
  wall19.shapeColor = "red";

  wall20 = createSprite(510, 110, 20, 20);
  wall20.shapeColor = "red";

  wall21 = createSprite(560, 110, 20, 20);
  wall21.shapeColor = "red";

  wallxyz1 = createSprite(40, 170, 20, 20);
  wallxyz1.shapeColor = "red";

  wall22 = createSprite(90, 170, 20, 20);
  wall22.shapeColor = "red";

  wall23 = createSprite(140, 170, 20, 20);
  wall23.shapeColor = "red";

  wall24 = createSprite(190, 170, 20, 20);
  wall24.shapeColor = "red";

  wall25 = createSprite(240, 170, 20, 20);
  wall25.shapeColor = "red";

  wall26 = createSprite(290, 170, 20, 20);
  wall26.shapeColor = "red";

  wall27 = createSprite(340, 170, 20, 20);
  wall27.shapeColor = "red";

  wall28 = createSprite(390, 170, 20, 20);
  wall28.shapeColor = "red";

  wall29 = createSprite(440, 170, 20, 20);
  wall29.shapeColor = "red";

  wall30 = createSprite(490, 170, 20, 20);
  wall30.shapeColor = "red";

  wall31 = createSprite(540, 170, 20, 20);
  wall31.shapeColor = "red";
 
  wallxyz = createSprite(60, 230, 20, 20);
  wallxyz.shapeColor = "red";

  wall32 = createSprite(110, 230, 20, 20);
  wall32.shapeColor = "red";

  wall33 = createSprite(160, 230, 20, 20);
  wall33.shapeColor = "red";

  wall34 = createSprite(210, 230, 20, 20);
  wall34.shapeColor = "red";

  wall35 = createSprite(260, 230, 20, 20);
  wall35.shapeColor = "red";

  wall36 = createSprite(310, 230, 20, 20);
  wall36.shapeColor = "red";

  wall37 = createSprite(360, 230, 20, 20);
  wall37.shapeColor = "red";

  wall38 = createSprite(410, 230, 20, 20);
  wall38.shapeColor = "red";

  wall39 = createSprite(460, 230, 20, 20);
  wall39.shapeColor = "red";

  wall40 = createSprite(510, 230, 20, 20);
  wall40.shapeColor = "red";

  wall41 = createSprite(560, 230, 20, 20);
  wall41.shapeColor = "red";

  wallxyz2 = createSprite(40, 290, 20, 20);
  wallxyz2.shapeColor = "red";

  wall42 = createSprite(90, 290, 20, 20);
  wall42.shapeColor = "red";

  wall43 = createSprite(140, 290, 20, 20);
  wall43.shapeColor = "red";

  wall44 = createSprite(190, 290, 20, 20);
  wall44.shapeColor = "red";

  wall45 = createSprite(240, 290, 20, 20);
  wall45.shapeColor = "red";

  wall46 = createSprite(290, 290, 20, 20);
  wall46.shapeColor = "red";

  wall47 = createSprite(340, 290, 20, 20);
  wall47.shapeColor = "red";

  wall48 = createSprite(390, 290, 20, 20);
  wall48.shapeColor = "red";

  wall49 = createSprite(440, 290, 20, 20);
  wall49.shapeColor = "red";

  wall50 = createSprite(490, 290, 20, 20);
  wall50.shapeColor = "red";

  wall51 = createSprite(540, 290, 20, 20);
  wall51.shapeColor = "red";

  wall52 = createSprite(90, 350, 20, 20);
  wall52.shapeColor = "red";

  wall53 = createSprite(150, 350, 20, 20);
  wall53.shapeColor = "red";

  wall54 = createSprite(200, 350, 20, 20);
  wall54.shapeColor = "red";

  wall55 = createSprite(250, 350, 20, 20);
  wall55.shapeColor = "red";

  wall56 = createSprite(300, 350, 20, 20);
  wall56.shapeColor = "red";

  wall57 = createSprite(350, 350, 20, 20);
  wall57.shapeColor = "red";

  wall58 = createSprite(400, 350, 20, 20);
  wall58.shapeColor = "red";

  wall59 = createSprite(450, 350, 20, 20);
  wall59.shapeColor = "red";

  wall60 = createSprite(500, 350, 20, 20);
  wall60.shapeColor = "red";

  wall61 = createSprite(550, 350, 20, 20);
  wall61.shapeColor = "red";

  pl = createSprite(50, 60);
  pl.addImage(plDOWN);
  pl.scale = 0.07;

  enemie1 = createSprite(random(10,600),random(10,400))
  enemie1.addImage(mn1)
  enemie1.scale = 0.07
  enemie1.velocityX = random(-2,4)
  enemie1.velocityY = random(-1,3)

  enemie2 = createSprite(random(10,600),random(10,400))
  enemie2.addImage(mn2)
  enemie2.scale = 0.07
  enemie2.velocityX = random(-2,4)
  enemie2.velocityY = random(-1,3)

  enemie3 = createSprite(random(10,600),random(10,400))
  enemie3.addImage(mn3)
  enemie3.scale = 0.07
  enemie3.velocityX = random(-2,4)
  enemie3.velocityY = random(-1,3)

  enemie4 = createSprite(random(10,600),random(10,400))
  enemie4.addImage(mn4)
  enemie4.scale = 0.07
  enemie4.velocityX = random(-2,4)
  enemie4.velocityY = random(-1,3)

  enemie5 = createSprite(random(10,600),random(10,400))
  enemie5.addImage(mn5)
  enemie5.scale = 0.07
  enemie5.velocityX = random(-2,4)
  enemie5.velocityY = random(-1,3)
  
  end = createSprite(550,390,50,50)
  end.addImage(endImg)
  end.scale = 0.3
}
function draw() {
  background(bgImg);
  
  pl.collide(wall1)
  pl.collide(wall2)
  pl.collide(wall3)
  pl.collide(wall4)
  pl.collide(wall5)
  pl.collide(wall6)
  pl.collide(wall7)
  pl.collide(wall8)
  pl.collide(wall9)
  pl.collide(wall10)
  pl.collide(wall11)
  pl.collide(wall12)
  pl.collide(wall13)
  pl.collide(wall14)
  pl.collide(wall15)
  pl.collide(wall16)
  pl.collide(wall17)
  pl.collide(wall18)
  pl.collide(wall19)
  pl.collide(wall20)
  pl.collide(wall21)
  pl.collide(wall22)
  pl.collide(wall23)
  pl.collide(wall24)
  pl.collide(wall25)
  pl.collide(wall26)
  pl.collide(wall27)
  pl.collide(wall28)
  pl.collide(wall29)
  pl.collide(wall30)
  pl.collide(wall31)
  pl.collide(wall32)
  pl.collide(wall33)
  pl.collide(wall34)
  pl.collide(wall35)
  pl.collide(wall36)
  pl.collide(wall37)
  pl.collide(wall38)
  pl.collide(wall39)
  pl.collide(wall40)
  pl.collide(wall41)
  pl.collide(wall42)
  pl.collide(wall43)
  pl.collide(wall44)
  pl.collide(wall45)
  pl.collide(wall46)
  pl.collide(wall47)
  pl.collide(wall48)
  pl.collide(wall49)
  pl.collide(wall50)
  pl.collide(wall51)
  pl.collide(wall52)
  pl.collide(wall53)
  pl.collide(wall54)
  pl.collide(wall55)
  pl.collide(wall56)
  pl.collide(wall57)
  pl.collide(wall58)
  pl.collide(wall59)
  pl.collide(wall60)
  pl.collide(wall61)
  pl.collide(wallxyz)
  pl.collide(wallxyz1)
  pl.collide(wallxyz2)
  pl.collide(edges)
  enemie1.bounceOff(wall1);
  enemie1.bounceOff(wall2);
  enemie1.bounceOff(wall3);
  enemie1.bounceOff(wall4);
  enemie1.bounceOff(wall5);
  enemie1.bounceOff(wall6);
  enemie1.bounceOff(wall7);
  enemie1.bounceOff(wall8);
  enemie1.bounceOff(wall9);
  enemie1.bounceOff(wall10);
  enemie1.bounceOff(wall11);
  enemie1.bounceOff(wall12);
  enemie1.bounceOff(wall13);
  enemie1.bounceOff(wall14);
  enemie1.bounceOff(wall15);
  enemie1.bounceOff(wall16);
  enemie1.bounceOff(wall17);
  enemie1.bounceOff(wall18);
  enemie1.bounceOff(wall19);
  enemie1.bounceOff(wall20);
  enemie1.bounceOff(wall21);
  enemie1.bounceOff(wall22);
  enemie1.bounceOff(wall23);
  enemie1.bounceOff(wall24);
  enemie1.bounceOff(wall25);
  enemie1.bounceOff(wall26);
  enemie1.bounceOff(wall27);
  enemie1.bounceOff(wall28);
  enemie1.bounceOff(wall29);
  enemie1.bounceOff(wall30);
  enemie1.bounceOff(wall31);
  enemie1.bounceOff(wall32);
  enemie1.bounceOff(wall33);
  enemie1.bounceOff(wall34);
  enemie1.bounceOff(wall35);
  enemie1.bounceOff(wall36);
  enemie1.bounceOff(wall37);
  enemie1.bounceOff(wall38);
  enemie1.bounceOff(wall39);
  enemie1.bounceOff(wall40);
  enemie1.bounceOff(wall41);
  enemie1.bounceOff(wall42);
  enemie1.bounceOff(wall43);
  enemie1.bounceOff(wall44);
  enemie1.bounceOff(wall45);
  enemie1.bounceOff(wall46);
  enemie1.bounceOff(wall47);
  enemie1.bounceOff(wall48);
  enemie1.bounceOff(wall49);
  enemie1.bounceOff(wall50);
  enemie1.bounceOff(wall51);
  enemie1.bounceOff(wall52);
  enemie1.bounceOff(wall53);
  enemie1.bounceOff(wall54);
  enemie1.bounceOff(wall55);
  enemie1.bounceOff(wall56);
  enemie1.bounceOff(wall57);
  enemie1.bounceOff(wall58);
  enemie1.bounceOff(wall59);
  enemie1.bounceOff(wall60);
  enemie1.bounceOff(wall61);
  enemie1.bounceOff(wallxyz);
  enemie1.bounceOff(wallxyz1);
  enemie1.bounceOff(wallxyz2);
  enemie1.bounceOff(edges)

  enemie2.bounceOff(wall1);
  enemie2.bounceOff(wall2);
  enemie2.bounceOff(wall3);
  enemie2.bounceOff(wall4);
  enemie2.bounceOff(wall5);
  enemie2.bounceOff(wall6);
  enemie2.bounceOff(wall7);
  enemie2.bounceOff(wall8);
  enemie2.bounceOff(wall9);
  enemie2.bounceOff(wall10);
  enemie2.bounceOff(wall11);
  enemie2.bounceOff(wall12);
  enemie2.bounceOff(wall13);
  enemie2.bounceOff(wall14);
  enemie2.bounceOff(wall15);
  enemie2.bounceOff(wall16);
  enemie2.bounceOff(wall17);
  enemie2.bounceOff(wall18);
  enemie2.bounceOff(wall19);
  enemie2.bounceOff(wall20);
  enemie2.bounceOff(wall21);
  enemie2.bounceOff(wall22);
  enemie2.bounceOff(wall23);
  enemie2.bounceOff(wall24);
  enemie2.bounceOff(wall25);
  enemie2.bounceOff(wall26);
  enemie2.bounceOff(wall27);
  enemie2.bounceOff(wall28);
  enemie2.bounceOff(wall29);
  enemie2.bounceOff(wall30);
  enemie2.bounceOff(wall31);
  enemie2.bounceOff(wall32);
  enemie2.bounceOff(wall33);
  enemie2.bounceOff(wall34);
  enemie2.bounceOff(wall35);
  enemie2.bounceOff(wall36);
  enemie2.bounceOff(wall37);
  enemie2.bounceOff(wall38);
  enemie2.bounceOff(wall39);
  enemie2.bounceOff(wall40);
  enemie2.bounceOff(wall41);
  enemie2.bounceOff(wall42);
  enemie2.bounceOff(wall43);
  enemie2.bounceOff(wall44);
  enemie2.bounceOff(wall45);
  enemie2.bounceOff(wall46);
  enemie2.bounceOff(wall47);
  enemie2.bounceOff(wall48);
  enemie2.bounceOff(wall49);
  enemie2.bounceOff(wall50);
  enemie2.bounceOff(wall51);
  enemie2.bounceOff(wall52);
  enemie2.bounceOff(wall53);
  enemie2.bounceOff(wall54);
  enemie2.bounceOff(wall55);
  enemie2.bounceOff(wall56);
  enemie2.bounceOff(wall57);
  enemie2.bounceOff(wall58);
  enemie2.bounceOff(wall59);
  enemie2.bounceOff(wall60);
  enemie2.bounceOff(wall61);
  enemie2.bounceOff(wallxyz);
  enemie2.bounceOff(wallxyz1);
  enemie2.bounceOff(wallxyz2);
  enemie2.bounceOff(edges)

  enemie3.bounceOff(wall1);
  enemie3.bounceOff(wall2);
  enemie3.bounceOff(wall3);
  enemie3.bounceOff(wall4);
  enemie3.bounceOff(wall5);
  enemie3.bounceOff(wall6);
  enemie3.bounceOff(wall7);
  enemie3.bounceOff(wall8);
  enemie3.bounceOff(wall9);
  enemie3.bounceOff(wall10);
  enemie3.bounceOff(wall11);
  enemie3.bounceOff(wall12);
  enemie3.bounceOff(wall13);
  enemie3.bounceOff(wall14);
  enemie3.bounceOff(wall15);
  enemie3.bounceOff(wall16);
  enemie3.bounceOff(wall17);
  enemie3.bounceOff(wall18);
  enemie3.bounceOff(wall19);
  enemie3.bounceOff(wall20);
  enemie3.bounceOff(wall21);
  enemie3.bounceOff(wall22);
  enemie3.bounceOff(wall23);
  enemie3.bounceOff(wall24);
  enemie3.bounceOff(wall25);
  enemie3.bounceOff(wall26);
  enemie3.bounceOff(wall27);
  enemie3.bounceOff(wall28);
  enemie3.bounceOff(wall29);
  enemie3.bounceOff(wall30);
  enemie3.bounceOff(wall31);
  enemie3.bounceOff(wall32);
  enemie3.bounceOff(wall33);
  enemie3.bounceOff(wall34);
  enemie3.bounceOff(wall35);
  enemie3.bounceOff(wall36);
  enemie3.bounceOff(wall37);
  enemie3.bounceOff(wall38);
  enemie3.bounceOff(wall39);
  enemie3.bounceOff(wall40);
  enemie3.bounceOff(wall41);
  enemie3.bounceOff(wall42);
  enemie3.bounceOff(wall43);
  enemie3.bounceOff(wall44);
  enemie3.bounceOff(wall45);
  enemie3.bounceOff(wall46);
  enemie3.bounceOff(wall47);
  enemie3.bounceOff(wall48);
  enemie3.bounceOff(wall49);
  enemie3.bounceOff(wall50);
  enemie3.bounceOff(wall51);
  enemie3.bounceOff(wall52);
  enemie3.bounceOff(wall53);
  enemie3.bounceOff(wall54);
  enemie3.bounceOff(wall55);
  enemie3.bounceOff(wall56);
  enemie3.bounceOff(wall57);
  enemie3.bounceOff(wall58);
  enemie3.bounceOff(wall59);
  enemie3.bounceOff(wall60);
  enemie3.bounceOff(wall61);
  enemie3.bounceOff(wallxyz);
  enemie3.bounceOff(wallxyz1);
  enemie3.bounceOff(wallxyz2);
  enemie3.bounceOff(edges)
  enemie1.bounceOff(end);
  enemie2.bounceOff(end);
  enemie3.bounceOff(end);
  enemie4.bounceOff(end)
  enemie5.bounceOff(end)
 //----------------------------------------------------------------------------------------------- 
  enemie4.bounceOff(wall1);
  enemie4.bounceOff(wall2);
  enemie4.bounceOff(wall3);
  enemie4.bounceOff(wall4);
  enemie4.bounceOff(wall5);
  enemie4.bounceOff(wall6);
  enemie4.bounceOff(wall7);
  enemie4.bounceOff(wall8);
  enemie4.bounceOff(wall9);
  enemie4.bounceOff(wall10);
  enemie4.bounceOff(wall11);
  enemie4.bounceOff(wall12);
  enemie4.bounceOff(wall13);
  enemie4.bounceOff(wall14);
  enemie4.bounceOff(wall15);
  enemie4.bounceOff(wall16);
  enemie4.bounceOff(wall17);
  enemie4.bounceOff(wall18);
  enemie4.bounceOff(wall19);
  enemie4.bounceOff(wall20);
  enemie4.bounceOff(wall21);
  enemie4.bounceOff(wall22);
  enemie4.bounceOff(wall23);
  enemie4.bounceOff(wall24);
  enemie4.bounceOff(wall25);
  enemie4.bounceOff(wall26);
  enemie4.bounceOff(wall27);
  enemie4.bounceOff(wall28);
  enemie4.bounceOff(wall29);
  enemie4.bounceOff(wall30);
  enemie4.bounceOff(wall31);
  enemie4.bounceOff(wall32);
  enemie4.bounceOff(wall33);
  enemie4.bounceOff(wall34);
  enemie4.bounceOff(wall35);
  enemie4.bounceOff(wall36);
  enemie4.bounceOff(wall37);
  enemie4.bounceOff(wall38);
  enemie4.bounceOff(wall39);
  enemie4.bounceOff(wall40);
  enemie4.bounceOff(wall41);
  enemie4.bounceOff(wall42);
  enemie4.bounceOff(wall43);
  enemie4.bounceOff(wall44);
  enemie4.bounceOff(wall45);
  enemie4.bounceOff(wall46);
  enemie4.bounceOff(wall47);
  enemie4.bounceOff(wall48);
  enemie4.bounceOff(wall49);
  enemie4.bounceOff(wall50);
  enemie4.bounceOff(wall51);
  enemie4.bounceOff(wall52);
  enemie4.bounceOff(wall53);
  enemie4.bounceOff(wall54);
  enemie4.bounceOff(wall55);
  enemie4.bounceOff(wall56);
  enemie4.bounceOff(wall57);
  enemie4.bounceOff(wall58);
  enemie4.bounceOff(wall59);
  enemie4.bounceOff(wall60);
  enemie4.bounceOff(wall61);
  enemie4.bounceOff(wallxyz);
  enemie4.bounceOff(wallxyz1);
  enemie4.bounceOff(wallxyz2);
  enemie4.bounceOff(edges)

  enemie5.bounceOff(wall1);
  enemie5.bounceOff(wall2);
  enemie5.bounceOff(wall3);
  enemie5.bounceOff(wall4);
  enemie5.bounceOff(wall5);
  enemie5.bounceOff(wall6);
  enemie5.bounceOff(wall7);
  enemie5.bounceOff(wall8);
  enemie5.bounceOff(wall9);
  enemie5.bounceOff(wall10);
  enemie5.bounceOff(wall11);
  enemie5.bounceOff(wall12);
  enemie5.bounceOff(wall13);
  enemie5.bounceOff(wall14);
  enemie5.bounceOff(wall15);
  enemie5.bounceOff(wall16);
  enemie5.bounceOff(wall17);
  enemie5.bounceOff(wall18);
  enemie5.bounceOff(wall19);
  enemie5.bounceOff(wall20);
  enemie5.bounceOff(wall21);
  enemie5.bounceOff(wall22);
  enemie5.bounceOff(wall23);
  enemie5.bounceOff(wall24);
  enemie5.bounceOff(wall25);
  enemie5.bounceOff(wall26);
  enemie5.bounceOff(wall27);
  enemie5.bounceOff(wall28);
  enemie5.bounceOff(wall29);
  enemie5.bounceOff(wall30);
  enemie5.bounceOff(wall31);
  enemie5.bounceOff(wall32);
  enemie5.bounceOff(wall33);
  enemie5.bounceOff(wall34);
  enemie5.bounceOff(wall35);
  enemie5.bounceOff(wall36);
  enemie5.bounceOff(wall37);
  enemie5.bounceOff(wall38);
  enemie5.bounceOff(wall39);
  enemie5.bounceOff(wall40);
  enemie5.bounceOff(wall41);
  enemie5.bounceOff(wall42);
  enemie5.bounceOff(wall43);
  enemie5.bounceOff(wall44);
  enemie5.bounceOff(wall45);
  enemie5.bounceOff(wall46);
  enemie5.bounceOff(wall47);
  enemie5.bounceOff(wall48);
  enemie5.bounceOff(wall49);
  enemie5.bounceOff(wall50);
  enemie5.bounceOff(wall51);
  enemie5.bounceOff(wall52);
  enemie5.bounceOff(wall53);
  enemie5.bounceOff(wall54);
  enemie5.bounceOff(wall55);
  enemie5.bounceOff(wall56);
  enemie5.bounceOff(wall57);
  enemie5.bounceOff(wall58);
  enemie5.bounceOff(wall59);
  enemie5.bounceOff(wall60);
  enemie5.bounceOff(wall61);
  enemie5.bounceOff(wallxyz);
  enemie5.bounceOff(wallxyz1);
  enemie5.bounceOff(wallxyz2);
  enemie5.bounceOff(edges)

  
  if (keyDown(UP_ARROW)) {
    pl.velocityX = 0;
    pl.velocityY = -2;
    pl.addImage(plUP);
  }

  if (keyDown(DOWN_ARROW)) {
    pl.velocityX = 0;
    pl.velocityY = 2;
    pl.addImage(plDOWN);
  }

  if (keyDown(LEFT_ARROW)) {
    pl.velocityX = -2;
    pl.velocityY = 0;
    pl.addImage(plLEFT);
  }

  if (keyDown(RIGHT_ARROW)) {
    pl.velocityX = 2;
    pl.velocityY = 0;
    pl.addImage(plRIGHT);
  }

  drawSprites();

  if (pl.isTouching(enemie1)|| pl.isTouching(enemie2) || pl.isTouching(enemie3) || pl.isTouching(enemie4) || pl.isTouching(enemie5) ) {
    textSize(50);
    fill("white");
    text("YOU DIED!",200,200);

    enemie1.velocityX = 0;   
    enemie1.velocityY = 0;

    enemie2.velocityX = 0;   
    enemie2.velocityY = 0;

    enemie3.velocityX = 0;   
    enemie3.velocityY = 0;
  
    enemie4.velocityX = 0;   
    enemie4.velocityY = 0;

    enemie5.velocityX = 0;   
    enemie5.velocityY = 0;

    pl.velocityX = 0
    pl.velocityY = 0

   pl.hide = "true"
  }

  if(pl.isTouching(end)) {
    textSize(50);
    fill("white");
    text("YOU WON!",200,200);

    enemie1.velocityX = 0;   
    enemie1.velocityY = 0;

    enemie2.velocityX = 0;   
    enemie2.velocityY = 0;

    enemie3.velocityX = 0;   
    enemie3.velocityY = 0;
  
    enemie4.velocityX = 0;   
    enemie4.velocityY = 0;

    enemie5.velocityX = 0;   
    enemie5.velocityY = 0;

    pl.velocityX = 0
    pl.velocityY = 0
  }

}