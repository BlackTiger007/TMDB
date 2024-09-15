import { api } from '.';
import { AlternativeNamesResponse, DetailsResponse, ImagesResponse } from '../types/network';

export class NetworkService {
	private apiInstance: api;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Get the details of a network.
	 *
	 * This method retrieves detailed information about a specific network. You need to provide the unique identifier of the network.
	 *
	 * @param networkId - The unique identifier for the network.
	 * @returns A promise that resolves to the network details.
	 */
	details(networkId: number): Promise<DetailsResponse> {
		const endpoint = `network/${networkId}`;
		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}

	/**
	 * Get the alternative names of a network.
	 *
	 * This method retrieves alternative names for a specific network. You need to provide the unique identifier of the network.
	 *
	 * @param networkId - The unique identifier for the network.
	 * @returns A promise that resolves to the network alternative names.
	 */
	alternativeNames(networkId: number): Promise<AlternativeNamesResponse> {
		const endpoint = `network/${networkId}/alternative_names`;
		return this.apiInstance.GET<AlternativeNamesResponse>(endpoint);
	}

	/**
	 * Get the TV network logos by ID.
	 *
	 * This method retrieves the logos for a specific TV network. You need to provide the unique identifier of the network.
	 *
	 * @param networkId - The unique identifier for the TV network.
	 * @returns A promise that resolves to the network images.
	 */
	getNetworkImages(networkId: number): Promise<ImagesResponse> {
		const endpoint = `network/${networkId}/images`;
		return this.apiInstance.GET<ImagesResponse>(endpoint);
	}
}
