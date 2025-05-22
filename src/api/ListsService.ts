import { API } from '.';
import { CheckItemStatusResponse, CreateListResponse, DetailsResponse } from '../types/lists';

export class ListsService {
	private apiInstance: API;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Add a movie to a list.
	 *
	 * This method allows you to add a movie to a specific list. You need to provide the list ID and a valid session ID. The request body should contain the `media_id` of the movie you want to add.
	 *
	 * @param listId - The ID of the list to which the movie will be added.
	 * @param mediaId - The ID of the movie to be added to the list.
	 * @param sessionId - The session ID for authentication (optional).
	 * @returns A promise that resolves to the response of the API request.
	 */
	addMovie(listId: number, mediaId: number, sessionId: string) {
		const queryParams = this.apiInstance.buildQueryParams({ session_id: sessionId });
		const endpoint = `list/${listId}/add_item${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.POST(endpoint, { media_id: mediaId });
	}

	/**
	 * Check if an item has already been added to the list.
	 *
	 * This method checks if a specific movie has already been added to a list. You need to provide the list ID and the movie ID. Optionally, you can include a language parameter to get the results in a specific language.
	 *
	 * @param listId - The ID of the list to check.
	 * @param movieId - The ID of the movie to check.
	 * @param language - The language to filter results by (optional).
	 * @returns A promise that resolves to the status of the item in the list.
	 */
	checkItemStatus(
		listId: number,
		movieId?: number,
		language?: string
	): Promise<CheckItemStatusResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, movie_id: movieId });
		const endpoint = `list/${listId}/item_status${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CheckItemStatusResponse>(endpoint);
	}

	/**
	 * Clear all items from a list.
	 *
	 * This method removes all items from a specific list. You need to provide the list ID and a session ID. An optional confirmation parameter is also available to ensure the action is intentional.
	 *
	 * @param listId - The ID of the list to be cleared.
	 * @param sessionId - The session ID associated with the request.
	 * @param confirm - A boolean value to confirm the action. Defaults to `false`.
	 * @returns A promise that resolves when the list is cleared.
	 */
	clear(listId: number, sessionId: string, confirm: boolean = false): Promise<void> {
		const queryParams = this.apiInstance.buildQueryParams({ session_id: sessionId, confirm });
		const endpoint = `list/${listId}/clear${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.POST(endpoint, {});
	}

	/**
	 * Create a new list.
	 *
	 * This method allows you to create a new list by providing a session ID and a list payload. The payload should include the list's name, description, and language.
	 *
	 * @param sessionId - The session ID associated with the request.
	 * @param name - The name of the list.
	 * @param description - A brief description of the list.
	 * @param language - The language of the list.
	 * @returns A promise that resolves to the created list response.
	 */
	create(
		sessionId: string,
		name: string,
		description: string,
		language: string = 'en'
	): Promise<CreateListResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ session_id: sessionId });
		const endpoint = `list${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		const requestBody = {
			name,
			description,
			language
		};
		return this.apiInstance.POST<CreateListResponse>(endpoint, requestBody);
	}

	/**
	 * Delete a list.
	 *
	 * This method allows you to delete a specific list by providing its ID and the session ID.
	 * You need to provide the `list_id` in the path and the `session_id` as a query parameter.
	 *
	 * @param listId - The unique identifier of the list to be deleted.
	 * @param sessionId - The session ID associated with the request.
	 * @returns A promise that resolves to the response indicating the result of the delete operation.
	 */
	delete(listId: number, sessionId: string) {
		const queryParams = this.apiInstance.buildQueryParams({ session_id: sessionId });
		const endpoint = `list/${listId}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.DELETE(endpoint);
	}

	/**
	 * Get the details of a list.
	 *
	 * This method retrieves the details of a specific list by its ID. You can also filter the results by language and paginate through the results.
	 *
	 * @param listId - The unique identifier of the list to retrieve.
	 * @param language - Optional language parameter to filter the results. Defaults to "en-US".
	 * @param page - Optional page number for pagination. Defaults to 1.
	 * @returns A promise that resolves to the details of the list.
	 */
	details(listId: number, page?: number, language?: string): Promise<DetailsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `list/${listId}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}

	/**
	 * Remove a movie from a list.
	 *
	 * This method removes a specific movie from a list by its ID. You need to provide the session ID and the ID of the movie to be removed.
	 *
	 * @param listId - The unique identifier of the list from which the movie will be removed.
	 * @param mediaId - The unique identifier of the movie to be removed from the list.
	 * @param sessionId - The session ID required for authorization.
	 * @returns A promise that resolves to the response from the API.
	 */
	removeMovie(listId: number, mediaId: number, sessionId: string) {
		const queryParams = this.apiInstance.buildQueryParams({ session_id: sessionId });
		const endpoint = `list/${listId}/remove_item${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		const requestBody = {
			media_id: mediaId
		};
		return this.apiInstance.POST<CreateListResponse>(endpoint, requestBody);
	}
}
