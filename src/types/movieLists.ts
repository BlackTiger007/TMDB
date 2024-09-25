export type NowPlayingResponse = {
	dates: {
		maximum: string;
		minimum: string;
	};
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

export type PopularResponse = {
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

export type TopRatedResponse = {
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

export type UpcomingResponse = {
	dates: {
		maximum: string;
		minimum: string;
	};
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
		vote_count?: number;
	}[];
	total_pages: number;
	total_results: number;
};
