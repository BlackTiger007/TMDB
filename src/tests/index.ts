import TMDB from '..';
import dotenv from 'dotenv';
import { checkItemExists, test } from './fn';

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
		// await tmdb.movie
		// 	.credits(12, 'DE')
		// 	.then(() => console.log('Test Passed: Credits'))
		// 	.catch((e) => console.error(e));
		// test((await tmdb.movie.accountStates(12)).favorite, false);
		// test((await tmdb.movie.externalIds(12)).imdb_id, 'tt0266543');
		// await tmdb.movie
		// 	.images(12, 'DE')
		// 	.then(() => console.log('Test Passed: Images'))
		// 	.catch((e) => console.error(e));
		// await tmdb.movie
		// 	.keywords(12)
		// 	.then(() => console.log('Test Passed: Keywords'))
		// 	.catch((e) => console.error(e));
		// await tmdb.movie
		// 	.latest()
		// 	.then(() => console.log('Test Passed: Latest'))
		// 	.catch((e) => console.error(e));
		// await tmdb.movie
		// 	.releaseDates(12)
		// 	.then(() => console.log('Test Passed: Release Dates'))
		// 	.catch((e) => console.error(e));
		// await tmdb.movie
		// 	.translations(12)
		// 	.then(() => console.log('Test Passed: Translations'))
		// 	.catch((e) => console.error(e));
		// await tmdb.movie
		// 	.videos(12)
		// 	.then(() => console.log('Test Passed: Videos'))
		// 	.catch((e) => console.error(e));
		// await tmdb.movie
		// 	.watchProviders(12)
		// 	.then(() => console.log('Test Passed: Watch Providers'))
		// 	.catch((e) => console.error(e));
		// await tmdb.movie
		// 	.lists(12)
		// 	.then(() => console.log('Test Passed: Lists'))
		// 	.catch((e) => console.error(e));
		await tmdb.movie
			.recommendations(12)
			.then(() => console.log('Test Passed: Recommendations'))
			.catch((e) => console.error(e));
	} catch (error) {
		console.error('Error during tests:', error);
	}
}

init();
