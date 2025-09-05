import { API } from '.';
import { DetailsResponse, AlternativeNamesResponse, ImagesResponse } from '../types/companies';

export class CompaniesService {
	private readonly apiInstance: API;

	/**
	 * Initializes the CompaniesService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Fetches detailed information about a specific company.
	 *
	 * @param company_id - The ID of the company to retrieve.
	 * @returns A promise that resolves to the details of the company.
	 */
	async details(company_id: number): Promise<DetailsResponse> {
		return this.apiInstance.GET<DetailsResponse>(`company/${company_id}`);
	}

	/**
	 * Fetches the alternative names of a specific company.
	 *
	 * @param company_id - The ID of the company to retrieve alternative names for.
	 * @returns A promise that resolves to the alternative names of the company.
	 */
	async alternativeNames(company_id: number): Promise<AlternativeNamesResponse> {
		return this.apiInstance.GET<AlternativeNamesResponse>(
			`company/${company_id}/alternative_names`
		);
	}

	/**
	 * Retrieves the logos of a specific company.
	 *
	 * #### Note
	 * There are two image formats that are supported for companies, PNGs and SVGs. You can see which type the original file is by looking at the `file_type` field. We prefer SVGs as they are resolution independent and as such, the width and height are only there to reflect the original asset that was uploaded. An SVG can be scaled properly beyond those dimensions if you call them as a PNG.
	 *
	 * For more information about how SVG's and PNG's can be used, take a read through [this document](https://developer.themoviedb.org/docs/images).
	 *
	 * @param company_id - The ID of the company to retrieve logos for.
	 * @returns A promise that resolves to the logos of the company.
	 */
	async images(company_id: number): Promise<ImagesResponse> {
		return this.apiInstance.GET<ImagesResponse>(`company/${company_id}/images`);
	}
}
