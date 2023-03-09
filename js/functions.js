let printMessage = (msg) => {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

let clearMessages = () => {
	document.getElementById('messages').innerHTML = '';
}