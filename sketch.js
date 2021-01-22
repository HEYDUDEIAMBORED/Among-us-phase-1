var player,playerimg,form,bgimg,bgimg2,role,cafe,cafeimg,standImg,rect1,rect2,rect3,rect4,rect5,rect6,rect7,rect8,ledge,redge,tedge,bedge,numtask;	
var name=null,bx=0;	
var gameState='start';	
var Rbutton,useimg;	
var room1img,room1,task1,x,y,z,task1ans,task1sc,answer,task1text;	
var room2img,room2,room3img,room3,room4img,room4,treasure,treasureimg;	
var taskans
//var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
//var boxes=[box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20]
var boxes=[]
var boximg
var coords=[]
var tbox=[]
var numbox
function preload(){	
    bgimg=loadImage('BG.png')	
    playerimg=loadAnimation('walk2.png','walk3.png','walk4.png','walk5.png')	
    cafeimg=loadImage('cafe.png')	
    standImg=loadImage('walk1.png')	
    room1img=loadImage('room1.png')	
    useimg=loadImage('Use.png')	
    room2img=loadImage('room2.jpg')	
    room3img=loadImage('ROOM3.jpg')	
    room4img=loadImage('room4.jpg')	
    boximg=loadImage('scroll.png')
    treasureimg=loadImage('treasure.png')
}	
function setup(){	
    	
    createCanvas(displayWidth,displayHeight);	
    form=new Form();	
    if (gameState==='start'){	
        	
        background(bgimg)	
       	
        form.display()	
        console.log("gamestate is start");	
       	
    }	
   	
    ledge=createSprite(0,displayHeight/2,1,displayHeight)	
    redge=createSprite(displayWidth,displayHeight/2,1,displayHeight)	
    tedge=createSprite(displayWidth/2,0,displayWidth,1)	
    bedge=createSprite(displayWidth/2,displayHeight,displayWidth,1)	
    room1=createSprite(displayWidth-200,160,10,10)	
    room2=createSprite(displayWidth/2-570,160,10,10)	
    room3=createSprite(displayWidth/2-570,700,10,10)	
    room4=createSprite(displayWidth-200,750,10,10)	
    room4.addImage(room4img)	
    room4.scale=1.3	
    room2.addImage(room2img)	
    room3.addImage(room3img)	
    room3.scale=0.8	
    room2.scale=0.6	
        room1.scale=1.2	
        	
        room1.addImage(room1img)	
        rect1=createSprite(390,150,10,600)	
        rect2=createSprite(390,displayHeight-150,10,300)	
        rect3=createSprite(1150,250,10,500)	
        rect4=createSprite(1150,displayHeight-100,10,200)	
        	
        rect5=createSprite(150,440,300,10)	
        rect6=createSprite(150,displayHeight-346,300,10)	
        rect7=createSprite(1350,displayHeight-250,200,10)	
        rect8=createSprite(1300,500,300,10)	
        task1sprite=createSprite(displayHeight-150,160,10,10)	
        treasure=createSprite(displayWidth/2,displayHeight/2,20,20)
        treasure.addImage(treasureimg)
        treasure.scale=0.05
        task1sc=createSprite(10,230,500,150)	
      //  Usebutton=createSprite(100,200,100,100)	

        x=Math.round(random(1,1000))	
        y=Math.round(random(1,9))	
        z=Math.round(random(1,89))	
        answer=createInput().attribute("placeholder", "Write the numbers given above");	
       // answer.visible=false	
     //   Usebutton.addImage(useimg)	
        task1text=createElement('h3');	
        numtask=1
       // Usebutton.scale=0.3	
        
        task1sc.shapeColor='green'	
        task1sc.visible=false	
        rect1.visible=false	
        rect2.visible=false	
        rect3.visible=false	
        rect4.visible=false	
        rect5.visible=false	
        rect6.visible=false	
        rect7.visible=false	
        rect8.visible=false	
        room1.visible=false	
        room2.visible=false	
        room3.visible=false	
        room4.visible=false	
      //  Usebutton.visible=false	
        treasure.visible=false
       coords=[room1.x, room1.y, room1.x+50, room1.y+50, room1.x-50, room1.y-50, room1.x-50, room1.y+50,
        room2.x, room2.y, room2.x+50, room2.y+50, room2.x-50, room2.y-50, room2.x-50,room2.y+50,
        198, 700, 198+50, 750, room3.x-50, room3.y-50, room3.x-50,room3.y+50,
        room4.x, room4.y, room4.x+50, room4.y+50, room4.x-50, room4.y-50, room4.x-50,room4.y+50]
        
        console.log(coords)
       i=0;
       for (var k=0; k<16;k++){
           //if (gameState='play'){
            boxes[k]=createSprite(coords[i],coords[i+1],20,20)
            boxes[k].addImage(boximg)
            boxes[k].scale=0.1
           // console.log(room3.x,room3.y)
            console.log(coords[i],coords[i+1])
            boxes[k].visible=false
            
            i+=2;
           
        }    	
       //tbox[boxes[3],boxes[5],boxes[11],boxes[12]]
            tbox[0] = boxes[3];
            tbox[1] = boxes[5];
            tbox[2] = boxes[11];
            tbox[3] = boxes[12];
            numbox=4
}

