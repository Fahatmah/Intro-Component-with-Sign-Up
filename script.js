const form = document.getElementById('dataForm');
const firstName = document.getElementById('fnameInput');
const lastName = document.getElementById('lnameInput');
const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');
const inputValid = true;

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	//get values from inputs
	const firstNameVal = firstName.value.trim();
	const lastNameVal = lastName.value.trim();
	const emailVal = email.value.trim();
	const passwordVal = password.value.trim();

	if (firstNameVal == '') {
		errorInput(firstName, 'First Name cannot be empty');
	} else {
		validInput(firstName);
	}

	if (lastNameVal == '') {
		errorInput(lastName, 'Last Name cannot be empty');
	} else {
		validInput(lastName);
	}

	if (emailVal == '') {
		errorInput(email, 'Email cannot be empty');
	} else if (!isEmail(emailVal)) {
		errorInput(email, 'Looks like this is not an email');
	} else {
		validInput(email);
	}

	if (passwordVal == '') {
		errorInput(password, 'Password cannot be empty');
	} else {
		validInput(password);
	}
}

function errorInput(input, message) {
	const inputControl = input.parentElement;
	const invalidInput = inputControl.querySelector('.invalid__txt');

	//add error message inside the invalidInput
	invalidInput.innerHTML = message;

	//add error class
	inputControl.className = 'input__data invalid';
}

function validInput(input) {
	const inputControl = input.parentElement;
	inputControl.className = 'input__data valid';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
