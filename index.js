const { hash } = window.location;
const message = atob(hash.replace('#', ' '));

if (message) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');

	document.querySelector('h1').innerText = message;
}

const form = document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();

	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');

	let inputMessage = document.querySelector('#message-input');
	const encryptedInput = btoa(inputMessage.value);

	const input = document.querySelector('#link-input');
	input.value = `${window.location}#${encryptedInput}`;
	input.select();
});
