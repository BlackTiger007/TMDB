import { api } from '.';
import { DetailsResponse } from '../types/account';

export class AccountService {
	private apiInstance: api;

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	async details(account_id: number | null, session_id?: string): Promise<DetailsResponse> {
		let endpoint = `account`;

		let queryParams = new URLSearchParams();

		if (account_id) {
			queryParams.append('account_id', account_id.toString());
		}

		if (session_id) {
			queryParams.append('session_id', session_id);
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}
}