function draw(){	
    background(bgimg)	
    	
   	
    if (gameState==='play'){	
       	
        play()	
       // Usebutton.x=camera.position.x+500	
       // Usebutton.y=camera.position.y+200	
        player.depth=cafe.depth+1	
       // room1.depth=player.depth-1	
      //  Usebutton.depth=cafe.depth+1	
        treasure.depth=player.depth+1
        player.collide(rect1)	
        player.collide(rect2)	
        player.collide(rect3)	
        player.collide(rect4)	
        player.collide(rect5)	
        player.collide(rect6)	
        player.collide(rect7)	
        player.collide(rect8)	
        rect1.visible=true	
        task1sc.visible=false	
        rect2.visible=true	
        rect3.visible=true	
        rect4.visible=true	
        rect5.visible=true	
        rect6.visible=true	
        rect7.visible=true	
        rect8.visible=true	
        room1.visible=true	
        room2.visible=true	
        room3.visible=true	
        room4.visible=true	
     //console.log(task1sprite.position)	
    	for (var u=0;u<numbox;u++){
            if(player.isTouching(tbox[u]) ) {
                console.log('touching box'+u)
                gameState='pause'
                task1()
                if (u===(numbox-1)){
                    tbox[u].visible=false
                    numbox--;
                    
                }
                else{
                tbox[u].visible=false
                tbox[u]=tbox[numbox-1]
                numbox--;}
           
                
                   /* task1text.show()
                    answer.show()
                    task1text.html(' What has to be broken before you can use it?')
                    if (task1ans==='An egg'||task1ans==='egg'||task1ans==='an egg'||task1ans==='Egg'){
                        console.log("task is completed")
                        gameState='play'
                        task1text.hide()
                        answer.hide()
                    }
                */
            }
        }
        for (k=0;k<16&&bx===0;k++){
            boxes[k].visible=true
        }
        bx=1

        
            
        
  
    }	
if(keyDown('enter') && gameState==='pause'){	
    console.log("enter is clicked");	
    task1ans=answer.value()	
    console.log(task1ans)	
//    console.log("x+y+z: "+x+y+z);	
    console.log(taskans)   	
    	

    if (task1ans==taskans){	
        
        console.log("task is completed");	
        task1text.hide()
          answer.hide()
          gameState='play'
          numtask++
              
      }	
    }

     if(numtask===5){
          treasure.visible=true
          if (player.isTouching(treasure)){
              gameState='end'
              console.log('hi')
              
              player.changeImage("stand",standImg);	
          
          }
      
              
      }	
     
    	
    drawSprites()	
    	
    console.log(gameState)
    console.log(numtask)
     	
   	
    if(gameState==='play'){	
        
        fill('white')	
        textSize(20)
        text(name,player.x-30,player.y-50)	
        textSize(20)	
       // text('You are : '+role,camera.position.x-100,camera.position.y-400)	
        player.bounceOff(redge)	
        player.bounceOff(ledge)	
        player.bounceOff(tedge)	
        player.bounceOff(bedge)	
       // task1sc.x=camera.position.x	
    //task1sc.y=camera.position.y	
    
}
if (gameState==='end'){
    textSize(100)
    fill('white')
    text('You WON',displayWidth/2-500,displayHeight/2)
}
    
}	
function getRole(){	
    player=createSprite(displayWidth/2,displayHeight/2,20,20);	
    player.addImage("stand",standImg);	
    player.addAnimation('running',playerimg);	
    player.scale=.5	
    var rand = Math.round(random(1,3));	
    switch(rand) {	
   //   case 1: role='IMPOSTER';	
   //           break;	
        case 1:role='CrewMate'	
        break;	
      case 2: role='CrewMate';	
              break;	
      case 3: role='CrewMate';	
              break;	
    default:break;	
    }	
    	
}	
function play(){	
    //Usebutton.visible=true	
    player.changeImage("stand",standImg);	
    camera.position.x=player.x	
    camera.position.y=player.y	
    	
    textSize(50)	
    	
   	
    if(keyDown("w")) {	
      	
        player.y = player.y-10;	
        player.changeAnimation('running',playerimg);	
      }	
      if (keyDown("s")) {	
        	
       player.y =player.y + 10;	
       player.changeAnimation('running',playerimg);	
        	
      }	
      if (keyDown("d")) {	
       	
      player.x=player.x+ 10;	
      player.changeAnimation('running',playerimg);	
     	
      }	
      if (keyDown("a")) {	
        	
        player.x=player.x -10;	
        player.changeAnimation('running',playerimg);	
    }	
   
}	
function task1(){	
   
    if (gameState==='pause'){
    
        player.changeImage("stand",standImg);	   
    task1sc.x=player.x
    task1sc.y=player.y
    task1sc.visible=true
    console.log("task is called");	
    task1sc.visible=true	
    task1sc.depth=player.depth+1	
    
    
  	
    	
    
    answer.position(displayWidth/2-100,displayHeight/2+50)	
    console.log(answer.value())	
    answer.size(200)	
    	
    	
    	
    if (numtask===1){
        taskans=x+y+z
        task1text.html(taskans)	
    }
    else if(numtask===2){
        task1text.html('What is full of holes but still holds water?')
        taskans='sponge';
    }
    else if(numtask===3){
        task1text.html('What is 89898 × 823')
        taskans='73986054'
    }
    else if(numtask===4){
        task1text.html('I shave every day, but my beard stays the same. What am I?')
        taskans='barber'
    }
    
    task1text.position(displayWidth/2-240,displayHeight/2)	
    answer.show()
    task1text.show()
  //  console.log(answer.value());	
    }
  	
}
 