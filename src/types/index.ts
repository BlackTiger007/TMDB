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

export type changesResponse = {
	changes: Array<{
		key: string;
		items: Array<{
			id: string;
			action: 'added' | 'updated' | 'deleted';
			time: string; // in UTC time format
			iso_639_1: string;
			iso_3166_1: string;
			value:
				| string
				| number
				| {
						title?: string;
						type?: string;
						iso_3166_1?: string;
						primary?: boolean;
						tagline?: string;
						backdrop?: {
							file_path: string;
							iso_639_1: string | null;
						};
						poster?: {
							file_path: string;
							iso_639_1: string | null;
						};
						title_logo?: {
							file_path: string;
							iso_639_1: string | null;
						};
				  };
			original_value?:
				| string
				| number
				| {
						title?: string;
						type?: string;
						iso_3166_1?: string;
						primary?: boolean;
						tagline?: string;
						backdrop?: {
							file_path: string;
							iso_639_1: string | null;
						};
						poster?: {
							file_path: string;
							iso_639_1: string | null;
						};
						title_logo?: {
							file_path: string;
							iso_639_1: string | null;
						};
				  };
		}>;
	}>;
};

export interface CastMember {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
}

export interface CreditsResponse {
	id: number;
	cast: CastMember[];
}

export interface AccountStatesResponse {
	id: number;
	favorite: boolean;
	rated: boolean;
	watchlist: boolean;
}

export interface ExternalIDsResponse {
	id: number;
	imdb_id: string | null;
	wikidata_id: string | null;
	facebook_id: string | null;
	instagram_id: string | null;
	twitter_id: string | null;
}

export interface Image {
	aspect_ratio: number;
	height: number;
	iso_639_1: string;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
}

export interface ImageResponse {
	backdrops: Image[];
	id: number;
	logos: Image[];
	posters: Image[];
}

export interface Keyword {
	id: number;
	name: string;
}

export interface KeywordsResponse {
	id: number;
	keywords: Keyword[];
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	iso_639_1: string;
	name: string;
}

export interface LatestResponse {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection: null | {
		id: number;
		name: string;
		poster_path: string | null;
		backdrop_path: string | null;
	};
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export type ReleaseDate = {
	certification: string;
	descriptors: string[];
	iso_639_1: string;
	note: string;
	release_date: string;
	type: number;
};

export type CountryReleaseDates = {
	iso_3166_1: string;
	release_dates: ReleaseDate[];
};

export type ReleaseDatesResponse = {
	id: number;
	results: CountryReleaseDates[];
};
