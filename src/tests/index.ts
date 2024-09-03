import TMDB from '..';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.API_KEY) {
	throw new Error('API_KEY is not defined');
}

const tmdb = new TMDB(process.env.API_KEY, 'de');

const test = async (e1: any, e2: any) => {
	const check = e1 === e2;
	if (check) {
		console.log(`Test Passed: ${e1} === ${e2}`);
	} else {
		throw new Error(`Test Failed: Expected ${e2}, but got ${e1}`);
	}
};

async function checkItemExists(idToCheck: string, changes: any[]) {
	const found = changes.some((change) =>
		change.items.some((item: { id: string }) => item.id === idToCheck)
	);
	if (found) {
		console.log(`ID ${idToCheck} found in changes.`);
	} else {
		throw new Error(`ID ${idToCheck} not found in changes.`);
	}
}

async function init() {
	try {
		await test((await tmdb.movie.getMovie(12)).title, 'Findet Nemo');
		await test((await tmdb.movie.alternativeTitle(12, 'DE')).id, 12);
		const changes = (await tmdb.movie.changes(1032823, '2024-09-01', '2024-09-02')).changes;
		await checkItemExists('66d407564c75b4647978ed5a', changes);
	} catch (error) {
		console.error('Error during tests:', error);
	}
}

init();
