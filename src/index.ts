import { API } from './api';
import { AccountService } from './api/AccountService';
import { AuthenticationService } from './api/AuthenticationService';
import { CertificationsService } from './api/CertificationsService';
import { ChangesService } from './api/ChangesService';
import { CollectionsService } from './api/CollectionsService';
import { CompaniesService } from './api/CompaniesService';
import { ConfigurationService } from './api/ConfigurationService';
import { CreditsService } from './api/CreditsService';
import { DiscoverService } from './api/DiscoverService';
import { GenresService } from './api/GenresService';
import { GuestSessionsService } from './api/GuestSessionsService';
import { KeywordsService } from './api/KeywordsService';
import { ListsService } from './api/ListsService';
import { MovieListsService } from './api/MovieListsService';
import { MovieService } from './api/MovieService';
import { NetworkService } from './api/NetworkService';
import { PeopleListsService } from './api/PeopleListsService';
import { PeopleService } from './api/PeopleService';
import { ReviewsService } from './api/ReviewsService';
import { SearchService } from './api/SearchService';
import { TvEpisodeGroupsService } from './api/TvEpisodeGroupsService';
import { TVSeriesService } from './api/TVSeriesService';
import { WatchProvidersService } from './api/WatchProvidersService';

/**
 * Main class for interacting with the TMDB API.
 *
 * This class provides access to various services offered by the TMDB API, including movie information,
 * credits, genres, keywords, popular people lists, and watch providers.
 */
export default class TMDB {
	private apiInstance: API;

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

	/**
	 * Service for certifications-related API operations.
	 * @type {CertificationsService}
	 */
	public certifications: CertificationsService;

	/**
	 * Service for changes-related API operations.
	 * @type {ChangesService}
	 */
	public changes: ChangesService;

	public collections: CollectionsService;

	public authentication: AuthenticationService;

	public companies: CompaniesService;

	public configuration: ConfigurationService;

	public tvseries: TVSeriesService;

	public discover: DiscoverService;

	public guestSessions: GuestSessionsService;

	public lists: ListsService;

	public movieLists: MovieListsService;

	public network: NetworkService;

	public reviews: ReviewsService;

	public tvEpisodeGroups: TvEpisodeGroupsService;

	public people: PeopleService;

	public search: SearchService;

	/**
	 * Creates an instance of the TMDB class.
	 * @param apiKey - The API key used for authenticating requests.
	 * @param language - Optional. The default language for the API responses. Defaults to 'en-US' if not provided.
	 */
	constructor(apiKey: string, language?: string) {
		this.apiInstance = new API(apiKey, language);

		this.movie = new MovieService(this.apiInstance);
		this.credits = new CreditsService(this.apiInstance);
		this.genres = new GenresService(this.apiInstance);
		this.keywords = new KeywordsService(this.apiInstance);
		this.peopleLists = new PeopleListsService(this.apiInstance);
		this.watchProviders = new WatchProvidersService(this.apiInstance);
		this.account = new AccountService(this.apiInstance);
		this.certifications = new CertificationsService(this.apiInstance);
		this.changes = new ChangesService(this.apiInstance);
		this.collections = new CollectionsService(this.apiInstance);
		this.authentication = new AuthenticationService(this.apiInstance);
		this.companies = new CompaniesService(this.apiInstance);
		this.configuration = new ConfigurationService(this.apiInstance);
		this.tvseries = new TVSeriesService(this.apiInstance);
		this.discover = new DiscoverService(this.apiInstance);
		this.guestSessions = new GuestSessionsService(this.apiInstance);
		this.lists = new ListsService(this.apiInstance);
		this.movieLists = new MovieListsService(this.apiInstance);
		this.network = new NetworkService(this.apiInstance);
		this.reviews = new ReviewsService(this.apiInstance);
		this.tvEpisodeGroups = new TvEpisodeGroupsService(this.apiInstance);
		this.people = new PeopleService(this.apiInstance);
		this.search = new SearchService(this.apiInstance);
	}
}
