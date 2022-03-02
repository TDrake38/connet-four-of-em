document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for (var i = 0, len = squares.length; i < len; i++)

        (function(index){
        //add an onlcick to each square in the grid
            squares[i].onclick = function(){
            // if the square below your current square is taken, you can go ontop of it
                if(squares[index + 7].classList.contains('taken')) {
                    if (currentPlayer === 1) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-one')
                        // change the player
                        currentPlayer = 2
                        displayCurrentPlayer.innerHTML = currentPlayer
                    } else if (currentPlayer === 2) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-two')
                        // change the player
                        currentPlayer = 1
                        displayCurrentPlayer.innerHTML = currentPlayer
                    }
                    // if the square below your current square is not taken, you cant go here
                } else alert('Can not go here')
            }
        })(i)


    //Check the board for win or loose 
    function checkBoard() {
        //make const that shows all winning rows
        const winningArray = [
            [0, 1, 2, 3],
        ]
    }
    








})