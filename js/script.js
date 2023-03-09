const playGame = (buttonNumber) => {
	const getRandom = () => {
		return Math.floor(Math.random() * 3 + 1);
	}
	
	const getMoveByNumber = (moveNumber) => {
		switch(moveNumber) {
			case 1: return 'kamień';
			case 2: return 'papier';
			case 3: return 'nożyce';
			default: return 'nieznany ruch';
		}
	}
	
	const getComputerMove = () => {
		return getMoveByNumber(getRandom());
	}
	
	const getResult = (playerMove, computerMove) => {
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
	const computerMove = getComputerMove();
	const playerMove = getMoveByNumber(buttonNumber);
	
	printMessage('Twój ruch to: ' + playerMove);
	printMessage('Mój ruch to: ' + computerMove);
	printMessage(getResult(playerMove, computerMove));
}

const playRock = () => {
	playGame(1);
}
const playPaper = () => {
	playGame(2);
}
const playScissors = () => {
	playGame(3);
}

document.getElementById('play-rock').addEventListener('click', playRock);
document.getElementById('play-paper').addEventListener('click', playPaper);
document.getElementById('play-scissors').addEventListener('click', playScissors);


