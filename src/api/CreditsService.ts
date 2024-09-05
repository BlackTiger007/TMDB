import { api } from '.';
import { CreditsResponse } from '../types/credits';

export class CreditsService {
	private apiInstance: api;

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	// Get a movie or TV credit details by ID.
	// Bekommt man von "movie/{movie_id}/credits", "tv/{series_id}/credits", "person/{person_id}/combined_credits", "person/{person_id}/movie_credits", "person/{person_id}/tv_credits", "tv/{series_id}/season/{season_number}/credits" und "/tv/{series_id}/season/{season_number}/episode/{episode_number}/credits"
	async details(credit_id: string): Promise<CreditsResponse> {
		return this.apiInstance.GET<CreditsResponse>(`credit/${credit_id}`);
	}
}
