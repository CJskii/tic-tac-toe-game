// Event lisener for player selection
// Board Array
// Win conditions

// 1. Player selects X or O
// -- start turn function
// 2. Player click on the board
// 3. Player selection is recorded 
// 4. Computer turn 
// 5. Computer selection recorded
// check for win conditions -- end of turn
// 6. Print winner





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
  const PLAYERX_WON = "PlayerX WON"
  const PLAYERO_WON = "PlayerO WON"
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
    winner.textContent = null
  })

  tiles.forEach((tile, index) => {
    if (winner.textContent != ""){
      return console.log("Game has finished")
    } else {
      tile.addEventListener('click', (e) => {
        let element = e.target
        index = element.dataset.index
        if (currentPlayer == "X" && e.target.textContent == ""){
          e.target.textContent = currentPlayer
          board[index] = currentPlayer
          currentPlayer = "O"
          checkBoard()
        } else if (currentPlayer == "O" && e.target.textContent == ""){
          e.target.textContent = currentPlayer
          board[index] = currentPlayer
          currentPlayer = "X"
          checkBoard()
        }
      })
    }
    
  })

  function checkBoard(){
    let arrayX = []
    let arrayO = []
      for (let i = 0; i < board.length; i++){
        const playerSelection = board[i]
        if (playerSelection == "X"){
          arrayX.push(i)
        } else if (playerSelection == "O"){
          arrayO.push(i)
        } else {
          return;
        }
        
      }
    const arrayXsorted = arrayX.slice().sort()
    const arrayOsorted = arrayO.slice().sort()
    compareArray(arrayXsorted, winCondition, "X")
    compareArray(arrayOsorted, winCondition, "O")
  }

  function compareArray(arr1, arr2, player){
      let condition
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
          if (winnerArray.length == '3'){
            //console.log(condition)
            announceWinner(player)
            //console.log("true")
            return true;
          } else {
            console.log("No match")
            announceWinner("tie")
          }       
        }

      }
    }
  }

  function announceWinner(player){
    if (player == "X"){
      winner.textContent = PLAYERX_WON
    } else if (player == "O"){
      winner.textContent = PLAYERO_WON
    } else if (player == "tie"){
      winner.textContent = TIE
    }
    return;
  }

  function resetBoard(){
    
  } 
  

} )






let arr1 = [0, 2 , 4 , 6 , 8]
let arr2 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function compare(arr1, arr2){
  let condition
  
  for (i = 0; i < arr2.length; i++){
    condition = arr2[i]
    console.log(condition)
    let winnerArray = []
    for(j = 0; j < arr1.length; j++){
      let number = arr1[j]
      let a = condition[0]
      let b = condition[1]
      let c = condition[2]
      if (number == a || number == b || number == c){
        winnerArray.push(number)
        if (winnerArray.length == '3'){
          return true;
        }        
      }
    }
  }
}