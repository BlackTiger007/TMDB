import { api } from './api';
import { CreditsService } from './api/CreditsService';
import { GenresService } from './api/GenresService';
import { KeywordsService } from './api/KeywordsService';
import { MovieService } from './api/MovieService';
import { PeopleListsService } from './api/PeopleListsService';

export default class TMDB {
	private apiInstance: api;

	public movie: MovieService;
	public credits: CreditsService;
	public genres: GenresService;
	public keywords: KeywordsService;
	public peopleLists: PeopleListsService;

	constructor(apiKey: string, language: string = 'en-US') {
		this.apiInstance = new api(apiKey, language);

		this.movie = new MovieService(this.apiInstance);
		this.credits = new CreditsService(this.apiInstance);
		this.genres = new GenresService(this.apiInstance);
		this.keywords = new KeywordsService(this.apiInstance);
		this.peopleLists = new PeopleListsService(this.apiInstance);
	}
}
