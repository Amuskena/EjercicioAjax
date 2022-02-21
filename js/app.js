document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});

const fetchData = async () => {
	try {
		const res = await fetch ("https://rickandmortyapi.com/api/character");
		const data = await res.json();
		//console.log(data);
		data.results.forEach(item => {
		//console.log(item.name);
		document.write(item.name + "<br>");
	});

	} catch (error) {
		console.log(error);
	} finally {
	}
};

