import { api } from '.';
import { ChangesResponse } from '../types/changes';

export class ChangesService {
	private apiInstance: api;

	/**
	 * Initializes the ChangesService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	// You can query this method up to 14 days at a time. Use the start_date and end_date query parameters. 100 items are returned per page.
	async movieList(end_date?: string, page?: number, start_date?: string): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ end_date, page, start_date });
		const endpoint = `movie/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}

	// You can query this method up to 14 days at a time. Use the start_date and end_date query parameters. 100 items are returned per page.
	async personList(
		end_date?: string,
		page?: number,
		start_date?: string
	): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ end_date, page, start_date });
		const endpoint = `person/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}

	// You can query this method up to 14 days at a time. Use the start_date and end_date query parameters. 100 items are returned per page.
	async tvList(end_date?: string, page?: number, start_date?: string): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ end_date, page, start_date });
		const endpoint = `tv/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}
}
