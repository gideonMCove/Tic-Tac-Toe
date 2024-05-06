/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let beginingEndingMessage = document.getElementById('beginingEndingMessage')
let resetButton = document.getElementById('resetButton')
let boards = Array.from(document.getElementsByClassName('square'))
let turnNumber = 0
const oPlayer = "O"
const xPlayer = "X"
let playersTurn = oPlayer//Defualt players turn
let squares = Array(9).fill(null)// Empty array for X and 0
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8]
]

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const startGame = () => {
    boards.forEach(board => board.addEventListener('click', boardSelected))
}
function boardSelected(e) {//Changes Null to equal the players chosen letter
    const id = e.target.id
   for ( i = 0; i < 9; i++){
        if(!squares[id]){
            squares[id] = playersTurn
            e.target.innerText = playersTurn
            if(winCondition() !==false){
                beginingEndingMessage.innerHTML = `${playersTurn} WINS`
                turnNumber = 0
                    return
            }
            
            playersTurn = playersTurn == oPlayer ? xPlayer: oPlayer
            turnNumber++
            if( turnNumber ==9){
                beginingEndingMessage.innerHTML = 'Draw'
                turnNumber = 0
            }       
            
}
}}
    



function winCondition() {
    for (let condition of winConditions) {
        let [a,b,c] = condition

        if(squares[a] && (squares[a] == squares[b] && squares[a] == squares[c])) {
            beginingEndingMessage.innerHTML = `${playersTurn} LOSES HAHA`
            return [a,b,c]
        }
    }
    return false
}

resetButton.addEventListener('click', reset)
function reset() {
    squares.fill(null)// changes marks back to nothing
    boards.forEach(board => {
        board.innerText = ''
    })
    playersTurn = oPlayer// player is back to default. 
    beginingEndingMessage.innerHTML = "Click on the Board to Begin"//Text is back to default
}
startGame()
/*----------------------------- Event Listeners -----------------------------*/

