import TMDB from '..';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.API_KEY) {
	throw new Error('API_KEY is not defined');
}

const tmdb = new TMDB(process.env.API_KEY, 'de');

async function init() {
	try {
		await tmdb.genres
			.movieList('de')
			.then(() => console.log('Test Passed: Genres Movie'))
			.catch((e) => console.error(e));

		await tmdb.genres
			.tvList('de')
			.then(() => console.log('Test Passed: Genres TV'))
			.catch((e) => console.error(e));
	} catch (error) {
		console.error('Error during tests:', error);
	}
}

init();
