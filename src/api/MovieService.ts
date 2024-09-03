import { api } from '.';
import {
	AlternativeTitlesResponse,
	changesResponse,
	Movie,
	CreditsResponse,
	AccountStatesResponse,
	ExternalIDsResponse,
	ImageResponse
} from '../types';

export class MovieService {
	private apiInstance: api;

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	async getMovie(id: number): Promise<Movie> {
		return this.apiInstance.GET<Movie>(`movie/${id}`);
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
	): Promise<changesResponse> {
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

		return this.apiInstance.GET<changesResponse>(endpoint);
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
}
