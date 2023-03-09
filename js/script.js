let playGame = (buttonNumber) => {
	let getRandom = () => {
		return Math.floor(Math.random() * 3 + 1);
	}
	
	let getMoveByNumber = (moveNumber) => {
		switch(moveNumber) {
			case 1: return 'kamień';
			case 2: return 'papier';
			case 3: return 'nożyce';
			default: return 'nieznany ruch';
		}
	}
	
	let getComputerMove = () => {
		return getMoveByNumber(getRandom());
	}
	
	let getResult = (playerMove, computerMove) => {
		if (playerMove == 'nieznany ruch') {
			return 'Gracz ma nieznany ruch! Zagraj jeszcze raz.'
		}
	
		if (computerMove == 'nieznany ruch') {
			return 'Komputer ma nieznany ruch! Zagraj jeszcze raz.'
		}
	
		switch(playerMove) {
			case 'kamień': 
				if (computerMove == 'kamień') {
					return 'Remis!'
				} else if (computerMove == 'papier') {
					return 'Komputer wygrywa.'
				} else {
					return 'Ty wygrywasz.'
				}
	
			case 'papier': 
				if (computerMove == 'kamień') {
					return 'Ty wygrywasz.'
				} else if (computerMove == 'papier') {
					return 'Remis!'
				} else {
					return 'Komputer wygrywa.'
				}
	
			case 'nożyce': 
				if (computerMove == 'kamień') {
					return 'Komputer wygrywa.'
				} else if (computerMove == 'papier') {
					return 'Ty wygrywasz.'
				} else {
					return 'Remis!'
				}
		}
	}

	clearMessages();
	let computerMove = getComputerMove();
	let playerMove = getMoveByNumber(buttonNumber);
	
	printMessage('Twój ruch to: ' + playerMove);
	printMessage('Mój ruch to: ' + computerMove);
	printMessage(getResult(playerMove, computerMove));
}

let playRock = () => {
	playGame(1);
}
let playPaper = () => {
	playGame(2);
}
let playScissors = () => {
	playGame(3);
}

document.getElementById('play-rock').addEventListener('click', playRock);
document.getElementById('play-paper').addEventListener('click', playPaper);
document.getElementById('play-scissors').addEventListener('click', playScissors);


