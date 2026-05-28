async function getbook() {
	keys = apiKey = 123;

	const response = await fetch(
		"http://10.69.4.8:3000/v1/books?apiKey=123&page=1&pageSize=6",
	);
	const response2 = await fetch(
		"http://10.69.4.8:3000/v1/books?page=1&pageSize=6",
	);
	const data = await response.json();
	const yah = await response2.json;
	console.log(data);
	console.log(yah);
}

getbook();

async function getbook2() {
	const response = await fetch(
		"http://10.69.4.8:3000/v1/books?page=1&pageSize=6",
	);
	const data = await response.json();

	console.log(data);
}

getbook2();
