import TMDB from '..';
import dotenv from 'dotenv';
import { test, checkItemExists } from './fn';

dotenv.config();

if (!process.env.API_KEY) {
	throw new Error('API_KEY is not defined');
}

const tmdb = new TMDB(process.env.API_KEY, 'de');

async function init() {
	try {
		test((await tmdb.movie.getMovie(12)).title, 'Findet Nemo');
		test((await tmdb.movie.alternativeTitle(12, 'DE')).id, 12);
		const changes = (await tmdb.movie.changes(1032823, '2024-09-01', '2024-09-02')).changes;
		await checkItemExists('66d407564c75b4647978ed5a', changes);
		await tmdb.movie
			.credits(12, 'DE')
			.then(() => console.log('Test Passed: Credits'))
			.catch((e) => console.error(e));
	} catch (error) {
		console.error('Error during tests:', error);
	}
}

init();
