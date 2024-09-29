import { ISO639_1 } from './ISO639_1';

export interface POST {
	status_code: number;
	status_message: string;
	success: boolean;
}

export interface DELETE {
	success: boolean;
}

export interface AccountDetailsResponse {
	avatar: Avatar;
	id: number;
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	include_adult: boolean;
	username: string;
}

export interface Avatar {
	gravatar: Gravatar;
	tmdb: Tmdb;
}

export interface Gravatar {
	hash: string;
}

export interface Tmdb {
	avatar_path: string;
}

export interface AccountFavoriteMoviesResponse {
	page: number;
	results: AccountResult[];
	total_pages: number;
	total_results: number;
}

export enum OriginalLanguage {
	En = 'en',
	Xx = 'xx'
}

export enum OriginCountry {
	CA = 'CA',
	GB = 'GB',
	Us = 'US'
}

export enum ListType {
	Movie = 'movie'
}

export interface AccountResult {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: OriginalLanguage;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: Date;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface AccountFavoriteTVResponse {
	page: number;
	results: AccountResult[];
	total_pages: number;
	total_results: number;
}

export interface AccountListsResponse {
	page: number;
	results: ListResult[];
	total_pages: number;
	total_results: number;
}

export interface ListResult {
	description: string;
	favorite_count: number;
	id: number;
	item_count: number;
	iso_639_1: ISO639_1;
	list_type: ListType;
	name: string;
	poster_path: null | string;
}

export interface AccountRatedMoviesResponse {
	page: number;
	results: RatedMovieResult[];
	total_pages: number;
	total_results: number;
}

export interface RatedMovieResult extends AccountResult {
	rating: number;
}

export interface AccountRatedTVResponse {
	page: number;
	results: RatedTVResult[];
	total_pages: number;
	total_results: number;
}

export interface RatedTVResult extends WatchlistTVResult {
	rating: number;
}

export interface AccountRatedTVEpisodesResponse {
	page: number;
	results: RatedTVEpisodeResult[];
	total_pages: number;
	total_results: number;
}

export interface RatedTVEpisodeResult {
	air_date: Date;
	episode_number: number;
	id: number;
	name: string;
	overview: string;
	production_code: string;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string;
	vote_average: number;
	vote_count: number;
	rating: number;
}

export interface AccountWatchlistMoviesResponse {
	page: number;
	results: AccountResult[];
	total_pages: number;
	total_results: number;
}

export interface AccountWatchlistTVResponse {
	page: number;
	results: WatchlistTVResult[];
	total_pages: number;
	total_results: number;
}

export interface WatchlistTVResult {
	adult: boolean;
	backdrop_path: null | string;
	genre_ids: number[];
	id: number;
	origin_country: OriginCountry[];
	original_language: OriginalLanguage;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: Date;
	name: string;
	vote_average: number;
	vote_count: number;
}
