export type DetailsResponse = {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: string;
	deathday: string | null;
	gender: number;
	homepage: string | null;
	id: number;
	imdb_id: string;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	popularity: number;
	profile_path: string | null;
};

export type ChangesResponse = {
	changes: {
		key: string;
		items: {
			id: string;
			action: string;
			time: string;
			iso_639_1: string;
			iso_3166_1: string;
			value: string;
		}[];
	}[];
};

export type CombinedCreditsResponse = {
	cast: {
		adult: boolean;
		backdrop_path: string | null;
		genre_ids: number[];
		id: number;
		original_language: string;
		original_title?: string;
		original_name?: string;
		overview: string;
		popularity: number;
		poster_path: string | null;
		release_date?: string;
		first_air_date?: string;
		title?: string;
		name?: string;
		video?: boolean;
		vote_average: number;
		vote_count: number;
		character?: string;
		credit_id: string;
		order?: number;
		media_type: 'movie' | 'tv';
		department?: string;
		job?: string;
	}[];
	id: number;
};

export type ExternalIDsResponse = {
	id: number;
	freebase_mid: string | null;
	freebase_id: string | null;
	imdb_id: string | null;
	tvrage_id: number | null;
	wikidata_id: string | null;
	facebook_id: string | null;
	instagram_id: string | null;
	tiktok_id: string | null;
	twitter_id: string | null;
	youtube_id: string | null;
};

export type ImagesResponse = {
	id: number;
	profiles: {
		aspect_ratio: number;
		height: number;
		iso_639_1: string | null;
		file_path: string;
		vote_average: number;
		vote_count: number;
		width: number;
	}[];
};

export type LatestResponse = {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: string | null;
	deathday: string | null;
	gender: number;
	homepage: string | null;
	id: number;
	imdb_id: string | null;
	known_for_department: string | null;
	name: string;
	place_of_birth: string | null;
	popularity: number;
	profile_path: string | null;
};

export type MovieCreditsResponse = {
	cast: Array<{
		adult: boolean;
		backdrop_path: string | null;
		genre_ids: number[];
		id: number;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: number;
		poster_path: string | null;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
		character?: string;
		credit_id: string;
		order?: number;
		department?: string;
		job?: string;
	}>;
	id: number;
};

export type TVCreditsResponse = {
	cast: Array<{
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
		character?: string;
		credit_id: string;
		episode_count?: number;
		department?: string;
		job?: string;
	}>;
	id: number;
};

export type TaggedImagesResponse = {
	id: number;
	page: number;
	results: Array<{
		aspect_ratio: number;
		file_path: string;
		height: number;
		id: string;
		iso_639_1: string;
		vote_average: number;
		vote_count: number;
		width: number;
		image_type: string;
		media: {
			adult: boolean;
			backdrop_path: string | null;
			id: number;
			title: string;
			original_language: string;
			original_title: string;
			overview: string;
			poster_path: string | null;
			media_type: string;
			genre_ids: number[];
			popularity: number;
			release_date: string;
			video: boolean;
			vote_average: number;
			vote_count: number;
		};
		media_type: string;
	}>;
	total_pages: number;
	total_results: number;
};

type Translation = {
	iso_3166_1: string;
	iso_639_1: string;
	name: string;
	english_name: string;
	data: {
		biography: string;
	};
};

export type TranslationsResponse = {
	id: number;
	translations: Translation[];
};
