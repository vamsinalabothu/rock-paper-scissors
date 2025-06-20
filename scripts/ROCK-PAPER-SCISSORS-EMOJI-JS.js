let score= JSON.parse(localStorage.getItem('score')) ||
              {
              wins:0,
              losses:0,
              tie:0
            };
    /*
    if(!score){   // IT IS like score === null
      score = {
        wins:0,
        losses:0,
        tie:0
      };
    } */
    scoreEle();
    function playGame(playerMove)
    {
      const computerMove=computerMoveFunc();
      let txt='';
      if(playerMove ==='rock')
      {
        if(computerMove === 'rock')
        {
        txt='you win';
        }
          else if(computerMove === 'paper')
          {
          txt='you loose';
          }
          else if(computerMove === 'scissors')
          {
          txt='tie';
          }
      }
      if(playerMove ==='paper')
      {
        if(computerMove === 'rock')
        {
        txt='tie';
        }
          else if(computerMove === 'paper')
          {
          txt='you win';
          }
          else if(computerMove === 'scissors')
          {
          txt='you loose';
          }
      }
      if(playerMove ==='scissors')
      {
        if(computerMove === 'rock')
        {
        txt='you loose';
        }
          else if(computerMove === 'paper')
          {
          txt='tie';
          }
          else if(computerMove === 'scissors')
          {
          txt='you win';
          }
      }
        // below code is for score updation
      if(txt==='you win'){
        score.wins+=1;
      }
      else if(txt==='tie'){
        score.tie+=1;
      }
      else{
        score.losses+=1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      document.querySelector('.js-result').innerHTML = txt;
      scoreEle();
      document.querySelector('.js-moves').innerHTML = `Computer Move = <img src="images/${computerMove}-emoji.png">  and  Your Move = <img src="images/${playerMove}-emoji.png">`;

    }
    function scoreEle(){
      document.querySelector('.js-score')
      .innerHTML =(`wins: ${score.wins}  looses: ${score.losses}    ties: ${score.tie}`);
    }
    function computerMoveFunc()
    {
      let computerMove='';
      const randomNumber=Math.random();
      if(randomNumber>=0 && randomNumber<=1/3){
      computerMove='rock';
      }
      else if(randomNumber>=1/3&&randomNumber<=2/3)
      {
      computerMove='paper';
      }
      else if(randomNumber>=2/3&&randomNumber<=1)
      {
      computerMove='scissors';
      }
      return computerMove;
    
    }