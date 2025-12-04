const form = document.querySelector(".main__signUp__form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let email = form.email.value.trim();
	let p = document.createElement("p");
	p.style.textAlign = "left";
	p.style.marginLeft = "5em";
	p.style.marginTop = ".7em";
	p.style.fontSize = ".7rem";
	p.style.color = "hsl(0, 100%, 63%)";

	const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailTest.test(email)) {
		p.textContent = "Please enter a valid email address";
		form.parentElement.appendChild(p);
	}

	if (emailTest.test(email)) {
		form.submit();
	}

	if (email.length === 0) {
		p.textContent = "Enter your email please";
		form.parentElement.appendChild(p);
	}
});



