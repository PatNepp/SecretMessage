const form = document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	const inputMessage = document.querySelector('#message-input');
	const encryptedInput = btoa(inputMessage.value);

	document.querySelector('#link-input').value = encryptedInput;
	const decryptInput = atob(encryptedInput);
	console.log(decryptInput);
});
