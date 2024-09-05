import { api } from '.';
import { KeywordResponse } from '../types/keywords';

export class KeywordsService {
	private apiInstance: api;

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	async details(keywordId: number): Promise<KeywordResponse> {
		return await this.apiInstance.GET<KeywordResponse>(`keyword/${keywordId}`);
	}

	// Movies are not added!
}
