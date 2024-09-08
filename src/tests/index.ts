import TMDB from '..';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.API_KEY) {
	throw new Error('API_KEY is not defined');
}

const tmdb = new TMDB(process.env.API_KEY, 'de');

async function init() {
	try {
		await tmdb.account
			.lists(16965906)
			.then((e) => console.log('Test Passed', e))
			.catch((e) => console.error(e));
	} catch (error) {
		console.error('Error during tests:', error);
	}
}

init();
