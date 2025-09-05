import { API } from '.';
import { CreditsResponse } from '../types/credits';

/**
 * Service class for interacting with credit-related endpoints of the TMDB API.
 */
export class CreditsService {
	private readonly apiInstance: API;

	/**
	 * Creates an instance of CreditsService.
	 * @param apiInstance - The instance of the API class used to make requests.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Retrieves credit details for a specific credit ID.
	 * The credit ID can be obtained from various endpoints, such as:
	 * - `movie/{movie_id}/credits` (Movie credits)
	 * - `tv/{series_id}/credits` (TV series credits)
	 * - `person/{person_id}/combined_credits` (Combined credits of a person)
	 * - `person/{person_id}/movie_credits` (Movie credits of a person)
	 * - `person/{person_id}/tv_credits` (TV credits of a person)
	 * - `tv/{series_id}/season/{season_number}/credits` (Credits of a season)
	 * - `tv/{series_id}/season/{season_number}/episode/{episode_number}/credits` (Credits of an episode)
	 *
	 * @param credit_id - The ID of the credit to retrieve.
	 * @param language - Optional language parameter to specify the language of the response.
	 * @returns A promise that resolves to the credit details.
	 */
	async details(credit_id: string, language?: string): Promise<CreditsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `credit/${credit_id}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CreditsResponse>(endpoint);
	}
}
