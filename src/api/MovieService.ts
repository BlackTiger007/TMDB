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

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	async details(id: number): Promise<DetailsResponse> {
		return this.apiInstance.GET<DetailsResponse>(`movie/${id}`);
	}

	async alternativeTitle(movieId: number, country?: string): Promise<AlternativeTitlesResponse> {
		let endpoint = `movie/${movieId}/alternative_titles`;

		if (country) {
			endpoint += `?country=${encodeURIComponent(country)}`;
		}

		return this.apiInstance.GET<AlternativeTitlesResponse>(endpoint);
	}

	async changes(
		movieId: number,
		start_date?: string,
		end_date?: string,
		page: number = 1
	): Promise<ChangesResponse> {
		let endpoint = `movie/${movieId}/changes`;

		const queryParams = new URLSearchParams();

		if (start_date) {
			queryParams.append('start_date', start_date);
		}

		if (end_date) {
			queryParams.append('end_date', end_date);
		}

		queryParams.append('page', page.toString());

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}

	async credits(movieId: number, language?: string): Promise<CreditsResponse> {
		let endpoint = `movie/${movieId}/credits`;
		if (language) {
			endpoint += `?language=${encodeURIComponent(language)}`;
		}
		return this.apiInstance.GET<CreditsResponse>(endpoint);
	}

	// Get the rating, watchlist and favourite status of an account.
	async accountStates(
		movieId: number,
		sessionId?: string,
		guestSessionId?: string
	): Promise<AccountStatesResponse> {
		let endpoint = `movie/${movieId}/account_states`;

		const queryParams = new URLSearchParams();

		if (sessionId) {
			queryParams.append('session_id', sessionId);
		}

		if (guestSessionId) {
			queryParams.append('guest_session_id', guestSessionId);
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return this.apiInstance.GET<AccountStatesResponse>(endpoint);
	}

	async externalIds(movieId: number): Promise<ExternalIDsResponse> {
		return this.apiInstance.GET<ExternalIDsResponse>(`movie/${movieId}/external_ids`);
	}

	// Get the images that belong to a movie.
	async images(
		movieId: number,
		includeImageLanguage?: string,
		language?: string
	): Promise<ImageResponse> {
		let endpoint = `movie/${movieId}/images`;

		const queryParams = new URLSearchParams();

		// includeImageLanguage - specify a comma separated list of ISO-639-1 values to query, for example: en,null
		if (includeImageLanguage) {
			queryParams.append('include_image_language', includeImageLanguage);
		}

		if (language) {
			queryParams.append('language', language);
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return this.apiInstance.GET<ImageResponse>(endpoint);
	}

	async keywords(movieId: number): Promise<KeywordsResponse> {
		return this.apiInstance.GET<KeywordsResponse>(`movie/${movieId}/keywords`);
	}

	async latest(): Promise<LatestResponse> {
		return this.apiInstance.GET<LatestResponse>('movie/latest');
	}

	// Get the lists that a movie has been added to.
	async lists(movieId: number, language?: string, page?: number): Promise<ListsResponse> {
		let endpoint = `movie/${movieId}/lists`;

		const queryParams = new URLSearchParams();

		if (language) {
			queryParams.append('language', language);
		}

		if (page) {
			queryParams.append('page', page.toString());
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return this.apiInstance.GET<ListsResponse>(endpoint);
	}

	async recommendations(
		movieId: number,
		language?: string,
		page?: number
	): Promise<RecommendationsResponse> {
		let endpoint = `movie/${movieId}/recommendations`;

		const queryParams = new URLSearchParams();

		if (language) {
			queryParams.append('language', language);
		}

		if (page) {
			queryParams.append('page', page.toString());
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return this.apiInstance.GET<RecommendationsResponse>(endpoint);
	}

	// Get the release dates and certifications for a movie.
	async releaseDates(movieId: number): Promise<ReleaseDatesResponse> {
		return this.apiInstance.GET<ReleaseDatesResponse>(`movie/${movieId}/release_dates`);
	}

	// @TODO Reviews

	// @TODO Similar

	// Get the translations for a movie.
	async translations(movieId: number): Promise<TranslationsResponse> {
		return this.apiInstance.GET<TranslationsResponse>(`movie/${movieId}/translations`);
	}

	async videos(movieId: number, language?: string): Promise<VideosResponse> {
		let endpoint = `movie/${movieId}/videos`;

		if (language) {
			endpoint += `?language=${encodeURIComponent(language)}`;
		}

		return this.apiInstance.GET<VideosResponse>(endpoint);
	}

	// Get the list of streaming providers we have for a movie.
	async watchProviders(movieId: number): Promise<WatchProvidersResponse> {
		return this.apiInstance.GET<WatchProvidersResponse>(`movie/${movieId}/watch/providers`);
	}

	// @TODO Add Rating

	// @TODO Delete Rating
}
