import { api } from '.';
import { CertificationsResponse } from '../types/certifications';

export class CertificationsService {
	private apiInstance: api;

	/**
	 * Initializes the CertificationsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Retrieves the list of movie certifications.
	 *
	 * This method fetches the list of available certifications for movies. The response contains
	 * the certification name, certification value, and optional notes for each certification.
	 *
	 * @returns A promise that resolves to the list of movie certifications.
	 */
	async movieCertifications(): Promise<CertificationsResponse> {
		return this.apiInstance.GET<CertificationsResponse>('certification/movie/list');
	}
}
