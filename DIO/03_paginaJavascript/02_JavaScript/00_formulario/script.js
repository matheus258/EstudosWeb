const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const message = document.getElementById('message').value;

	console.log(name, email, phone, message);
});