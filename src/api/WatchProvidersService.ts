import { api } from '.';
import { AvailableRegionsResponse, ProvidersResponse } from '../types/watchProviders';

export class WatchProvidersService {
	private apiInstance: api;

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	async availableRegions(language: string = 'en-US'): Promise<AvailableRegionsResponse> {
		return await this.apiInstance.GET<AvailableRegionsResponse>(
			`watch/providers/regions?language=${language}`
		);
	}

	// Get the list of streaming providers we have for movies.
	// Returns a list of the watch provider (OTT/streaming) data we have available for movies. You can specify a `watch_region` param if you want to further filter the list by country.
	async movieProviders(
		language: string = 'en-US',
		watch_region?: string
	): Promise<ProvidersResponse> {
		let endpoint = 'watch/providers/movie';

		const queryParams = new URLSearchParams();

		if (language) {
			queryParams.append('language', language);
		}

		if (watch_region) {
			queryParams.append('watch_region', watch_region);
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return await this.apiInstance.GET<ProvidersResponse>(endpoint);
	}

	// Get the list of streaming providers we have for TV shows.
	// Returns a list of the watch provider (OTT/streaming) data we have available for TV shows. You can specify a `watch_region` param if you want to further filter the list by country.
	async tvProviders(language: string = 'en-US', watch_region?: string): Promise<ProvidersResponse> {
		let endpoint = 'watch/providers/tv';

		const queryParams = new URLSearchParams();

		if (language) {
			queryParams.append('language', language);
		}

		if (watch_region) {
			queryParams.append('watch_region', watch_region);
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return await this.apiInstance.GET<ProvidersResponse>(endpoint);
	}
}
