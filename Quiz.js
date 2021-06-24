class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    form.hide();

    //write code to change the background color here
    if(allContestants !== undefined){
      //var display_position = 100;
      background(rgb(198,135,103));
      image(track,0,-displayHeight * 4,displayWidth,displayHeight*5);



    //write code to show a heading for showing the result of Quiz


    //call getContestantInfo( ) here
    Player.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined


    //write code to add a note here


    //write code to highlight contest who answered correctly
    textSize(15);
    text(allContestants[plr].name + ": " + allContestants[plr].distance, 120,display_position)


        
        
        }
    
  }

}
