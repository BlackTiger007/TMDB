import { api } from '.';
import {
	NowPlayingResponse,
	PopularResponse,
	TopRatedResponse,
	UpcomingResponse
} from '../types/movieLists';

export class MovieListsService {
	private apiInstance: api;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Get a list of movies that are currently in theatres.
	 *
	 * This method retrieves a list of movies that are currently playing in theatres. You can filter the results by language, paginate through results, and specify a region.
	 *
	 * @param language - The language to filter the results. Default is "en-US".
	 * @param page - The page number for pagination. Default is 1.
	 * @param region - The ISO-3166-1 code of the region to filter the results.
	 * @returns A promise that resolves to the list of movies currently in theatres.
	 */
	nowPlaying(page?: number, region?: string, language?: string): Promise<NowPlayingResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, region });
		const endpoint = `movie/now_playing${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<NowPlayingResponse>(endpoint);
	}

	/**
	 * Get a list of movies ordered by popularity.
	 *
	 * This method retrieves a list of movies sorted by their popularity. You can filter the results by language, paginate through results, and specify a region.
	 *
	 * @param language - The language to filter the results. Default is "en-US".
	 * @param page - The page number for pagination. Default is 1.
	 * @param region - The ISO-3166-1 code of the region to filter the results.
	 * @returns A promise that resolves to the list of popular movies.
	 */
	popular(language?: string, page?: number, region?: string): Promise<PopularResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, region });
		const endpoint = `movie/popular${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<PopularResponse>(endpoint);
	}

	/**
	 * Get a list of movies ordered by rating.
	 *
	 * This method retrieves a list of movies sorted by their rating. You can filter the results by language, paginate through results, and specify a region.
	 *
	 * @param language - The language to filter the results. Default is "en-US".
	 * @param page - The page number for pagination. Default is 1.
	 * @param region - The ISO-3166-1 code of the region to filter the results.
	 * @returns A promise that resolves to the list of top-rated movies.
	 */
	topRated(language?: string, page?: number, region?: string): Promise<TopRatedResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, region });
		const endpoint = `movie/top_rated${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<TopRatedResponse>(endpoint);
	}

	/**
	 * Get a list of movies that are being released soon.
	 *
	 * This method retrieves a list of movies that are scheduled to be released in the near future. You can filter the results by language, paginate through results, and specify a region.
	 *
	 * @param language - The language to filter the results. Default is "en-US".
	 * @param page - The page number for pagination. Default is 1.
	 * @param region - The ISO-3166-1 code of the region to filter the results.
	 * @returns A promise that resolves to the list of upcoming movies.
	 */
	upcoming(language?: string, page?: number, region?: string): Promise<UpcomingResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, region });
		const endpoint = `movie/upcoming${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<UpcomingResponse>(endpoint);
	}
}
