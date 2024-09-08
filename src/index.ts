import { api } from './api';
import { AccountService } from './api/AccountService';
import { CertificationsService } from './api/CertificationsService';
import { CreditsService } from './api/CreditsService';
import { GenresService } from './api/GenresService';
import { KeywordsService } from './api/KeywordsService';
import { MovieService } from './api/MovieService';
import { PeopleListsService } from './api/PeopleListsService';
import { WatchProvidersService } from './api/WatchProvidersService';

/**
 * Main class for interacting with the TMDB API.
 *
 * This class provides access to various services offered by the TMDB API, including movie information,
 * credits, genres, keywords, popular people lists, and watch providers.
 */
export default class TMDB {
	private apiInstance: api;

	/**
	 * Service for movie-related API operations.
	 * @type {MovieService}
	 */
	public movie: MovieService;

	/**
	 * Service for credits-related API operations.
	 * @type {CreditsService}
	 */
	public credits: CreditsService;

	/**
	 * Service for genre-related API operations.
	 * @type {GenresService}
	 */
	public genres: GenresService;

	/**
	 * Service for keywords-related API operations.
	 * @type {KeywordsService}
	 */
	public keywords: KeywordsService;

	/**
	 * Service for popular people lists-related API operations.
	 * @type {PeopleListsService}
	 */
	public peopleLists: PeopleListsService;

	/**
	 * Service for watch providers-related API operations.
	 * @type {WatchProvidersService}
	 */
	public watchProviders: WatchProvidersService;

	/**
	 * Service for account-related API operations.
	 * @type {AccountService}
	 */
	public account: AccountService;

	public certifications: CertificationsService;

	/**
	 * Creates an instance of the TMDB class.
	 * @param apiKey - The API key used for authenticating requests.
	 * @param language - Optional. The default language for the API responses. Defaults to 'en-US' if not provided.
	 */
	constructor(apiKey: string, language?: string) {
		this.apiInstance = new api(apiKey, language);

		this.movie = new MovieService(this.apiInstance);
		this.credits = new CreditsService(this.apiInstance);
		this.genres = new GenresService(this.apiInstance);
		this.keywords = new KeywordsService(this.apiInstance);
		this.peopleLists = new PeopleListsService(this.apiInstance);
		this.watchProviders = new WatchProvidersService(this.apiInstance);
		this.account = new AccountService(this.apiInstance);
		this.certifications = new CertificationsService(this.apiInstance);
	}
}
