import { API } from '.';

export class CreditsService {
	private readonly apiInstance: API;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	async test(movieId: number, language: string) {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `movie/${movieId}/videos${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<any>(endpoint);
	}
}
