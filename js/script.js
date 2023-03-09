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

let getComputerMove = () => {
	switch(getRandom()) {
		case 1: return 'kamień';
		case 2: return 'papier';
		case 3: return 'nożyce';
		default: return 'nieznany ruch';
	}
}

let computerMove = getComputerMove();

printMessage('Mój ruch to: ' + computerMove);