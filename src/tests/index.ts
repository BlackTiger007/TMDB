import TMDB from '..';

const tmdb = new TMDB('API_KEY', 'de');

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
}

init();
