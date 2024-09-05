type KnownFor = {
	backdrop_path: string | null;
	id: number;
	title?: string;
	name?: string;
	original_title?: string;
	original_name?: string;
	overview: string;
	poster_path: string | null;
	media_type: 'movie' | 'tv';
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date?: string;
	first_air_date?: string;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
};

type Person = {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	known_for: KnownFor[];
};

export type PersonListResponse = {
	page: number;
	results: Person[];
};
