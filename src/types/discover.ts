export type MoviesResponse = {
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
	}[];
	total_pages: number;
	total_results: number;
};

export type TVResponse = {
	page: number;
	results: {
		backdrop_path: string | null;
		first_air_date: string;
		genre_ids: number[];
		id: number;
		name: string;
		origin_country: string[];
		original_language: string;
		original_name: string;
		overview: string;
		popularity: number;
		poster_path: string | null;
		vote_average: number;
		vote_count: number;
	}[];
	total_pages: number;
	total_results: number;
};
