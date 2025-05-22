import { API } from '.';
import { PersonListResponse } from '../types/peopleLists';

export class PeopleListsService {
	private apiInstance: API;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Retrieves a list of popular people.
	 *
	 * This method fetches a list of popular people. The `language` parameter can be used to specify the language for the response.
	 * If omitted, the default language set in the API instance will be used. The `page` parameter specifies the page number
	 * of results to return. If omitted, defaults to page 1.
	 *
	 * @param language - Optional. The language code for the response. Defaults to the API instance's language if not provided.
	 * @param page - Optional. The page number to retrieve. Defaults to 1 if not provided.
	 * @returns A promise that resolves to an object containing the list of popular people.
	 */
	async popular(language?: string, page?: number): Promise<PersonListResponse> {
		const endpoint = '/person/popular';
		const queryParams = this.apiInstance.buildQueryParams({ language, page });

		return await this.apiInstance.GET<PersonListResponse>(
			`${endpoint}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`
		);
	}
}
