import { Movie } from './movie';

type Avatar = {
	gravatar: {
		hash: string | null;
	};
	tmdb: {
		avatar_path: string | null;
	};
};

export type DetailsResponse = {
	avatar: Avatar;
	id: number;
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	include_adult: boolean;
	username: string;
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

export type FavoriteTvResponse = {
	page: number;
	results: TVShow[];
	total_pages: number;
	total_results: number;
};

type List = {
	description: string;
	favorite_count: number;
	id: number;
	item_count: number;
	iso_639_1: string;
	list_type: string;
	name: string;
	poster_path: string | null;
};

export type ListsResponse = {
	page: number;
	results: List[];
	total_pages: number;
	total_results: number;
};

export type RatedResponse = {
	page: number;
	results: TVShow[];
	total_pages: number;
	total_results: number;
};

type Episode = {
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
};

export type ratedTvEpisodesResponse = {
	page: number;
	results: Episode[];
	total_pages: number;
	total_results: number;
};

export type MovieResponse = {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
};
