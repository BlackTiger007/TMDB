type Collection = {
	id: number;
	name: string;
	original_language: string;
	original_name: string;
	overview: string;
	backdrop_path: string | null;
	poster_path: string | null;
	adult: boolean;
};

export type CollectionsResponse = {
	page: number;
	results: Collection[];
	total_pages: number;
	total_results: number;
};

type Company = {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
};

export type CompaniesResponse = {
	page: number;
	results: Company[];
	total_pages: number;
	total_results: number;
};

type Keyword = {
	id: number;
	name: string;
};

export type KeywordsResponse = {
	page: number;
	results: Keyword[];
	total_pages: number;
	total_results: number;
};

type Movie = {
	id: number;
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: number[];
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
};

export type MoviesResponse = {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};

type MultiItem = {
	id: number;
	adult: boolean;
	backdrop_path: string | null;
	title?: string;
	original_title?: string;
	original_name?: string;
	overview: string;
	poster_path: string | null;
	media_type: 'movie' | 'tv';
	genre_ids: number[];
	popularity: number;
	release_date?: string;
	first_air_date?: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
};

export type MultiResponse = {
	page: number;
	results: MultiItem[];
	total_pages: number;
	total_results: number;
};

type KnownForItem = {
	adult: boolean;
	backdrop_path: string | null;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string | null;
	media_type: 'movie' | 'tv';
	genre_ids: number[];
	popularity: number;
	release_date?: string;
	vote_average: number;
	vote_count: number;
	video: boolean;
};

type Person = {
	adult: boolean;
	gender: 0 | 1 | 2 | 3;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	known_for: KnownForItem[];
};

export type PersonResponse = {
	page: number;
	results: Person[];
	total_pages: number;
	total_results: number;
};

type TVShow = {
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
};

export type TVResponse = {
	page: number;
	results: TVShow[];
	total_pages: number;
	total_results: number;
};
