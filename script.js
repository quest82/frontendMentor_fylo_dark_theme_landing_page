const form = document.querySelector(".main__signUp__form");
const input = document.querySelector("#email");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const email = form.email.value.trim();
	const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Reset
	error.style.display = "none";

	if (!emailTest.test(email)) {
		error.style.display = "block";
		error.textContent = "Please enter a valid email address";
	}

	if (emailTest.test(email)) {
		form.submit();
	}

	if (email.length === 0) {
		error.textContent = "Enter an email address";
		error.style.display = "block";
	}
});
