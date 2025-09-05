import { API } from '.';
import {
	RatedMoviesResponse,
	RatedTvResponse,
	RatedTvEpisodesResponse
} from '../types/guestSessions';

export class GuestSessionsService {
	private readonly apiInstance: API;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Get the rated movies for a guest session.
	 *
	 * This method retrieves the movies rated by a specific guest session. You can filter the results by language, paginate through results, and sort them by the date they were created.
	 *
	 * @param guestSessionId - The unique identifier for the guest session.
	 * @param options - Optional query parameters to filter, paginate, and sort the rated movies.
	 * @returns A promise that resolves to the rated movies response.
	 */
	ratedMovies(
		guestSessionId: string,
		language?: string,
		page?: number,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<RatedMoviesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, sort_by });
		const endpoint = `guest_session/${guestSessionId}/rated/movies${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<RatedMoviesResponse>(endpoint);
	}

	/**
	 * Get the rated TV shows for a guest session.
	 *
	 * This method retrieves the TV shows rated by a specific guest session. You can filter the results by language, paginate through results, and sort them by the date they were created.
	 *
	 * @param guestSessionId - The unique identifier for the guest session.
	 * @param language - The language of the results. Defaults to "en-US".
	 * @param page - The page of results to retrieve. Defaults to 1.
	 * @param sort_by - The order in which to sort the results. Defaults to "created_at.asc". Can be "created_at.asc" or "created_at.desc".
	 * @returns A promise that resolves to the rated TV shows response.
	 */
	ratedTv(
		guestSessionId: string,
		language?: string,
		page?: number,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<RatedTvResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, sort_by });
		const endpoint = `guest_session/${guestSessionId}/rated/tv${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<RatedTvResponse>(endpoint);
	}

	/**
	 * Get the rated TV episodes for a guest session.
	 *
	 * This method retrieves the TV episodes rated by a specific guest session. You can filter the results by language, paginate through results, and sort them by the date they were created.
	 *
	 * @param guestSessionId - The unique identifier for the guest session.
	 * @param language - The language of the results. Defaults to "en-US".
	 * @param page - The page of results to retrieve. Defaults to 1.
	 * @param sort_by - The order in which to sort the results. Defaults to "created_at.asc". Can be "created_at.asc" or "created_at.desc".
	 * @returns A promise that resolves to the rated TV episodes response.
	 */
	ratedTvEpisodes(
		guestSessionId: string,
		language?: string,
		page?: number,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<RatedTvEpisodesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, sort_by });
		const endpoint = `guest_session/${guestSessionId}/rated/tv/episodes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<RatedTvEpisodesResponse>(endpoint);
	}
}
