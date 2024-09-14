type Creator = {
	id: number;
	credit_id: string;
	name: string;
	gender: number;
	profile_path: string | null;
};

type Genre = {
	id: number;
	name: string;
};

type Network = {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
};

type LastEpisode = {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string | null;
};

type Season = {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string | null;
	season_number: number;
	vote_average: number;
};

type SpokenLanguage = {
	english_name: string;
	iso_639_1: string;
	name: string;
};

export type DetailsResponse = {
	adult: boolean;
	backdrop_path: string;
	created_by: Creator[];
	episode_run_time: number[];
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: LastEpisode | null;
	name: string;
	next_episode_to_air: LastEpisode | null;
	networks: Network[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path: string | null;
		name: string;
		origin_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	}[];
	seasons: Season[];
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
};

type Rated = {
	value: number;
};

export type AccountStateResponse = {
	id: number;
	favorite: boolean;
	rated: Rated | null;
	watchlist: boolean;
};

export type AggregateCreditsResponse = {
	cast: Array<{
		adult: boolean;
		gender: number;
		id: number;
		known_for_department: string;
		name: string;
		original_name: string;
		popularity: number;
		profile_path: string | null;
		roles: Array<{
			credit_id: string;
			character: string;
			episode_count: number;
		}>;
		total_episode_count: number;
		order: number;
	}>;
	crew: Array<{
		adult: boolean;
		gender: number;
		id?: number;
		known_for_department: string;
		name: string;
		original_name: string;
		popularity: number;
		profile_path: string | null;
		jobs: Array<{
			credit_id: string;
			job: string;
			episode_count: number;
		}>;
		department: string;
		total_episode_count: number;
	}>;
	id: number;
};

export type AlternativeTitlesResponse = {
	id: number;
	results: Array<{
		iso_3166_1: string;
		title: string;
		type: string;
	}>;
};

export type ChangesResponse = {
	changes: Array<{
		key: string;
		items: Array<{
			id: string;
			action: 'added' | 'updated' | 'deleted';
			time: string;
			iso_639_1: string | null;
			iso_3166_1: string | null;
			value: {
				poster?: {
					file_path: string;
					iso_639_1?: string;
				};
				backdrop?: {
					file_path: string;
					iso_639_1?: string;
				};
			};
			original_value?: {
				poster?: {
					file_path: string;
					iso_639_1: string | null;
				};
				backdrop?: {
					file_path: string;
					iso_639_1: string | null;
				};
			};
		}>;
	}>;
};

export type ContentRatingsResponse = {
	results: Array<{
		descriptors: string[];
		iso_3166_1: string;
		rating: string;
	}>;
	id: number;
};

export type CreditsResponse = {
	cast: Array<{
		adult: boolean;
		gender: number;
		id: number;
		known_for_department: string;
		name: string;
		original_name: string;
		popularity: number;
		profile_path: string | null;
		character: string;
		credit_id: string;
		order: number;
	}>;
	crew: Array<{
		adult: boolean;
		gender: number;
		id: number;
		known_for_department: string;
		name: string;
		original_name: string;
		popularity: number;
		profile_path: string | null;
		credit_id: string;
		department: string;
		job: string;
	}>;
	id: number;
};

export type EpisodeGroupsResponse = {
	results: Array<{
		description: string;
		episode_count: number;
		group_count: number;
		id: string;
		name: string;
		network: {
			id: number;
			logo_path: string | null;
			name: string;
			origin_country: string;
		};
		type: number;
	}>;
	id: number;
};

export type ExternalIdsResponse = {
	id: number;
	imdb_id: string;
	freebase_mid: string;
	freebase_id: string;
	tvdb_id: number;
	tvrage_id: number;
	wikidata_id: string;
	facebook_id: string;
	instagram_id: string;
	twitter_id: string;
};

