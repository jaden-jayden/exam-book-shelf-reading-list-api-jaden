const form = document.querySelector("form");
const main = document.querySelector("main");
const btn = document.getElementById("btn");

let bookgallery = document.getElementById("book-gallery");

function postbook({ name, author, genre, cover, progress }) {
	const div = document.createElement("div");
	const img = document.createElement("img");
	const divtwo = document.createElement("div");
	const h2 = document.createElement("h2");
	const h3 = document.createElement("h3");
	const h5 = document.createElement("h5");
	const h3b = document.createElement("h3");
	const h3n = document.createElement("h3");
	const barthing = document.createElement("div");
	const bar = document.createElement("progress");
	const booksamount = document.getElementById("books-amount");

	img.src = cover;
	h2.textContent = name;
	h3.textContent = author;
	h5.textContent = genre;
	h3b.textContent = "Progress";
	h3n.textContent = progress * 100;
	bar.value = progress;
	ba = bookgallery.childElementCount + 1;
	booksamount.textContent = ba;

	div.classList.add("book-card");
	h5.classList.add("book-card-chip");
	divtwo.classList.add("book-card-content");
	bar.classList.add("bar");
	div.append(img, divtwo);
	divtwo.append(h2, h3, h5, h3b, h3n, barthing);
	barthing.append(bar);

	return div;
}

function showbook(bookshevels) {
	for (let i = 0; i < bookshevels.length; i++) {
		const { name, author, genre, cover, progress } = bookshevels[i];

		const bigbook = postbook({
			name,
			author,
			genre,
			cover,
			progress,
		});

		bookgallery.appendChild(bigbook);
	}
}
document.addEventListener("DOMContentLoaded", async () => {
	const response = await fetch("http://10.69.4.8:3000/v1/books?apiKey=123");
	const data = await response.json();

	btn.addEventListener("click", async () => {
		const response = await fetch(
			"http://10.69.4.8:3000/v1/books?apiKey=123&page=1&pageSize=6",
		);
		const data = await response.json();

		booksamount.textContent = ba;
		clearBooks();
		showbook(data);
		console.log;
	});

	console.log(bookgallery.childElementCount);
	showbook(data);
	console.log(data);
});

form.addEventListener("submit", async (e) => {
	e.preventDefault();
});

function clearBooks() {
	bookgallery.textContent = "";
	bookgallery.classList.add("book-gallery");

	main.appendChild(bookgallery);
}

btn.addEventListener("click", async () => {
	const response = await fetch(
		"http://10.69.4.8:3000/v1/books?apiKey=123&page=1&pageSize=6",
	);
	const data = await response.json();

	clearBooks();
	showbook(data);
	console.log;
});
