let printMessage = (msg) => {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

let clearMessages = () => {
	document.getElementById('messages').innerHTML = '';
}

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

let getPlayerMove = () => {
	let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.') * 1;

	return getMoveByNumber(playerInput);
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

let playerMove = getPlayerMove();
let computerMove = getComputerMove();

printMessage('Twój ruch to: ' + playerMove);
printMessage('Mój ruch to: ' + computerMove);
printMessage(getResult(playerMove, computerMove));


