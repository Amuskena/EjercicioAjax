document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});

const fetchData = async () => {
	try {
		
		const res = await fetch ("https://rickandmortyapi.com/api/character");
		const data = await res.json();
		//console.log(data);
		document.write("LISTA DE PERSONAJES<br><br>");
		data.results.forEach(item => {
		//console.log(item.name);
		document.write(item.name + "<br>");
		document.write('<img src="' + item.image +'"> <br>');
		
		});

		} catch (error) {
		console.log(error);
		} finally {
	}
};


