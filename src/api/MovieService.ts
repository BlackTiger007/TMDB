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
	RecommendationsResponse
} from '../types/movie';

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

	// @TODO Reviews

	// @TODO Similar

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

	// @TODO Add Rating

	// @TODO Delete Rating
}
