import { API } from '.';
import type {
	AccountDetailsResponse,
	AccountFavoriteMoviesResponse,
	AccountFavoriteTVResponse,
	AccountListsResponse,
	AccountRatedMoviesResponse,
	AccountRatedTVEpisodesResponse,
	AccountRatedTVResponse,
	AccountWatchlistMoviesResponse,
	AccountWatchlistTVResponse
} from '../newTypes';

/**
 * Service class for interacting with account-related endpoints of the TMDB API.
 */
export class AccountService {
	private apiInstance: API;

	/**
	 * Creates an instance of AccountService.
	 * @param apiInstance - The instance of the API class used to make requests.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Fetches the details of an account.
	 * @param account_id - The ID of the account.
	 * @param session_id - Optional session ID for the request.
	 * @returns A promise that resolves to the account details.
	 */
	async details(account_id: number, session_id?: string): Promise<AccountDetailsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ account_id, session_id });
		const endpoint = `account${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<AccountDetailsResponse>(endpoint);
	}

	/**
	 * Adds or removes a media item from the account's favorites.
	 * @param account_id - The ID of the account.
	 * @param raw_body - Object containing media type, media ID, and whether it's a favorite.
	 * @param session_id - Optional session ID for the request.
	 * @returns A promise that resolves to the response of the POST request.
	 */
	async addFavorite(
		account_id: number,
		raw_body: { media_type: 'movie' | 'tv'; media_id: number; favorite: boolean },
		session_id?: string
	) {
		const endpoint = `account/${account_id}/favorite${session_id ? `?session_id=${session_id}` : ''}`;
		return await this.apiInstance.POST(endpoint, raw_body);
	}

	/**
	 * Adds or removes a media item from the account's watchlist.
	 * @param account_id - The ID of the account.
	 * @param raw_body - Object containing media type, media ID, and whether it's on the watchlist.
	 * @param session_id - Optional session ID for the request.
	 * @returns A promise that resolves to the response of the POST request.
	 */
	async addToWatchlist(
		account_id: number,
		raw_body: { media_type: 'movie' | 'tv'; media_id: number; watchlist: boolean },
		session_id?: string
	) {
		const endpoint = `account/${account_id}/watchlist${session_id ? `?session_id=${session_id}` : ''}`;
		return await this.apiInstance.POST(endpoint, raw_body);
	}

	/**
	 * Retrieves the list of favorite movies for the specified account.
	 * @param account_id - The ID of the account.
	 * @param language - Optional language parameter.
	 * @param page - Optional page number for pagination.
	 * @param session_id - Optional session ID for the request.
	 * @param sort_by - Optional sort order of the results.
	 * @returns A promise that resolves to the list of favorite movies.
	 */
	async favoriteMovies(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<AccountFavoriteMoviesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, session_id, sort_by });
		const endpoint = `account/${account_id}/favorite/movies${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<AccountFavoriteMoviesResponse>(endpoint);
	}

	/**
	 * Retrieves the list of favorite TV shows for the specified account.
	 * @param account_id - The ID of the account.
	 * @param language - Optional language parameter.
	 * @param page - Optional page number for pagination.
	 * @param session_id - Optional session ID for the request.
	 * @param sort_by - Optional sort order of the results.
	 * @returns A promise that resolves to the list of favorite TV shows.
	 */
	async favoriteTv(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<AccountFavoriteTVResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, session_id, sort_by });
		const endpoint = `account/${account_id}/favorite/tv${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<AccountFavoriteTVResponse>(endpoint);
	}

	/**
	 * Retrieves the lists created by the specified account.
	 * @param account_id - The ID of the account.
	 * @param page - Optional page number for pagination.
	 * @param session_id - Optional session ID for the request.
	 * @returns A promise that resolves to the list of lists created by the account.
	 */
	async lists(
		account_id: number,
		page?: number,
		session_id?: string
	): Promise<AccountListsResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ page, session_id });
		const endpoint = `account/${account_id}/lists${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<AccountListsResponse>(endpoint);
	}

	/**
	 * Retrieves the list of rated movies for the specified account.
	 * @param account_id - The ID of the account.
	 * @param language - Optional language parameter.
	 * @param page - Optional page number for pagination.
	 * @param session_id - Optional session ID for the request.
	 * @param sort_by - Optional sort order of the results.
	 * @returns A promise that resolves to the list of rated movies.
	 */
	async ratedMovies(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<AccountRatedMoviesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, session_id, sort_by });
		const endpoint = `account/${account_id}/rated/movies${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<AccountRatedMoviesResponse>(endpoint);
	}

	/**
	 * Retrieves the list of rated TV shows for the specified account.
	 * @param account_id - The ID of the account.
	 * @param language - Optional language parameter.
	 * @param page - Optional page number for pagination.
	 * @param session_id - Optional session ID for the request.
	 * @param sort_by - Optional sort order of the results.
	 * @returns A promise that resolves to the list of rated TV shows.
	 */
	async ratedTv(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<AccountRatedTVResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, session_id, sort_by });
		const endpoint = `account/${account_id}/rated/tv${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<AccountRatedTVResponse>(endpoint);
	}

	/**
	 * Retrieves the list of rated TV episodes for the specified account.
	 * @param account_id - The ID of the account.
	 * @param language - Optional language parameter.
	 * @param page - Optional page number for pagination.
	 * @param session_id - Optional session ID for the request.
	 * @param sort_by - Optional sort order of the results.
	 * @returns A promise that resolves to the list of rated TV episodes.
	 */
	async ratedTvEpisodes(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<AccountRatedTVEpisodesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, session_id, sort_by });
		const endpoint = `account/${account_id}/rated/tv/episodes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<AccountRatedTVEpisodesResponse>(endpoint);
	}

	/**
	 * Retrieves the list of movies in the watchlist for the specified account.
	 * @param account_id - The ID of the account.
	 * @param language - Optional language parameter.
	 * @param page - Optional page number for pagination.
	 * @param session_id - Optional session ID for the request.
	 * @param sort_by - Optional sort order of the results.
	 * @returns A promise that resolves to the list of movies in the watchlist.
	 */
	async watchlistMovies(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<AccountWatchlistMoviesResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, session_id, sort_by });
		const endpoint = `account/${account_id}/watchlist/movies${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<AccountWatchlistMoviesResponse>(endpoint);
	}

	/**
	 * Retrieves the list of TV shows in the watchlist for the specified account.
	 * @param account_id - The ID of the account.
	 * @param language - Optional language parameter.
	 * @param page - Optional page number for pagination.
	 * @param session_id - Optional session ID for the request.
	 * @param sort_by - Optional sort order of the results.
	 * @returns A promise that resolves to the list of TV shows in the watchlist.
	 */
	async watchlistTv(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<AccountWatchlistTVResponse> {
		const queryParams = this.apiInstance.buildQueryParams({ language, page, session_id, sort_by });
		const endpoint = `account/${account_id}/watchlist/tv${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return await this.apiInstance.GET<AccountWatchlistTVResponse>(endpoint);
	}
}
