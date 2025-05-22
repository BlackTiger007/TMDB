import { API } from '.';
import { AvailableRegionsResponse, ProvidersResponse } from '../types/watchProviders';

export class WatchProvidersService {
	private readonly apiInstance: API;

	/**
	 * Initializes the WatchProvidersService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Retrieves the list of available regions for watch providers.
	 *
	 * This method fetches a list of available regions for watch providers. The `language` parameter can be used to specify
	 * the language for the response. If omitted, the default language set in the API instance will be used.
	 *
	 * @param language - Optional. The language code for the response. Defaults to 'en-US' if not provided.
	 * @returns A promise that resolves to an object containing the available regions for watch providers.
	 */
	async availableRegions(language?: string): Promise<AvailableRegionsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `watch/providers/regions${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

		return await this.apiInstance.GET<AvailableRegionsResponse>(endpoint);
	}

	/**
	 * Retrieves the list of streaming providers for movies.
	 *
	 * This method fetches a list of streaming providers for movies. The `language` parameter can be used to specify the language
	 * for the response. If omitted, the default language set in the API instance will be used. The `watch_region` parameter
	 * specifies a region to filter the list by country. If omitted, the list is not filtered by region.
	 *
	 * @param language - Optional. The language code for the response. Defaults to 'en-US' if not provided.
	 * @param watch_region - Optional. The region to filter the list by country.
	 * @returns A promise that resolves to an object containing the list of streaming providers for movies.
	 */
	async movieProviders(language?: string, watch_region?: string): Promise<ProvidersResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, watch_region });
		const endpoint = `watch/providers/movie${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

		return await this.apiInstance.GET<ProvidersResponse>(endpoint);
	}

	/**
	 * Retrieves the list of streaming providers for TV shows.
	 *
	 * This method fetches a list of streaming providers for TV shows. The `language` parameter can be used to specify the language
	 * for the response. If omitted, the default language set in the API instance will be used. The `watch_region` parameter
	 * specifies a region to filter the list by country. If omitted, the list is not filtered by region.
	 *
	 * @param language - Optional. The language code for the response. Defaults to 'en-US' if not provided.
	 * @param watch_region - Optional. The region to filter the list by country.
	 * @returns A promise that resolves to an object containing the list of streaming providers for TV shows.
	 */
	async tvProviders(language?: string, watch_region?: string): Promise<ProvidersResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, watch_region });
		const endpoint = `watch/providers/tv${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

		return await this.apiInstance.GET<ProvidersResponse>(endpoint);
	}
}