export type ImagesResponse = {
	backdrops: {
		aspect_ratio: number;
		height: number;
		iso_639_1: string | null;
		file_path: string;
		vote_average: number;
		vote_count: number;
		width: number;
	}[];
};

export type KeywordsResponse = {
	results: {
		name: string;
		id: number;
	}[];
};

export type LatestResponse = {
	adult: boolean;
	backdrop_path: string | null;
	created_by: any[];
	episode_run_time: number[];
	first_air_date: string;
	genres: any[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: any[];
	last_air_date: string;
	last_episode_to_air: {
		id: number;
		name: string;
		overview: string;
		vote_average: number;
		vote_count: number;
		air_date: string;
		episode_number: number;
		production_code: string;
		runtime: number | null;
		season_number: number;
		show_id: number;
		still_path: string | null;
	};
	name: string;
	next_episode_to_air: null | {
		id: number;
		name: string;
		overview: string;
		vote_average: number;
		vote_count: number;
		air_date: string;
		episode_number: number;
		production_code: string;
		runtime: number | null;
		season_number: number;
		show_id: number;
		still_path: string | null;
	};
	networks: any[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	production_companies: any[];
	production_countries: any[];
	seasons: {
		air_date: string | null;
		episode_count: number;
		id: number;
		name: string;
		overview: string;
		poster_path: string | null;
		season_number: number;
	}[];
	spoken_languages: any[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
};

export type ListsResponse = {
	id: number;
	page: number;
	results: {
		description: string;
		favorite_count: number;
		id: number;
		item_count: number;
		iso_639_1: string;
		iso_3166_1: string;
		name: string;
		poster_path: string | null;
	}[];
	total_pages: number;
	total_results: number;
};

export type RecommendationsResponse = {
	page: number;
	results: {
		adult: boolean;
		backdrop_path: string | null;
		id: number;
		name: string;
		original_language: string;
		original_name: string;
		overview: string;
		poster_path: string | null;
		media_type: string;
		genre_ids: number[];
		popularity: number;
		first_air_date: string;
		vote_average: number;
		vote_count: number;
		origin_country: string[];
	}[];
	total_pages: number;
	total_results: number;
};

export type ReviewsResponse = {
	id: number;
	page: number;
	results: {
		author: string;
		author_details: {
			name: string;
			username: string;
			avatar_path: string | null;
			rating: number | null;
		};
		content: string;
		created_at: string;
		id: string;
		updated_at: string;
		url: string;
	}[];
	total_pages: number;
	total_results: number;
};

export type ScreenedTheatricallyResponse = {
	id: number;
	results: {
		id: number;
		episode_number: number;
		season_number: number;
	}[];
};

export type SimilarResponse = {
	page: number;
	results: {
		adult: boolean;
		backdrop_path: string | null;
		genre_ids: number[];
		id: number;
		origin_country: string[];
		original_language: string;
		original_name: string;
		overview: string;
		popularity: number;
		poster_path: string | null;
		first_air_date: string;
		name: string;
		vote_average: number;
		vote_count: number;
	}[];
	total_pages: number;
	total_results: number;
};

export type TranslationsResponse = {
	id: number;
	translations: {
		iso_3166_1: string;
		iso_639_1: string;
		name: string;
		english_name: string;
		data: {
			name: string;
			overview: string;
			homepage: string;
			tagline: string;
		};
	}[];
};

export type VideosResponse = {
	id: number;
	results: {
		iso_639_1: string;
		iso_3166_1: string;
		name: string;
		key: string;
		site: string;
		size: number;
		type: string;
		official: boolean;
		published_at: string;
		id: string;
	}[];
};

export type WatchProvidersResponse = {
	id: number;
	results: {
		[countryCode: string]: {
			link: string;
			flatrate?: {
				logo_path: string;
				provider_id: number;
				provider_name: string;
				display_priority: number;
			}[];
			buy?: {
				logo_path: string;
				provider_id: number;
				provider_name: string;
				display_priority: number;
			}[];
		};
	};
};
