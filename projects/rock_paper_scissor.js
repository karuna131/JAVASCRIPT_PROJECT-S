function win() {
    console.log ('You win!')
}
function lose(){
    console.log('You lose!')
}
const read = require('readline-sync')
while (true){
    player_choice = read.question('What do you pick? (rock, paper, scissors) : ')
    random_move = Math.floor(Math.random() * 2) + 0;
    moves = ['rock', 'paper', 'scissors']
    computer_choice = moves[random_move]

    if (player_choice == computer_choice){
        console.log('Draw!')
    }
    else if (player_choice == 'rock' && computer_choice == 'scissors'){
        win()
    }
    else if (player_choice == 'paper' && computer_choice == 'scissors'){
        lose()
    }
    else if (player_choice == 'scissors' && computer_choice == 'paper'){
        win()
    }
    else if (player_choice == 'scissors' && computer_choice == 'rock'){
        lose()
    }
    else if (player_choice == 'paper' && computer_choice == 'rock'){
        win()
    }
    else if (player_choice == 'rock' && computer_choice == 'paper'){
        lose()
    }
    again = read.question('Do you want to play again? (y or n) : ')
    if (again == 'n'){
        break
    }
}