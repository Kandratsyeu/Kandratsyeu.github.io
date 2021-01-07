document.addEventListener('DOMContentLoaded', () => {
    let gameField = document.getElementById('tic-tac-toe-game-window')
    function startGame() {
        let arr = [0,0,0,0,0,0,0,0,0]
        let buttons = document.createElement('div')
        function draw() {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == 1) {
                    buttons.childNodes[i].style.backgroundColor = 'red'
                } 
                if (arr[i] == -1) {
                    buttons.childNodes[i].style.backgroundColor = 'blue'
                } 
            }
        }
        function checkWinner(who) {
            for (let i = 0; i < 3; i++) {
                if (Math.abs(arr[i*3]+arr[i*3+1]+arr[i*3+2])===3) {
                    alert(`${who} выиграл!`)
                    arr=[0]
                    newGameButton.click()
                }              
                if (Math.abs(arr[i]+arr[i+3]+arr[i+6])===3) {
                    alert(`${who} выиграл!`)
                    arr=[0]
                    newGameButton.click()
                }   
            }
            if (Math.abs(arr[0]+arr[4]+arr[8])===3 || Math.abs(arr[2]+arr[4]+arr[6])===3) {
                alert(`${who} выиграл!`)
                arr=[0]
                newGameButton.click()
            }

        }
        function computerTurn() {
            if (arr[4]===0) {
                arr[4]=-1
            } else if (arr.includes(0)) {
                let random = Math.round((Math.random()*8))
                while (arr[random]!=0) {
                    random = Math.round((Math.random()*8))
                }
                arr[random]=-1
            } else {
                alert('Ничья!')
                newGameButton.click()
            }     
        }
        for (let i = 0; i < 9; i++) {
            let button = document.createElement('div')
            button.style.width = '30%'
            button.style.marginRight = '3%'
            button.style.height= '100px'
            button.style.border = '1px solid black'
            button.style.display = 'inline-block'
            button.addEventListener('click', () => {
                if (arr[i]===0) {
                    arr[i] = 1
                    draw()
                    checkWinner('Ты')
                    computerTurn()
                    draw()
                    checkWinner('Я')
                    console.log(arr)
                }
            })
            buttons.appendChild(button)
        }
        gameField.appendChild(buttons)
    }
    startGame()
    let newGameButton = document.getElementById('tic-tac-toe-new')
    newGameButton.addEventListener('click', (e) => {
        e.preventDefault()
        gameField.firstChild.remove()
        startGame()
    })
})