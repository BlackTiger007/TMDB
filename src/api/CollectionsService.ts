import { API } from '.';
import { DetailsResponse, ImagesResponse, TranslationsResponse } from '../types/collections';

export class CollectionsService {
	private apiInstance: API;

	/**
	 * Initializes the CollectionsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
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

	/**
	 * Fetches images related to a specific movie collection.
	 *
	 * @param collection_id - The ID of the movie collection to retrieve images for.
	 * @param language - Optional. The language filter for the images.
	 * @param include_image_language - Optional. A comma-separated list of ISO-639-1 codes to include additional languages (e.g., 'en,null').
	 * @returns A promise that resolves to the images of the collection.
	 */
	async images(
		collection_id: number,
		language?: string,
		include_image_language?: string
	): Promise<ImagesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, include_image_language });
		const endpoint = `collection/${collection_id}/images${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ImagesResponse>(endpoint);
	}

	/**
	 * Retrieves translations available for a specific movie collection.
	 * @param collection_id - The ID of the movie collection to retrieve translations for.
	 * @returns A promise that resolves to the translations.
	 */
	async translations(collection_id: number): Promise<TranslationsResponse> {
		return this.apiInstance.GET<TranslationsResponse>(`collection/${collection_id}/translations`);
	}
}
