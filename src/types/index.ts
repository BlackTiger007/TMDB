export type Url = 'https://api.themoviedb.org/3';

export type QueryType = {
	[key: string]: string | number | null;
};

export type ErrorResponse = {
	statusCode: number;
	statusMessage: string;
};

export type ImagePath = string | null;

export type MovieBackdropImage = {
	aspectRatio: number;
	filePath: string;
	height: number;
	iso6391: null | string;
	voteAverage: number;
	voteCount: number;
	width: number;
};

export type MovieCastCredit = {
	castId: number;
	character: string;
	creditId: string;
	gender: number | null;
	id: number;
	name: string;
	order: number;
	profilePath: ImagePath;
};

export type MovieCrewCredit = {
	creditId: string;
	department: string;
	gender: number | null;
	id: number;
	job: string;
	name: string;
	profilePath: ImagePath;
};

export type MoviePosterImage = {
	aspectRatio: number;
	filePath: string;
	height: number;
	iso6391: string | null;
	voteAverage: number;
	voteCount: number;
	width: number;
};

export type Movie = {
	adult: boolean;
	backdropPath: ImagePath;
	belongsToCollection: null | object;
	budget: number;
	genres: ReadonlyArray<{
		id: number;
		name: string;
	}>;
	homepage: string | null;
	id: number;
	imdbId: string | null;
	originalLanguage: string;
	originalTitle: string;
	overview: string | null;
	popularity: number;
	posterPath: ImagePath;
	productionCompanies: ReadonlyArray<{
		id: number;
		name: string;
	}>;
	productionCountries: ReadonlyArray<{
		iso31661: string;
		name: string;
	}>;
	releaseDate: string;
	revenue: number;
	runtime: number | null;
	spokenLanguages: ReadonlyArray<{
		iso6391: string;
		name: string;
	}>;
	status: string;
	tagline: string | null;
	title: string;
	video: boolean;
	voteAverage: number;
	voteCount: number;
};

export type MovieVideo = {
	id: string;
	iso31661: string;
	iso6391: string;
	key: string;
	name: string;
	site: string;
	size: number;
	type: string;
};

export type Person = {
	adult: boolean;
	alsoKnownAs: ReadonlyArray<string>;
	biography: string;
	birthday: string | null;
	deathday: string | null;
	gender: number;
	homepage: string | null;
	id: number;
	imdbId: string;
	name: string;
	placeOfBirth: string | null;
	popularity: number;
	profilePath: ImagePath;
};

export type Company = {
	description: string;
	headquarters: string;
	homepage: string;
	id: number;
	logoPath: string;
	name: string;
	originCountry: string;
	parentCompany: null | Company;
};

export type AlternativeTitle = {
	iso_3166_1: string;
	title: string;
	type: string;
};

export type AlternativeTitlesResponse = {
	id: number;
	titles: AlternativeTitle[];
};

export type validateKeyResponse = {
	success: boolean;
	status_code: number;
	status_message: string;
};
