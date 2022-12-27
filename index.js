document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector("#message");

function addMovie(event) {
	event.preventDefault();
	let inputField = document.querySelector("input");
	const movie = document.createElement("li");

	const movieTitle = document.createElement("span");
	movieTitle.textContent = inputField.value;
	movieTitle.addEventListener("click", crossOffMovie);
	movie.appendChild(movieTitle);

	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "x";
	deleteBtn.addEventListener("click", deleteMovie);
	movie.appendChild(deleteBtn);

	const list = document.querySelector("ul");
	list.appendChild(movie);

	inputField.value = "";
}

function deleteMovie(event) {
	message.textContent = `Your movie was deleted!`;
	revealMessage();

	event.target.parentNode.remove();
}

function crossOffMovie(event) {
	event.target.classList.toggle("checked");

	if (event.target.classList.contains("checked") === true) {
		message.textContent = "You watched this movie";
	} else {
		message.textContent = "You added your movie back!";
	}
	revealMessage();
}

function revealMessage() {
	setTimeout(() => {
		message.classList.add("hide");
	}, 1000);
}
