import { api } from './api';
import { CreditsService } from './api/CreditsService';
import { GenresService } from './api/GenresService';
import { MovieService } from './api/MovieService';

export default class TMDB {
	private apiInstance: api;

	public movie: MovieService;
	public credits: CreditsService;
	public genres: GenresService;

	constructor(apiKey: string, language: string = 'en-US') {
		this.apiInstance = new api(apiKey, language);

		this.movie = new MovieService(this.apiInstance);
		this.credits = new CreditsService(this.apiInstance);
		this.genres = new GenresService(this.apiInstance);
	}
}
