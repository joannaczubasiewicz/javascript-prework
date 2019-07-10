function playGame(playerInput) {
    clearMessages()

    function getMoveName(argMoveId) {
        if (argMoveId === 1) {
            return 'kamień';
        }
        if (argMoveId === 2) {
            return 'papier';
        }
        if (argMoveId === 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch - tak nie zagramy!';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + ".");

        if (argComputerMove === argPlayerMove) {
            printMessage('Mamy remis!')
            return 'remis';
        } else if (
            (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') ||
            (argComputerMove === 'papier' && argPlayerMove === 'kamień') ||
            (argComputerMove === 'nożyce' && argPlayerMove === 'papier')
        ) {
            printMessage('Ja wygrywam!')
            return 'przegrywasz';
        } else {
            printMessage('Ty wygrywasz!');
            return 'wygrywasz';
        }



    }



    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);


    printMessage('Mój ruch to: ' + computerMove + ".");




    console.log('Gracz wpisał: ' + playerInput);


    let playerMove = getMoveName(playerInput);


    printMessage('Twój ruch to: ' + playerMove + ".");





    let result = displayResult(computerMove, playerMove);
    console.log('wybrane ruchy:' + computerMove, playerMove);
    printMessage('Zagrajmy jeszcze raz!');
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);

});

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);

});

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);

});