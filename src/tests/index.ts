import TMDB from '..';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.API_KEY) {
	throw new Error('API_KEY is not defined');
}

const tmdb = new TMDB(process.env.API_KEY, 'de');

async function init() {
	try {
		await tmdb.keywords
			.details(3588)
			.then(() => console.log('Test Passed: Keywords'))
			.catch((e) => console.error(e));
	} catch (error) {
		console.error('Error during tests:', error);
	}
}

init();
