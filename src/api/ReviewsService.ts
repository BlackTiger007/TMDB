import { API } from '.';
import { DetailsResponse } from '../types/reviews';

export class ReviewsService {
	private readonly apiInstance: API;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Retrieve the details of a movie or TV show review.
	 *
	 * This method fetches the detailed information about a specific review. You need to provide the unique identifier of the review.
	 *
	 * @param reviewId - The unique identifier for the review.
	 * @returns A promise that resolves to the review details.
	 */
	details(reviewId: string): Promise<DetailsResponse> {
		const endpoint = `review/${reviewId}`;
		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}
}
