import { api } from '.';
import { PersonListResponse } from '../types/peopleLists';

export class PeopleListsService {
	private apiInstance: api;

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	async popular(language?: string, page?: number): Promise<PersonListResponse> {
		let endpoint: string = '/person/popular';

		const queryParams = new URLSearchParams();

		// Defaults to en-US
		if (language) {
			queryParams.append('language', language);
		}
		// Defaults to 1
		if (page) {
			queryParams.append('page', page.toString());
		}

		return await this.apiInstance.GET<PersonListResponse>(endpoint);
	}
}
