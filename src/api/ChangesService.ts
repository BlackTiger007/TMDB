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

	/**
	 * Fetches a list of movie changes. You can query this method up to 14 days at a time.
	 * @param end_date - Optional. The end date for the changes in YYYY-MM-DD format.
	 * @param page - Optional. The page number for the query. Defaults to the first page.
	 * @param start_date - Optional. The start date for the changes in YYYY-MM-DD format.
	 * @returns A promise that resolves to the list of movie changes.
	 */
	async movieList(end_date?: string, page?: number, start_date?: string): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ end_date, page, start_date });
		const endpoint = `movie/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}

	/**
	 * Fetches a list of person changes. You can query this method up to 14 days at a time.
	 * @param end_date - Optional. The end date for the changes in YYYY-MM-DD format.
	 * @param page - Optional. The page number for the query. Defaults to the first page.
	 * @param start_date - Optional. The start date for the changes in YYYY-MM-DD format.
	 * @returns A promise that resolves to the list of person changes.
	 */
	async personList(
		end_date?: string,
		page?: number,
		start_date?: string
	): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ end_date, page, start_date });
		const endpoint = `person/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}

	/**
	 * Fetches a list of TV changes. You can query this method up to 14 days at a time.
	 * @param end_date - Optional. The end date for the changes in YYYY-MM-DD format.
	 * @param page - Optional. The page number for the query. Defaults to the first page.
	 * @param start_date - Optional. The start date for the changes in YYYY-MM-DD format.
	 * @returns A promise that resolves to the list of TV changes.
	 */
	async tvList(end_date?: string, page?: number, start_date?: string): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ end_date, page, start_date });
		const endpoint = `tv/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}
}
