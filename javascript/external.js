let username = window.prompt("Please enter your name:")

if (username) {
  document.getElementById("welcome-user").textContent=("Hello, welcome "+ username + "!");
} else {
  document.getElementById("welcome-user").textContent=("Hello, welcome guest!");
}
