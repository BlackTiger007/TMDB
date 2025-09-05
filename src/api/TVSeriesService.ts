import { API } from '.';
import {
	DetailsResponse,
	AccountStateResponse,
	AggregateCreditsResponse,
	AlternativeTitlesResponse,
	ChangesResponse,
	ContentRatingsResponse,
	CreditsResponse,
	EpisodeGroupsResponse,
	ExternalIdsResponse,
	ImagesResponse,
	KeywordsResponse,
	LatestResponse,
	ListsResponse,
	RecommendationsResponse,
	ReviewsResponse,
	ScreenedTheatricallyResponse,
	SimilarResponse,
	TranslationsResponse,
	VideosResponse,
	WatchProvidersResponse
} from '../types/tvseries';

export class TVSeriesService {
	private readonly apiInstance: API;

	/**
	 * Initializes the TVSeriesService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Fetches detailed information about a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve.
	 * @param append_to_response - Optional. Comma-separated list of additional endpoints to append to the response.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @returns A promise that resolves to the details of the TV show.
	 */
	async details(
		series_id: number,
		append_to_response?: string,
		language?: string
	): Promise<DetailsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ append_to_response, language });
		const endpoint = `tv/${series_id}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}

	/**
	 * Retrieves the rating, watchlist, and favorite status for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve the account state for.
	 * @param session_id - Optional. The session ID for the request.
	 * @param guest_session_id - Optional. The guest session ID for the request.
	 * @returns A promise that resolves to the account state of the TV show.
	 */
	async accountStates(
		series_id: number,
		session_id?: string,
		guest_session_id?: string
	): Promise<AccountStateResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ session_id, guest_session_id });
		const endpoint = `tv/${series_id}/account_states${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<AccountStateResponse>(endpoint);
	}

	/**
	 * Fetches the aggregate credits (cast and crew) for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve aggregate credits for.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @returns A promise that resolves to the aggregate credits of the TV show.
	 */
	async aggregateCredits(series_id: number, language?: string): Promise<AggregateCreditsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `tv/${series_id}/aggregate_credits${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<AggregateCreditsResponse>(endpoint);
	}

	/**
	 * Retrieves alternative titles for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve alternative titles for.
	 * @returns A promise that resolves to the alternative titles of the TV show.
	 */
	async alternativeTitles(series_id: number): Promise<AlternativeTitlesResponse> {
		const endpoint = `tv/${series_id}/alternative_titles`;
		return this.apiInstance.GET<AlternativeTitlesResponse>(endpoint);
	}

	/**
	 * Fetches recent changes for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve changes for.
	 * @param start_date - Optional. The start date for the changes query.
	 * @param end_date - Optional. The end date for the changes query.
	 * @param page - Optional. The page of results to retrieve. Defaults to 1.
	 * @returns A promise that resolves to the changes of the TV show.
	 */
	async changes(
		series_id: number,
		start_date?: string,
		end_date?: string,
		page?: number
	): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ start_date, end_date, page });
		const endpoint = `tv/${series_id}/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}

	/**
	 * Retrieves content ratings for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve content ratings for.
	 * @returns A promise that resolves to the content ratings of the TV show.
	 */
	async contentRatings(series_id: number): Promise<ContentRatingsResponse> {
		const endpoint = `tv/${series_id}/content_ratings`;
		return this.apiInstance.GET<ContentRatingsResponse>(endpoint);
	}

	/**
	 * Fetches the credits for the latest season of a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve credits for.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @returns A promise that resolves to the credits of the TV show.
	 */
	async credits(series_id: number, language?: string): Promise<CreditsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `tv/${series_id}/credits${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CreditsResponse>(endpoint);
	}

	/**
	 * Retrieves episode groups for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve episode groups for.
	 * @returns A promise that resolves to the episode groups of the TV show.
	 */
	async episodeGroups(series_id: number): Promise<EpisodeGroupsResponse> {
		const endpoint = `tv/${series_id}/episode_groups`;
		return this.apiInstance.GET<EpisodeGroupsResponse>(endpoint);
	}

	/**
	 * Fetches external IDs for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve external IDs for.
	 * @returns A promise that resolves to the external IDs of the TV show.
	 */
	async externalIds(series_id: number): Promise<ExternalIdsResponse> {
		const endpoint = `tv/${series_id}/external_ids`;
		return this.apiInstance.GET<ExternalIdsResponse>(endpoint);
	}

	/**
	 * Retrieves images for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve images for.
	 * @param include_image_language - Optional. A comma-separated list of ISO-639-1 values to include additional languages.
	 * @param language - Optional. The language for the response.
	 * @returns A promise that resolves to the images of the TV show.
	 */
	async images(
		series_id: number,
		include_image_language?: string,
		language?: string
	): Promise<ImagesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ include_image_language, language });
		const endpoint = `tv/${series_id}/images${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ImagesResponse>(endpoint);
	}

	/**
	 * Retrieves keywords associated with a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve keywords for.
	 * @returns A promise that resolves to the keywords of the TV show.
	 */
	async keywords(series_id: number): Promise<KeywordsResponse> {
		const endpoint = `tv/${series_id}/keywords`;
		return this.apiInstance.GET<KeywordsResponse>(endpoint);
	}

	/**
	 * Retrieves the latest TV show.
	 *
	 * @returns A promise that resolves to the newest TV show.
	 */
	async latest(): Promise<LatestResponse> {
		const endpoint = 'tv/latest';
		return this.apiInstance.GET<LatestResponse>(endpoint);
	}

	/**
	 * Retrieves lists that a specific TV show has been added to.
	 *
	 * @param series_id - The ID of the TV show to retrieve lists for.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @param page - Optional. The page of results to retrieve. Defaults to 1.
	 * @returns A promise that resolves to the lists of the TV show.
	 */
	async lists(series_id: number, language?: string, page?: number): Promise<ListsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `tv/${series_id}/lists${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ListsResponse>(endpoint);
	}

	/**
	 * Fetches recommendations for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve recommendations for.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @param page - Optional. The page of results to retrieve. Defaults to 1.
	 * @returns A promise that resolves to the recommendations for the TV show
	 */
	async recommendations(
		series_id: number,
		language?: string,
		page?: number
	): Promise<RecommendationsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `tv/${series_id}/recommendations${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<RecommendationsResponse>(endpoint);
	}

	/**
	 * Retrieves reviews for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve reviews for.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @param page - Optional. The page of results to retrieve. Defaults to 1.
	 * @returns A promise that resolves to the reviews of the TV show.
	 */
	async reviews(series_id: number, language?: string, page?: number): Promise<ReviewsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `tv/${series_id}/reviews${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ReviewsResponse>(endpoint);
	}

	/**
	 * Retrieves the theatrical screenings of a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve screenings for.
	 * @returns A promise that resolves to the theatrical screenings of the TV show.
	 */
	async screenedTheatrically(series_id: number): Promise<ScreenedTheatricallyResponse> {
		const endpoint = `tv/${series_id}/screened_theatrically`;
		return this.apiInstance.GET<ScreenedTheatricallyResponse>(endpoint);
	}

	/**
	 * Retrieves similar TV shows to a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve similar TV shows for.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @param page - Optional. The page of results to retrieve. Defaults to 1.
	 * @returns A promise that resolves to the similar TV shows.
	 */
	async similar(series_id: number, language?: string, page?: number): Promise<SimilarResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page });
		const endpoint = `tv/${series_id}/similar${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<SimilarResponse>(endpoint);
	}

	/**
	 * Retrieves translations for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve translations for.
	 * @returns A promise that resolves to the translations of the TV show.
	 */
	async translations(series_id: number): Promise<TranslationsResponse> {
		const endpoint = `tv/${series_id}/translations`;
		return this.apiInstance.GET<TranslationsResponse>(endpoint);
	}

	/**
	 * Fetches videos related to a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve videos for.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @returns A promise that resolves to the videos of the TV show.
	 */
	async videos(series_id: number, language?: string): Promise<VideosResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `tv/${series_id}/videos${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<VideosResponse>(endpoint);
	}

	/**
	 * Retrieves watch providers for a specific TV show.
	 *
	 * @param series_id - The ID of the TV show to retrieve watch providers for.
	 * @returns A promise that resolves to the watch providers of the TV show.
	 */
	async watchProviders(series_id: number): Promise<WatchProvidersResponse> {
		const endpoint = `tv/${series_id}/watch/providers`;
		return this.apiInstance.GET<WatchProvidersResponse>(endpoint);
	}

	/**
	 * Adds a rating to a TV show and saves it to your rated list.
	 * @param series_id - The ID of the TV show to rate.
	 * @param raw_body - Object containing the rating value, e.g., `{"value":8.5}`.
	 * @param guest_session_id - Optional. The guest session ID for unauthenticated users.
	 * @param session_id - Optional. The session ID for authenticated users.
	 * @returns A promise that resolves to the response of the POST request.
	 */
	async addRating(
		series_id: number,
		raw_body: { value: number },
		guest_session_id?: string,
		session_id?: string
	) {
		const queryParams = this.apiInstance.buildQueryParams({ guest_session_id, session_id });
		const endpoint = `tv/${series_id}/rating${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.POST(endpoint, raw_body);
	}

	/**
	 * Deletes a rating for a TV show.
	 * @param series_id - The ID of the TV show to remove the rating from.
	 * @param guest_session_id - Optional. The guest session ID for unauthenticated users.
	 * @param session_id - Optional. The session ID for authenticated users.
	 * @returns A promise that resolves to the response of the DELETE request.
	 */
	async deleteRating(series_id: number, guest_session_id?: string, session_id?: string) {
		const queryParams = this.apiInstance.buildQueryParams({ guest_session_id, session_id });
		const endpoint = `tv/${series_id}/rating${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.DELETE(endpoint);
	}
}
