import { api } from '.';
import { GenreList } from '../types/genres';

export class GenresService {
	private apiInstance: api;

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	async movieList(language: string = 'en'): Promise<GenreList> {
		return await this.apiInstance.GET<GenreList>(`genre/movie/list?language=${language}`);
	}

	async tvList(language: string = 'en'): Promise<GenreList> {
		return await this.apiInstance.GET<GenreList>(`genre/tv/list?language=${language}`);
	}
}
