import { API } from '.';
import { MoviesResponse, TVResponse } from '../types/discover';

export class DiscoverService {
	private readonly apiInstance: API;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Discover movies using various filters and sort options.
	 *
	 * This method allows you to find movies based on numerous filters such as certifications, genres, release dates, and more. You can also sort the results in various ways.
	 *
	 * @param options - An object containing query parameters to filter and sort the movies.
	 * @returns A promise that resolves to the discover movie response.
	 */
	discoverMovie(options: {
		certification?: string;
		'certification.gte'?: string;
		'certification.lte'?: string;
		certification_country?: string;
		include_adult?: boolean;
		include_video?: boolean;
		language?: string;
		page?: number;
		primary_release_year?: number;
		'primary_release_date.gte'?: string;
		'primary_release_date.lte'?: string;
		region?: string;
		'release_date.gte'?: string;
		'release_date.lte'?: string;
		sort_by?:
			| 'original_title.asc'
			| 'original_title.desc'
			| 'popularity.asc'
			| 'popularity.desc'
			| 'revenue.asc'
			| 'revenue.desc'
			| 'primary_release_date.asc'
			| 'primary_release_date.desc'
			| 'title.asc'
			| 'title.desc'
			| 'vote_average.asc'
			| 'vote_average.desc'
			| 'vote_count.asc'
			| 'vote_count.desc';
		vote_average_gte?: number;
		vote_average_lte?: number;
		vote_count_gte?: number;
		vote_count_lte?: number;
		watch_region?: string;
		with_cast?: string;
		with_companies?: string;
		with_crew?: string;
		with_genres?: string;
		with_keywords?: string;
		with_origin_country?: string;
		with_original_language?: string;
		with_people?: string;
		with_release_type?: number;
		'with_runtime.gte'?: number;
		'with_runtime.lte'?: number;
		with_watch_monetization_types?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy';
		with_watch_providers?: string;
		without_companies?: string;
		without_genres?: string;
		without_keywords?: string;
		without_watch_providers?: string;
		year?: number;
	}): Promise<MoviesResponse> {
		const queryParams = this.apiInstance.buildQueryParams(options);
		const endpoint = `discover/movie${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<MoviesResponse>(endpoint);
	}

	/**
	 * Discover TV shows using various filters and sort options.
	 *
	 * This method allows you to find TV shows based on numerous filters such as genres, release dates, vote averages, and more. You can also sort the results in various ways.
	 *
	 * @param options - An object containing query parameters to filter and sort the TV shows.
	 * @returns A promise that resolves to the discover TV response.
	 */
	discoverTvShows(options: {
		'air_date.gte'?: string;
		'air_date.lte'?: string;
		first_air_date_year?: number;
		'first_air_date.gte'?: string;
		'first_air_date.lte'?: string;
		include_adult?: boolean;
		include_null_first_air_dates?: boolean;
		language?: string;
		page?: number;
		screened_theatrically?: boolean;
		sort_by?:
			| 'popularity.asc'
			| 'popularity.desc'
			| 'first_air_date.asc'
			| 'first_air_date.desc'
			| 'vote_average.asc'
			| 'vote_average.desc'
			| 'vote_count.asc'
			| 'vote_count.desc'
			| 'name.asc'
			| 'name.desc'
			| 'original_name.asc'
			| 'original_name.desc';
		timezone?: string;
		'vote_average.gte'?: number;
		'vote_average.lte'?: number;
		'vote_count.gte'?: number;
		'vote_count.lte'?: number;
		watch_region?: string;
		with_companies?: string;
		with_genres?: string;
		with_keywords?: string;
		with_networks?: number;
		with_origin_country?: string;
		with_original_language?: string;
		'with_runtime.gte'?: number;
		'with_runtime.lte'?: number;
		with_status?: '0' | '1' | '2' | '3' | '4' | '5';
		with_watch_monetization_types?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy';
		with_watch_providers?: string;
		without_companies?: string;
		without_genres?: string;
		without_keywords?: string;
		without_watch_providers?: string;
		with_type?: '0' | '1' | '2' | '3' | '4' | '5' | '6';
	}): Promise<TVResponse> {
		const queryParams = this.apiInstance.buildQueryParams(options);
		const endpoint = `discover/tv${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<TVResponse>(endpoint);
	}
}
