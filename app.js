
//let gameboard = 

/*function checkWinCondition() {
	// checks for win conditions
}

function checkTieCondition() {
	// check if there is a tie
}

function switchPlayers() {
	// switch between "x" and 'o'
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
 currentPlayer = currentPlayer === 'X' ? "O" : "X";
}

function checkBoxNotOccupied() {
	//determine if the game box that is clicked is empty!
}

function startGame() {}

function turnSequence() {
	// all the things that happen when a user takes a turn
}

function writeMessage(message) {
	// update the gameboard message with
}
*/

//When a user clicks on a square, mark the square with the current user's token (alternating with each click). You can add an X or an O or some other marker that corresponds to the current player.
let currentPlayer = 'X';


function switchPlayer() {
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

}

let playersTurn = document.querySelector('.player plays')
if(currentPlayer === 'X'){
    return 
}

let playBox = document.querySelectorAll(".box");
//console.log(square);


playBox.forEach((playBox)=>{
    playBox.addEventListener( 'click',playerClickEvent)
})


function playerClickEvent(event) {
    //console.log(event.target.id);
    event.target.innerHTML = currentPlayer;
switchPlayer()
    
}
const reSetIt = document.querySelector('button')

reSetIt.addEventListener('click',resetClickEvent)

function resetClickEvent(event){
document.querySelectorAll('.box').forEach((box) => (box.innerHTML = ''));
}
