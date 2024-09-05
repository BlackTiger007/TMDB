import TMDB from '..';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.API_KEY) {
	throw new Error('API_KEY is not defined');
}

const tmdb = new TMDB(process.env.API_KEY, 'de');

async function init() {
	try {
		await tmdb.credits
			.details('52fe420ec3a36847f8000679')
			.then(() => console.log('Test Passed: Credits Details'))
			.catch((e) => console.error(e));
	} catch (error) {
		console.error('Error during tests:', error);
	}
}

init();
