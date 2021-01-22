class Form{
    constructor(){
      this.input =  createInput("").attribute("placeholder", "Name");
      this.button = createButton('Play')
      this.title=createElement('h1');
      this.howtoplay=createElement('h3')
      //this.reset=createButton('RESET BRUH')
    
    }

    hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide()
      this.howtoplay.hide()
    
    }


  display(){
     this.title.style('color','white') 
     this.title.html ("AMONG US");
     this.title.position(displayWidth/2,displayHeight/2-400);
      
      this.input.position(displayWidth/2,displayHeight/2-250);
     this.button.position(displayWidth/2,displayHeight/2-200);
     this.howtoplay.style('color','white')
     this.howtoplay.html('There are 4 rooms and in each room there are 4 clues, but 3 are fake. Use W,A,S,D keys to move throughout the map and touch the clues and answer their questions to win the Treasure!')
     this.howtoplay.position(200,displayHeight/2+100)
     // this.reset.position(displayWidth-300,displayHeight-300);

      this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.howtoplay.hide()
        clear();
       getRole()
        gameState = "play";
        cafe=createSprite(displayWidth/2,displayHeight/2,100,displayHeight)
        cafe.addImage(cafeimg)
        cafe.scale=0.7
        name = this.input.value();

       
     /* player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
     
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      Player.updateCarsAtEnd(0);
      database.ref('players').remove();
    */
   })
  } 
  

}