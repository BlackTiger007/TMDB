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
		console.log(check);
	} else {
		throw new Error(e1 + ' : ' + e2);
	}
};

async function init() {
	test((await tmdb.getMovie(12)).title, 'Findet Nemo');
	test((await tmdb.alternativeTitle(12, 'DE')).id, 12);
	test(
		(await tmdb.changes(1032823, '2024-09-01', '2024-09-02')).changes[0].items[0].id,
		'66d407564c75b4647978ed5a'
	);
}

init();
