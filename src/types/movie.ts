export type Url = 'https://api.themoviedb.org/3';

export type ImagePath = string | null;

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

export type DetailsResponse = {
	adult: boolean;
	backdropPath: ImagePath;
	belongsToCollection: null | {
		id: number;
		name: string;
		posterPath: string | null;
		backdropPath: string | null;
	};
	budget: number;
	genres: ReadonlyArray<Genre>;
	homepage: string | null;
	id: number;
	imdbId: string | null;
	originalLanguage: string;
	originalTitle: string;
	overview: string | null;
	popularity: number;
	posterPath: ImagePath;
	productionCompanies: ReadonlyArray<ProductionCompany>;
	productionCountries: ReadonlyArray<ProductionCountry>;
	releaseDate: string;
	revenue: number;
	runtime: number | null;
	spokenLanguages: ReadonlyArray<SpokenLanguage>;
	status: string;
	tagline: string | null;
	title: string;
	video: boolean;
	voteAverage: number;
	voteCount: number;
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

export type ValidateKeyResponse = {
	success: boolean;
	status_code: number;
	status_message: string;
};

export type ChangesResponse = {
	changes: Array<{
		key: string;
		items: Array<{
			id: string;
			action: 'added' | 'updated' | 'deleted';
			time: string;
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

export type MovieData = {
	homepage: string;
	overview: string;
	runtime: number;
	tagline: string;
	title: string;
};

export type Translation = {
	iso_3166_1: string;
	iso_639_1: string;
	name: string;
	english_name: string;
	data: MovieData;
};

export type TranslationsResponse = {
	id: number;
	translations: Translation[];
};

export type Trailer = {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	published_at: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	id: string;
};

export type VideosResponse = {
	id: number;
	results: Trailer[];
};

export type StreamingProvider = {
	logo_path: string;
	provider_id: number;
	provider_name: string;
	display_priority: number;
};

export type RegionAvailability = {
	link: string;
	flatrate?: StreamingProvider[];
	rent?: StreamingProvider[];
	buy?: StreamingProvider[];
};

export type WatchProvidersResponse = {
	id: number;
	results: {
		[regionCode: string]: RegionAvailability;
	};
};

export type MovieList = {
	description: string;
	favorite_count: number;
	id: number;
	item_count: number;
	iso_639_1: string;
	iso_3166_1: string;
	list_type: string;
	name: string;
	poster_path: string | null;
};

export type ListsResponse = {
	id: number;
	page: number;
	results: MovieList[];
};

export type GenreID =
	| 28 // Action
	| 12 // Adventure
	| 16 // Animation
	| 35 // Comedy
	| 10751 // Family
	| 14; // Fantasy

// Film Typ 2
export type Movie2 = {
	backdrop_path: string;
	id: number;
	title: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	original_language: string;
	genre_ids: GenreID[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type RecommendationsResponse = {
	page: number;
	results: Movie2[];
	total_pages: number;
	total_results: number;
};
