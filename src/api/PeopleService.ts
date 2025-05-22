import { API } from '.';
import {
	ChangesResponse,
	CombinedCreditsResponse,
	DetailsResponse,
	ExternalIDsResponse,
	ImagesResponse,
	LatestResponse,
	MovieCreditsResponse,
	TaggedImagesResponse,
	TranslationsResponse,
	TVCreditsResponse
} from '../types/people';

export class PeopleService {
	private apiInstance: API;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Query the top level details of a person.
	 *
	 * @param person_id - The ID of the person.
	 * @param append_to_response - Comma-separated list of endpoints within this namespace (20 items max).
	 * @param language - The language for the response. Default is 'en-US'.
	 * @returns Details of the person.
	 */
	details(
		person_id: number,
		append_to_response?: string,
		language?: string
	): Promise<DetailsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ append_to_response, language });
		const endpoint = `person/${person_id}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}

	/**
	 * Get the recent changes for a person.
	 *
	 * @param person_id - The ID of the person.
	 * @param end_date - The end date for filtering changes (optional).
	 * @param page - The page number for pagination. Default is 1 (optional).
	 * @param start_date - The start date for filtering changes (optional).
	 * @returns Recent changes for the person.
	 */
	changes(
		person_id: number,
		end_date?: string,
		page?: number,
		start_date?: string
	): Promise<ChangesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ end_date, page, start_date });
		const endpoint = `person/${person_id}/changes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<ChangesResponse>(endpoint);
	}

	/**
	 * Get the combined movie and TV credits that belong to a person.
	 *
	 * @param person_id - The ID of the person.
	 * @param language - The language to use for the results. Default is "en-US" (optional).
	 * @returns The combined movie and TV credits for the person.
	 */
	combinedCredits(person_id: string, language?: string): Promise<CombinedCreditsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `person/${person_id}/combined_credits${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CombinedCreditsResponse>(endpoint);
	}

	/**
	 * Get the external IDs that belong to a person.
	 *
	 * @param person_id - The ID of the person.
	 * @returns The external IDs for the person.
	 */
	externalIds(person_id: number): Promise<ExternalIDsResponse> {
		const endpoint = `person/${person_id}/external_ids`;
		return this.apiInstance.GET<ExternalIDsResponse>(endpoint);
	}

	/**
	 * Get the profile images that belong to a person.
	 *
	 * @param person_id - The ID of the person.
	 * @returns The profile images for the person.
	 */
	images(person_id: number): Promise<ImagesResponse> {
		const endpoint = `person/${person_id}/images`;
		return this.apiInstance.GET<ImagesResponse>(endpoint);
	}

	/**
	 * Get the newest created person. This is a live response and will continuously change.
	 *
	 * @returns The newest person.
	 */
	latest(): Promise<LatestResponse> {
		const endpoint = 'person/latest';
		return this.apiInstance.GET<LatestResponse>(endpoint);
	}

	/**
	 * Get the movie credits for a person.
	 *
	 * @param person_id - The ID of the person whose movie credits are being queried.
	 * @param language - Optional. A ISO 639-1 language code to get the results in a specific language.
	 * @returns The movie credits for the specified person.
	 */
	movieCredits(person_id: number, language?: string): Promise<MovieCreditsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `person/${person_id}/movie_credits${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<MovieCreditsResponse>(endpoint);
	}

	/**
	 * Get the TV credits that belong to a person.
	 *
	 * @param person_id - The ID of the person whose TV credits are being queried.
	 * @param language - Optional. An ISO 639-1 language code to get the results in a specific language.
	 * @returns The TV credits for the specified person.
	 */
	tvCredits(person_id: number, language?: string): Promise<TVCreditsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `person/${person_id}/tv_credits${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<TVCreditsResponse>(endpoint);
	}

	/**
	 * Get the tagged images for a person.
	 *
	 * @param person_id - The ID of the person whose tagged images are being queried.
	 * @param page - Optional. The page number to retrieve results from. Defaults to 1.
	 * @returns The tagged images for the specified person.
	 */
	taggedImages(person_id: number, page?: number): Promise<TaggedImagesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ page });
		const endpoint = `person/${person_id}/tagged_images${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<TaggedImagesResponse>(endpoint);
	}

	/**
	 * Get the translations that belong to a person.
	 *
	 * @param person_id - The ID of the person whose translations are being queried.
	 * @returns The translations for the specified person.
	 */
	translations(person_id: number): Promise<TranslationsResponse> {
		const endpoint = `person/${person_id}/translations`;
		return this.apiInstance.GET<TranslationsResponse>(endpoint);
	}
}
