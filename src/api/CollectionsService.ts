import { api } from '.';
import { DetailsResponse, TranslationsResponse } from '../types/collections';

export class CollectionsService {
	private apiInstance: api;

	/**
	 * Initializes the CollectionsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Fetches detailed information about a specific movie collection.
	 *
	 * @param collection_id - The ID of the movie collection to retrieve.
	 * @param language - Optional. The language for the response. If not provided, the default language set in the API instance will be used.
	 * @returns A promise that resolves to the details of the collection.
	 */
	async details(collection_id: number, language?: string): Promise<DetailsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `collection/${collection_id}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}

	async translations(collection_id: number): Promise<TranslationsResponse> {
		return this.apiInstance.GET<TranslationsResponse>(`collection/${collection_id}/translations`);
	}
}
