import { api } from './api';
import { MovieService } from './api/MovieService';

export default class TMDB {
	private apiInstance: api;

	public movie: MovieService;

	constructor(apiKey: string, language: string = 'en-US') {
		this.apiInstance = new api(apiKey, language);

		this.movie = new MovieService(this.apiInstance);
	}
}
