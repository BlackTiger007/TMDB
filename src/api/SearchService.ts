import { api } from '.';
import {
	CollectionsResponse,
	CompaniesResponse,
	KeywordsResponse,
	MoviesResponse,
	MultiResponse,
	PersonResponse,
	TVResponse
} from '../types/search';

export class SearchService {
	private apiInstance: api;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Search for collections by their original, translated, and alternative names.
	 *
	 * @param query The search query (required).
	 * @param include_adult Optional flag to include adult content (default: false).
	 * @param language Optional language code (default: "en-US").
	 * @param page Optional page number (default: 1).
	 * @param region Optional ISO-3166-1 code.
	 * @returns The search results for collections.
	 */
	collection(
		query: string,
		include_adult: boolean = false,
		language?: string,
		page?: number,
		region?: string
	): Promise<CollectionsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			include_adult,
			language,
			page,
			region
		});
		const endpoint = `search/collection${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CollectionsResponse>(endpoint);
	}

	/**
	 * Search for companies by their original and alternative names.
	 *
	 * @param query The search query (required).
	 * @param page Optional page number (default: 1).
	 * @returns The search results for companies.
	 */
	company(query: string, page?: number): Promise<CompaniesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ query, page });
		const endpoint = `search/company${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CompaniesResponse>(endpoint);
	}

	/**
	 * Search for keywords by their name.
	 *
	 * @param query The search query (required).
	 * @param page Optional page number (default: 1).
	 * @returns The search results for keywords.
	 */
	keyword(query: string, page: number = 1): Promise<KeywordsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ query, page });
		const endpoint = `search/keyword${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<KeywordsResponse>(endpoint);
	}

	/**
	 * Search for movies by their original, translated, and alternative titles.
	 *
	 * @param query The search query (required).
	 * @param includeAdult Optional boolean to include adult content (default: false).
	 * @param language Optional language for the search results (default: 'en-US').
	 * @param primaryReleaseYear Optional primary release year for filtering results.
	 * @param page Optional page number for pagination (default: 1).
	 * @param region Optional ISO 3166-1 code for filtering by region.
	 * @param year Optional year for filtering results.
	 * @returns The search results for movies.
	 */
	movie(
		query: string,
		includeAdult: boolean = false,
		language: string = 'en-US',
		primaryReleaseYear?: string,
		page: number = 1,
		region?: string,
		year?: string
	): Promise<MoviesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			include_adult: includeAdult,
			language,
			primary_release_year: primaryReleaseYear,
			page,
			region,
			year
		});
		const endpoint = `search/movie${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<MoviesResponse>(endpoint);
	}

	/**
	 * Use multi search to search for movies, TV shows, and people in a single request.
	 *
	 * @param query The search query (required).
	 * @param includeAdult Optional boolean to include adult content (default: false).
	 * @param language Optional language for the search results (default: 'en-US').
	 * @param page Optional page number for pagination (default: 1).
	 * @returns The search results for movies, TV shows, and people.
	 */
	multi(
		query: string,
		includeAdult: boolean = false,
		language: string = 'en-US',
		page: number = 1
	): Promise<MultiResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			include_adult: includeAdult,
			language,
			page
		});
		const endpoint = `search/multi${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<MultiResponse>(endpoint);
	}

	/**
	 * Search for people by their name and also known as names.
	 *
	 * @param query The search query (required).
	 * @param includeAdult Optional boolean to include adult content (default: false).
	 * @param language Optional language for the search results (default: 'en-US').
	 * @param page Optional page number for pagination (default: 1).
	 * @returns The search results for people.
	 */
	person(
		query: string,
		includeAdult: boolean = false,
		language: string = 'en-US',
		page: number = 1
	): Promise<PersonResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			include_adult: includeAdult,
			language,
			page
		});
		const endpoint = `search/person${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<PersonResponse>(endpoint);
	}

	/**
	 * Search for TV shows by their original, translated and also known as names.
	 *
	 * @param query The search query (required).
	 * @param firstAirDateYear Optional filter to search only the first air date (valid values: 1000-9999).
	 * @param includeAdult Optional boolean to include adult content (default: false).
	 * @param language Optional language for the search results (default: 'en-US').
	 * @param page Optional page number for pagination (default: 1).
	 * @param year Optional filter to search by the first air date and all episode air dates (valid values: 1000-9999).
	 * @returns The search results for TV shows.
	 */
	tv(
		query: string,
		firstAirDateYear?: number,
		includeAdult: boolean = false,
		language: string = 'en-US',
		page: number = 1,
		year?: number
	): Promise<TVResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			first_air_date_year: firstAirDateYear,
			include_adult: includeAdult,
			language,
			page,
			year
		});
		const endpoint = `search/tv${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<TVResponse>(endpoint);
	}
}
