import axios from 'axios'

export const getCharacter= async () => {
	try {
		const { data } = await axios.get(
			'https://rickandmortyapi.com/api/character?page=2'
		);
		return data.results;
	} catch (error) {
		console.error('There was an error: ', error);
	}
};




