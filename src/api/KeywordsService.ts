import { API } from '.';
import { KeywordResponse, MovieResponse } from '../types/keywords';

export class KeywordsService {
	private readonly apiInstance: API;

	/**
	 * Initializes the KeywordsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Retrieves details for a specific keyword by its ID.
	 *
	 * This method fetches the details for a given keyword using its ID.
	 *
	 * @param keywordId - The ID of the keyword to retrieve details for.
	 * @param language - Optional. The language code for the keyword details. If omitted, defaults to the API instance's language.
	 * @returns A promise that resolves to the keyword details.
	 */
	async details(keywordId: number, language?: string): Promise<KeywordResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `keyword/${keywordId}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<KeywordResponse>(endpoint);
	}

	/**
	 * Retrieves the list of movies associated with a specific keyword.
	 *
	 * This method fetches the movies related to a specific keyword using the keyword's ID.
	 *
	 * @param keywordId - The ID of the keyword to retrieve associated movies for.
	 * @param language - Optional. The language code for the movie titles. If omitted, defaults to the API instance's language.
	 * @param page - Optional. The page number for the results. Defaults to 1.
	 * @returns A promise that resolves to a list of movies associated with the keyword.
	 */
	async movies(
		keywordId: number,
		includeAdult?: boolean,
		language?: string,
		page: number = 1
	): Promise<MovieResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ includeAdult, language, page });
		const endpoint = `keyword/${keywordId}/movies${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<MovieResponse>(endpoint);
	}
}
