export type RatedMoviesResponse = {
	page: number;
	results: {
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
		rating: number;
	}[];
	total_pages: number;
	total_results: number;
};

export type RatedTvResponse = {
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
		rating: number;
	}[];
	total_pages: number;
	total_results: number;
};

export type RatedTvEpisodesResponse = {
	page: number;
	results: {
		air_date: string;
		episode_number: number;
		id: number;
		name: string;
		overview: string;
		production_code: string;
		runtime: number;
		season_number: number;
		show_id: number;
		still_path: string | null;
		vote_average: number;
		vote_count: number;
		rating: number;
	}[];
	total_pages: number;
	total_results: number;
};
