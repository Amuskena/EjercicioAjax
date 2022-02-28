const fetchEpisode = async (characterEpisodeApiUrl) => {
	try {
		const res = await fetch(characterEpisodeApiUrl);
		return await res.json();
	} catch (error) {
		console.log(error);
	}
}

const fetchEpisodes = async (characterEpisodesApiUrls) => {
	const charactersEpisodes = [];

	for (const characterEpisodeApiUrl of characterEpisodesApiUrls) {
		const characterEpisode = await fetchEpisode(characterEpisodeApiUrl);
		charactersEpisodes.push(characterEpisode);
	}

	return charactersEpisodes;
}

const removeEpisodes = () => {
	const episodesNode = document.getElementById("episodes");

	if (episodesNode) {
		episodesNode.remove();
	}
}

const hideLoading = () => {
	const loadingNode = document.getElementById("loading");
	loadingNode.classList.add("hide");
};

const showLoading = () => {
	const loadingNode = document.getElementById("loading");
	loadingNode.classList.remove("hide");
};

const renderEpisodes = (episodes) => {
	const appNode = document.getElementById("app");
	const episodesNode = document.createElement("ul");

	episodesNode.id = "episodes";
	appNode.appendChild(episodesNode);

	episodes.forEach(episode => {
		const episodeNode = document.createElement("li");
		episodeNode.id = "episode" + episode.name;
		episodeNode.innerHTML = episode.name;
		episodesNode.appendChild(episodeNode);
	});
}

const fetchCharacters = async () => {
	try {
		const res = await fetch ("https://rickandmortyapi.com/api/character");
		const data = await res.json();

		let personajes = [];
		let episodios = [];

		data.results.forEach(item => {
			personajes.push(item.name);
			episodios.push(item.episode);
		});

		const select = document.querySelector('select');

		for (let i in personajes){
			select.options.add(new Option(personajes[i]));
		}

		return {
			personajes,
			episodios
		}
	} catch (error) {
		console.log(error);
	}
};

const addOnSelectChangeEvent = (personajes, episodios) => {
	const select = document.querySelector('select');

	select.addEventListener('change', async function onChange(event) {
		removeEpisodes();
		showLoading();

		let nombre = select.options[select.selectedIndex].text;
		let indice = 0;

		for (let i in personajes){
			if(nombre == personajes[i]){
				indice = i;
			}
		}

		const characterEpisodesApiUrls = episodios[indice];
		const charactersEpisodes = await fetchEpisodes(characterEpisodesApiUrls);

		renderEpisodes(charactersEpisodes);
		hideLoading();
	});
};

document.addEventListener('DOMContentLoaded', async () => {
	showLoading();
	const { personajes, episodios } = await fetchCharacters();
	hideLoading();
	addOnSelectChangeEvent(personajes, episodios);
});



