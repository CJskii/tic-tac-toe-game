/* 
      BOARD
    | 0 1 2 |
    | 3 4 5 |
    | 6 7 8 |
*/

document.addEventListener('DOMContentLoaded', () =>{
  console.log("Page has been loaded")
  const tiles = Array.from(document.querySelectorAll('.tile')) 
  const playerX = document.querySelector('.playerX')
  const playerO = document.querySelector('.playerO')
  const winner = document.querySelector('.winnerSpan')
  const reset = document.querySelector('.reset')

  let board = ["", "", "", "", "", "", "", "", "" ]
  let currentPlayer = "X"
  let isGameActive = true
  const PLAYERX_WON = "Player X WON"
  const PLAYERO_WON = "Player O WON"
  const TIE = "TIE"

  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

  //Button liseners

  playerX.addEventListener('click', () => {
    currentPlayer = "X"
    console.log(currentPlayer)
  })

  playerO.addEventListener('click', () => {
    currentPlayer = "O"
    console.log(currentPlayer)
  })

  reset.addEventListener('click', () =>{
    tiles.forEach((tile) => {
      tile.textContent = ""
    })
    board = ["", "", "", "", "", "", "", "", "" ]
    winner.textContent = "WINNER"
    currentPlayer = "X"
    isGameActive = true
    winner.removeAttribute('style')
  })

  //Tiles lisener and functionality

  tiles.forEach((tile, index) => {{
      tile.addEventListener('click', (e) => {
      let element = e.target
      index = element.dataset.index
      if (currentPlayer == "X" && e.target.textContent == ""){
        e.target.textContent = currentPlayer
        element.setAttribute('style', 'color:#ff0000;')
        board[index] = currentPlayer
        currentPlayer = "O"
        checkBoard()
      } else if (currentPlayer == "O" && e.target.textContent == ""){
        e.target.textContent = currentPlayer
        element.setAttribute('style', 'color: #00ffbf;')
        board[index] = currentPlayer
        currentPlayer = "X"
        checkBoard()
      } else {
          return console.log("Game has finished")
      }
    })
    }
    
  })

  //Create 2 arrays for player X and O

  function checkBoard(){
    let arrayX = []
    let arrayO = []
      for (let i = 0; i < board.length; i++){
        const playerSelection = board[i]
        if (playerSelection == "X"){
          arrayX.push(i)
        } else if (playerSelection == "O"){
          arrayO.push(i)
        }         
      }
    const arrayXsorted = arrayX.slice().sort()
    const arrayOsorted = arrayO.slice().sort()
    compareArray(arrayXsorted, winCondition, "X")
    compareArray(arrayOsorted, winCondition, "O")
  }

  //Compare ArraysPassed from CheckBoard()

  function compareArray(arr1, arr2, player){
      let condition
      let boardStringArray = board.filter(string =>{
        return string === ""
      })
      console.log(boardStringArray)
      for (i = 0; i < arr2.length; i++){
        condition = arr2[i]
        let winnerArray = []
      for (j = 0; j < arr1.length; j++){
        let number = arr1[j]
        let a = condition[0]
        let b = condition[1]
        let c = condition[2]
        if (number == a || number == b || number == c){
          winnerArray.push(number)
          console.log(winnerArray)
          if (winnerArray.length < 3 && boardStringArray.length === 0){
            announceWinner("tie")
          } else if (winnerArray.length == '3'){
            return announceWinner(player);
          } 
        } 

      }
    }
  }

  // Announce winner from compareArray()

  function announceWinner(player){
    if(isGameActive === false){
      return;
    } else if (player == "X"){
      winner.textContent = PLAYERX_WON
      winner.setAttribute('style', 'color:#ff0000;')
    } else if (player == "O"){
      winner.textContent = PLAYERO_WON
      winner.setAttribute('style', 'color:#00ffbf;')
    } else if (player == "tie"){
      winner.textContent = TIE
    }
    return isGameActive = false;
  }
  

} )


class Clock{
  constructor({ template }){
    this.template = template
  }

  render() {  
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start(){
    this.render()
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();

