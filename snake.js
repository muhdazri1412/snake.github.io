var hasWon  = false;
window.rollDice = () =>{
  if(hasWon){
    return;
  }


  let currentPlayer = players[currentPlayerTurn];

    const max = 6;
    const roll = Math.ceil(Math.random() * max);
    console.log(currentPlayer.name , " rolled", roll);
    currentPlayer.position+=roll;
    
    document.getElementById("move").innerHTML = currentPlayer.name +" rolled " + roll;

    document.getElementById("demo").innerHTML = currentPlayer.name + "  " + currentPlayer.position;
  ladders.forEach(ladder=>{
    if (ladder.start === currentPlayer.position  ) {
      console.log(currentPlayer.name + "  stepped on a ladder!");
      document.getElementById("ladder").innerHTML = currentPlayer.name + " stepped on ladder";
      currentPlayer.position = ladder.end;
    }
  });

  if
  (currentPlayer.position >= position){
hasWon = true;
  console.log(currentPlayer.name + "  has won");
  document.getElementById("win").innerHTML = currentPlayer.name + " has wonn!!!!! congratsss";

  }
  if (currentPlayer.position >= position) {
    const diff =  currentPlayer.position - position;
    currentPlayerPosition = position - diff
  }

  currentPlayerTurn++;
  if(currentPlayerTurn >= players.length){
    currentPlayerTurn= 0;
  }


}


const players = [{
  name: "goku",
  position: 0,
  color: "gold"
},
  {
    name:"vegeta",
    position: 0,
    color : "blue"
  }
];

let currentPlayerTurn = 0;
let position = 25;

const ladders= [{
  start: 8,
  end : 15
},{
  start: 19,
  end : 24
},
{
  start: 15,
  end : 5
},
{
  start: 23,
  end : 16
}
];
