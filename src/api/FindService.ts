import { API } from '.';
import { FindByIDResponse } from '../types/find';

export class FindService {
	private apiInstance: API;

	/**
	 * Initializes the FindService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Finds data by external ID.
	 * The find method searches for objects in the database by an external identifier.
	 * This method searches all objects (movies, TV shows, and people) and returns the results in a single response.
	 * @param external_id - The external ID to search for.
	 * @param external_source - The external source identifier. Options include 'imdb_id', 'facebook_id', 'instagram_id', 'tvdb_id', 'tiktok_id', 'twitter_id', 'wikidata_id', 'youtube_id'.
	 * @param language - Optional. The language for the response.
	 * @returns A promise that resolves to the result of the search by external ID.
	 */
	async findByID(
		external_id: string,
		external_source:
			| 'imdb_id'
			| 'facebook_id'
			| 'instagram_id'
			| 'tvdb_id'
			| 'tiktok_id'
			| 'twitter_id'
			| 'wikidata_id'
			| 'youtube_id',
		language?: string
	): Promise<FindByIDResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ external_source, language });
		const endpoint = `find/${external_id}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<FindByIDResponse>(endpoint);
	}
}
