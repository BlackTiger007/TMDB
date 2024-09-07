import TMDB from '..';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.API_KEY) {
	throw new Error('API_KEY is not defined');
}

const tmdb = new TMDB(process.env.API_KEY, 'de');

async function init() {
	try {
		await tmdb.watchProviders
			.availableRegions()
			.then(() => console.log('Test Passed: Watch Providers - Available Regions'))
			.catch((e) => console.error(e));
	} catch (error) {
		console.error('Error during tests:', error);
	}
}

init();
