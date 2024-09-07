import { api } from '.';
import { AvailableRegionsResponse } from '../types/watchProviders';

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
}
