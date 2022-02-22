document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});

const fetchData = async () => {
	try {
		
		const res = await fetch ("https://rickandmortyapi.com/api/character");
		const data = await res.json();

		let personajes = new Array();

		//console.log(data);
		//document.write("LISTA DE PERSONAJES<br><br>");
		data.results.forEach(item => {
			//document.write(item.name + "<br>");
			console.log(item.name + "<br>");
			//document.write('<img src="' + item.image +'"> <br>');
			let imagen = ('<img id="img' + item.id + '" src="' + item.image +'"> <br>');
			//document.write(imagen);
			personajes.push(item.name);


			});
		const select = document.querySelector('select');
		for (let i in personajes){
			select.options.add(new Option(personajes[i]));
			//console.log(personajes[i]);
		}


		} catch (error) {
		console.log(error);
		} finally {
	}
};

// function selectorPersonajes() {
// 	const select = document.querySelector('select');
// 	select.options.add(new Option('Text 1', 'Value1'))
// }



