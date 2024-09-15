import { api } from '.';
import {
	AlternativeTitlesResponse,
	ChangesResponse,
	DetailsResponse,
	CreditsResponse,
	AccountStatesResponse,
	ExternalIDsResponse,
	ImageResponse,
	KeywordsResponse,
	LatestResponse,
	ReleaseDatesResponse,
	TranslationsResponse,
	VideosResponse,
	WatchProvidersResponse,
	ListsResponse,
	RecommendationsResponse,
	SimilarResponse
} from '../types/movie';
import { ReviewsResponse } from '../types/tvseries';

export class MovieService {
	private apiInstance: api;

	/**
	 * Initializes the MovieService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Retrieves movie details by movie ID.
	 * @param id - The ID of the movie.
	 * @returns A promise that resolves to the movie details.
	 */
	async details(id: number): Promise<DetailsResponse> {
		return this.apiInstance.GET<DetailsResponse>(`movie/${id}`);
	}

	/**
	 * Retrieves alternative titles for a movie.
	 * @param movieId - The ID of the movie.
	 * @param country - Optional. The country code to filter alternative titles.
	 * @returns A promise that resolves to the alternative titles.
	 */
	async alternativeTitle(movieId: number, country?: string): Promise<AlternativeTitlesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ country });
		const endpoint = `movie/${movieId}/alternative_titles${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<AlternativeTitlesResponse>(endpoint);
	}

	/**
	 * Retrieves the changes made to a movie.
	 * @param movieId - The ID of the movie.
	 * @param start_date - Optional. The start date for changes.
	 * @param end_date - Optional. The end date for changes.
	 * @param page - Optional. The page number to retrieve.
	 * @returns A promise that resolves to the movie changes.
	 */
	async changes(
		movieId: number,
		start_date?: string,
		end_date?: string,
		page: number = 1
	): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ start_date, end_date, page });
		const endpoint = `movie/${movieId}/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}

	/**
	 * Retrieves the credits for a movie.
	 * @param movieId - The ID of the movie.
	 * @param language - Optional. The language for the credits.
	 * @returns A promise that resolves to the movie credits.
	 */
	async credits(movieId: number, language?: string): Promise<CreditsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `movie/${movieId}/credits${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CreditsResponse>(endpoint);
	}

	/**
	 * Retrieves account states (rating, watchlist, favorite status) for a movie.
	 * @param movieId - The ID of the movie.
	 * @param sessionId - Optional. The session ID.
	 * @param guestSessionId - Optional. The guest session ID.
	 * @returns A promise that resolves to the account states.
	 */
	async accountStates(
		movieId: number,
		sessionId?: string,
		guestSessionId?: string
	): Promise<AccountStatesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			session_id: sessionId,
			guest_session_id: guestSessionId
		});
		const endpoint = `movie/${movieId}/account_states${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<AccountStatesResponse>(endpoint);
	}

	/**
	 * Retrieves external IDs for a movie.
	 * @param movieId - The ID of the movie.
	 * @returns A promise that resolves to the external IDs.
	 */
	async externalIds(movieId: number): Promise<ExternalIDsResponse> {
		return this.apiInstance.GET<ExternalIDsResponse>(`movie/${movieId}/external_ids`);
	}

	/**
	 * Retrieves images related to a movie.
	 * @param movieId - The ID of the movie.
	 * @param includeImageLanguage - Optional. The language to include for images.
	 * @param language - Optional. The language for the request.
	 * @returns A promise that resolves to the images.
	 */
	async images(
		movieId: number,
		includeImageLanguage?: string,
		language?: string
	): Promise<ImageResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			include_image_language: includeImageLanguage,
			language
		});
		const endpoint = `movie/${movieId}/images${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ImageResponse>(endpoint);
	}

	/**
	 * Retrieves keywords associated with a movie.
	 * @param movieId - The ID of the movie.
	 * @returns A promise that resolves to the keywords.
	 */
	async keywords(movieId: number): Promise<KeywordsResponse> {
		return this.apiInstance.GET<KeywordsResponse>(`movie/${movieId}/keywords`);
	}

	/**
	 * Retrieves the latest movie added to the database.
	 * @returns A promise that resolves to the latest movie.
	 */
	async latest(): Promise<LatestResponse> {
		return this.apiInstance.GET<LatestResponse>('movie/latest');
	}

	/**
	 * Retrieves the lists that a movie has been added to.
	 * @param movieId - The ID of the movie.
	 * @param language - Optional. The language for the request.
	 * @param page - Optional. The page number to retrieve.
	 * @returns A promise that resolves to the lists.
	 */
	async lists(movieId: number, language?: string, page?: number): Promise<ListsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `movie/${movieId}/lists${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ListsResponse>(endpoint);
	}

	/**
	 * Retrieves recommendations for a movie.
	 * @param movieId - The ID of the movie.
	 * @param language - Optional. The language for the request.
	 * @param page - Optional. The page number to retrieve.
	 * @returns A promise that resolves to the recommendations.
	 */
	async recommendations(
		movieId: number,
		language?: string,
		page?: number
	): Promise<RecommendationsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `movie/${movieId}/recommendations${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<RecommendationsResponse>(endpoint);
	}

	/**
	 * Retrieves release dates and certifications for a movie.
	 * @param movieId - The ID of the movie.
	 * @returns A promise that resolves to the release dates.
	 */
	async releaseDates(movieId: number): Promise<ReleaseDatesResponse> {
		return this.apiInstance.GET<ReleaseDatesResponse>(`movie/${movieId}/release_dates`);
	}

	/**
	 * Get the user reviews for a movie.
	 *
	 * Retrieve user-generated reviews for a specific movie. The results can be filtered by language and pagination.
	 *
	 * @param movie_id - The ID of the movie.
	 * @param language - Optional language code. Defaults to 'en-US'.
	 * @param page - Optional page number. Defaults to 1.
	 * @returns A promise that resolves to the reviews response.
	 */
	reviews(movie_id: number, language?: string, page?: number): Promise<ReviewsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `movie/${movie_id}/reviews${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ReviewsResponse>(endpoint);
	}

	/**
	 * Get the similar movies based on genres and keywords.
	 *
	 * This method retrieves movies that are similar to the specified movie based on genres and plot keywords. Note that the results may not always be 100% accurate.
	 *
	 * @param movie_id - The ID of the movie.
	 * @param language - Optional language code. Defaults to 'en-US'.
	 * @param page - Optional page number. Defaults to 1.
	 * @returns A promise that resolves to the similar movies response.
	 */
	similar(movie_id: number, language?: string, page?: number): Promise<SimilarResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `movie/${movie_id}/similar${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<SimilarResponse>(endpoint);
	}

	/**
	 * Retrieves translations available for a movie.
	 * @param movieId - The ID of the movie.
	 * @returns A promise that resolves to the translations.
	 */
	async translations(movieId: number): Promise<TranslationsResponse> {
		return this.apiInstance.GET<TranslationsResponse>(`movie/${movieId}/translations`);
	}

	/**
	 * Retrieves videos (trailers, teasers, etc.) related to a movie.
	 * @param movieId - The ID of the movie.
	 * @param language - Optional. The language for the request.
	 * @returns A promise that resolves to the videos.
	 */
	async videos(movieId: number, language?: string): Promise<VideosResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `movie/${movieId}/videos${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<VideosResponse>(endpoint);
	}

	/**
	 * Retrieves watch providers for a movie.
	 * @param movieId - The ID of the movie.
	 * @returns A promise that resolves to the watch providers.
	 */
	async watchProviders(movieId: number): Promise<WatchProvidersResponse> {
		return this.apiInstance.GET<WatchProvidersResponse>(`movie/${movieId}/watch/providers`);
	}

	/**
	 * Rate a movie and save it to your rated list.
	 *
	 * This method allows you to rate a movie and add it to your rated list. By default, if the movie is present in your watchlist, it will be removed to keep your lists tidy.
	 *
	 * @param movie_id - The ID of the movie.
	 * @param rating - The rating value to be submitted (e.g., `8.5`).
	 * @param guest_session_id - Optional guest session ID for anonymous users.
	 * @param session_id - Optional session ID for authenticated users.
	 * @returns A promise that resolves when the rating has been successfully submitted.
	 */
	addRating(movie_id: number, rating: number, guest_session_id?: string, session_id?: string) {
		const queryParams = this.apiInstance.buildQueryParams({ guest_session_id, session_id });
		const endpoint = `movie/${movie_id}/rating${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.POST(endpoint, { value: rating });
	}

	/**
	 * Delete a user rating for a movie.
	 *
	 * This method allows you to remove a previously submitted rating for a movie. It is useful for managing or updating ratings as needed.
	 *
	 * @param movie_id - The ID of the movie.
	 * @param guest_session_id - Optional guest session ID for anonymous users.
	 * @param session_id - Optional session ID for authenticated users.
	 * @returns A promise that resolves when the rating has been successfully deleted.
	 */
	deleteRating(movie_id: number, guest_session_id?: string, session_id?: string) {
		const queryParams = this.apiInstance.buildQueryParams({ guest_session_id, session_id });
		const endpoint = `movie/${movie_id}/rating${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.DELETE(endpoint);
	}
}
