function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } 
  if(argMoveId == 2){
    return 'papier';
  }
  if(argMoveId == 3){
    return 'nożyce';
  }else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch - tak nie zagramy!';
  }
}

function displayResult(argComputerMove, argPlayerMove){
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

if(argComputerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    return 'wygrywasz';
  
}
else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Ja wygrywam!')
    return 'przegrywasz';
    
}
else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Mamy remis!')
    return 'remis';
    
}
else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Ja wygrywam!')
    return 'przegrywasz';
    
}
else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
    return 'wygrywasz';
    
}
else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Mamy remis!')
    return'remis';
    
}
else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Ja wygrywam!')
    return'przegrywasz';
    
}
else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
    return 'wygrywasz';
    
}
else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Mamy remis!')
    return 'remis';
  
}
}



let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2) {
    computerMove = "papier";
}
else if (randomNumber == 3) {
    computerMove = 'nożyce';
}*/
printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);


let playerMove = getMoveName (playerInput)

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
    playerMove = 'papier';
}
else if (playerInput == '3'){
    playerMove = 'nożyce';
}
else {
    playerMove = 'nieznany ruch - tak nie zagramy!'
}*/
printMessage('Twój ruch to: ' + playerMove);



/*if(ComputerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
else if( ComputerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ja wygrywam!')
}
else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Mamy remis!')
}
else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam!')
}
else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!')
}
else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Mamy remis!')
}
else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!')
}
else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!')
}
else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy remis!')
}*/

let result = displayResult(computerMove, playerMove)
console.log('wybrane ruchy:'+ computerMove, playerMove);
printMessage('Zagrajmy jeszcze raz!');
