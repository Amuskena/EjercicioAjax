document.addEventListener('DOMContentLoaded', () => {
	fetchData();
});

const fetchData = async () => {
	try {
		
		const res = await fetch ("https://rickandmortyapi.com/api/character");
		const data = await res.json();

		let personajes = new Array();
		let episodios = new Array();

		//console.log(data);
		data.results.forEach(item => {
			// Añade los nombres al array personajes
			personajes.push(item.name);
			episodios.push(item.episode);
		});

		
		const select = document.querySelector('select');
		const textarea = document.querySelector('textarea');


		// Rellena el select con los nombres del array personajes
		for (let i in personajes){
			select.options.add(new Option(personajes[i]));
		}

		// Evento cuando cambia la selección del select
		select.addEventListener('change', function onChange(event) {
		  let nombre = select.options[select.selectedIndex].text;
		  let indice = 0;

		  // Busca en el array de personajes el índice del personaje seleccionado
		  // para mostrar el contenido del mismo índice del array de episodios
		  // (Sé que es cutre, lo sé, pero no me sale otra cosa)
		  for (let i in personajes){
		  	if(nombre == personajes[i]){
		  		indice = i;
		  	}
		  }
		  textarea.textContent = "\n\nLista de episodios de " + personajes[indice] + ":\n\n" + episodios[indice];

		});


		} catch (error) {
			console.log(error);
		} finally {
	}
};





