document.getElementById("login-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username === "hanna" && password === "1234") {
		document.getElementById("message").textContent = "Login successful!";
	} else {
		document.getElementById("message").textContent = "Invalid username or password.";
	}
});