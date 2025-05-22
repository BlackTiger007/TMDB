import { API } from '.';
import {
	DetailsResponse,
	CountriesResponse,
	JobsResponse,
	LanguagesResponse,
	PrimaryTranslationsResponse,
	TimezonesResponse
} from '../types/configuration';

export class ConfigurationService {
	private apiInstance: API;

	/**
	 * Initializes the ConfigurationService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Fetches the API configuration details.
	 * The data returned provides information required to integrate with the API, such as valid image sizes and address.
	 * @returns A promise that resolves to the configuration details.
	 */
	async details(): Promise<DetailsResponse> {
		return this.apiInstance.GET<DetailsResponse>('configuration');
	}

	/**
	 * Retrieves a list of countries (ISO 3166-1 tags) used throughout TMDB.
	 * @param language - Optional. The language for the response. Defaults to 'en-US'.
	 * @returns A promise that resolves to the list of countries.
	 */
	async countries(language: string = 'en-US'): Promise<CountriesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `configuration/countries${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CountriesResponse>(endpoint);
	}

	/**
	 * Retrieves a list of jobs and departments used on TMDB.
	 * @returns A promise that resolves to the list of jobs.
	 */
	async jobs(): Promise<JobsResponse> {
		return this.apiInstance.GET<JobsResponse>('configuration/jobs');
	}

	/**
	 * Retrieves a list of languages (ISO 639-1 tags) used throughout TMDB.
	 * @returns A promise that resolves to the list of languages.
	 */
	async languages(): Promise<LanguagesResponse> {
		return this.apiInstance.GET<LanguagesResponse>('configuration/languages');
	}

	/**
	 * Retrieves a list of the officially supported translations on TMDB.
	 * These translations are used for localizing the TMDB website.
	 * @returns A promise that resolves to the list of primary translations.
	 */
	async primaryTranslations(): Promise<PrimaryTranslationsResponse> {
		return this.apiInstance.GET<PrimaryTranslationsResponse>('configuration/primary_translations');
	}

	/**
	 * Retrieves a list of timezones used throughout TMDB.
	 * @returns A promise that resolves to the list of timezones.
	 */
	async timezones(): Promise<TimezonesResponse> {
		return this.apiInstance.GET<TimezonesResponse>('configuration/timezones');
	}
}
