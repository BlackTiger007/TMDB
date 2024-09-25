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
	 * @param queryParam The optional query parameters.
	 * @param {boolean} [queryParam.include_adult=false] Optional flag to include adult content.
	 * @param {string} [queryParam.language="en-US"] Optional language code.
	 * @param {number} [queryParam.page=1] Optional page number.
	 * @param {string} [queryParam.region] Optional ISO-3166-1 code.
	 * @returns {Promise<CollectionsResponse>} The search results for collections.
	 */
	collection(
		query: string,
		queryParam: {
			include_adult?: boolean;
			language?: string;
			page?: number;
			region?: string;
		}
	): Promise<CollectionsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			include_adult: queryParam.include_adult,
			language: queryParam.language,
			page: queryParam.page,
			region: queryParam.region
		});
		const endpoint = `search/collection${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<CollectionsResponse>(endpoint);
	}

	/**
	 * Search for companies by their original and alternative names.
	 *
	 * @param query The search query (required).
	 * @param queryParam The optional query parameters.
	 * @param {number} [queryParam.page=1] Optional page number.
	 * @returns {Promise<CompaniesResponse>} The search results for companies.
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
	 * @param queryParam The optional query parameters.
	 * @param {number} [queryParam.page=1] Optional page number.
	 * @returns {Promise<KeywordsResponse>} The search results for keywords.
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
	 * @param queryParam The optional query parameters.
	 * @param {boolean} [queryParam.includeAdult=false] Optional boolean to include adult content.
	 * @param {string} [queryParam.language="en-US"] Optional language for the search results.
	 * @param {string} [queryParam.primaryReleaseYear] Optional primary release year for filtering results.
	 * @param {number} [queryParam.page=1] Optional page number for pagination.
	 * @param {string} [queryParam.region] Optional ISO 3166-1 code for filtering by region.
	 * @param {string} [queryParam.year] Optional year for filtering results.
	 * @returns {Promise<MoviesResponse>} The search results for movies.
	 */
	movie(
		query: string,
		queryParam: {
			includeAdult?: boolean;
			language?: string;
			primaryReleaseYear?: string;
			page?: number;
			region?: string;
			year?: string;
		}
	): Promise<MoviesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			include_adult: queryParam.includeAdult,
			language: queryParam.language,
			primary_release_year: queryParam.primaryReleaseYear,
			page: queryParam.page,
			region: queryParam.region,
			year: queryParam.year
		});
		const endpoint = `search/movie${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<MoviesResponse>(endpoint);
	}

	/**
	 * Use multi search to search for movies, TV shows, and people in a single request.
	 *
	 * @param query The search query (required).
	 * @param queryParam The optional query parameters.
	 * @param {boolean} [queryParam.includeAdult=false] Optional boolean to include adult content.
	 * @param {string} [queryParam.language="en-US"] Optional language for the search results.
	 * @param {number} [queryParam.page=1] Optional page number for pagination.
	 * @returns {Promise<MultiResponse>} The search results for movies, TV shows, and people.
	 */
	multi(
		query: string,
		queryParam: { includeAdult?: boolean; language?: string; page?: number }
	): Promise<MultiResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			include_adult: queryParam.includeAdult,
			language: queryParam.language,
			page: queryParam.page
		});
		const endpoint = `search/multi${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<MultiResponse>(endpoint);
	}

	/**
	 * Search for people by their name and also known as names.
	 *
	 * @param query The search query (required).
	 * @param queryParam The optional query parameters.
	 * @param {boolean} [queryParam.includeAdult=false] Optional boolean to include adult content.
	 * @param {string} [queryParam.language="en-US"] Optional language for the search results.
	 * @param {number} [queryParam.page=1] Optional page number for pagination.
	 * @returns {Promise<PersonResponse>} The search results for people.
	 */
	person(
		query: string,
		queryParam: { includeAdult?: boolean; language?: string; page?: number }
	): Promise<PersonResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			include_adult: queryParam.includeAdult,
			language: queryParam.language,
			page: queryParam.page
		});
		const endpoint = `search/person${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<PersonResponse>(endpoint);
	}

	/**
	 * Search for TV shows by their original, translated and also known as names.
	 *
	 * @param query The search query (required).
	 * @param queryParam The optional query parameters.
	 * @param {number} [queryParam.firstAirDateYear] Optional filter to search only the first air date.
	 * @param {boolean} [queryParam.includeAdult=false] Optional boolean to include adult content.
	 * @param {string} [queryParam.language="en-US"] Optional language for the search results.
	 * @param {number} [queryParam.page=1] Optional page number for pagination.
	 * @param {number} [queryParam.year] Optional filter to search by the first air date and all episode air dates.
	 * @returns {Promise<TVResponse>} The search results for TV shows.
	 */
	tv(
		query: string,
		queryParam: {
			firstAirDateYear?: number;
			includeAdult?: boolean;
			language?: string;
			page?: number;
			year?: number;
		}
	): Promise<TVResponse> {
		const queryParams = this.apiInstance.buildQueryParams({
			query,
			first_air_date_year: queryParam.firstAirDateYear,
			include_adult: queryParam.includeAdult,
			language: queryParam.language,
			page: queryParam.page,
			year: queryParam.year
		});
		const endpoint = `search/tv${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<TVResponse>(endpoint);
	}
}
