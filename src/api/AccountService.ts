import { api } from '.';
import { DetailsResponse, FavoriteTvResponse } from '../types/account';
import { Movie } from '../types/movie';

export class AccountService {
	private apiInstance: api;

	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	async details(account_id: number | null, session_id?: string): Promise<DetailsResponse> {
		let endpoint = `account`;

		let queryParams = new URLSearchParams();

		if (account_id) {
			queryParams.append('account_id', account_id.toString());
		}

		if (session_id) {
			queryParams.append('session_id', session_id);
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}

	async addFavorite(
		account_id: number,
		raw_body: { media_type: 'movie' | 'tv'; media_id: number; favorite: boolean },
		session_id?: string
	) {
		let endpoint = `account/${account_id}/favorite`;

		if (session_id) {
			endpoint += `?session_id=${session_id}`;
		}

		const body = {
			media_type: raw_body.media_type,
			media_id: raw_body.media_id,
			favorite: raw_body.favorite
		};

		return await this.apiInstance.POST(`${endpoint}`, body);
	}

	async addToWatchlist(
		account_id: number,
		raw_body: { media_type: 'movie' | 'tv'; media_id: number; watchlist: boolean },
		session_id?: string
	) {
		let endpoint = `account/${account_id}/watchlist`;

		if (session_id) {
			endpoint += `?session_id=${session_id}`;
		}

		const body = {
			media_type: raw_body.media_type,
			media_id: raw_body.media_id,
			watchlist: raw_body.watchlist
		};

		return await this.apiInstance.POST(`${endpoint}`, body);
	}

	async favoriteMovies(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<Movie> {
		let endpoint = `account/${account_id}/favorite/movies`;

		const queryParams = new URLSearchParams();

		if (language) {
			queryParams.append('language', language);
		}

		if (page) {
			queryParams.append('page', page.toString());
		}

		if (session_id) {
			queryParams.append('session_id', session_id);
		}

		if (sort_by) {
			queryParams.append('sort_by', sort_by);
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return await this.apiInstance.GET<Movie>(endpoint);
	}

	async favoriteTv(
		account_id: number,
		language?: string,
		page?: number,
		session_id?: string,
		sort_by?: 'created_at.asc' | 'created_at.desc'
	): Promise<FavoriteTvResponse> {
		let endpoint = `account/${account_id}/favorite/tv`;

		const queryParams = new URLSearchParams();

		if (language) {
			queryParams.append('language', language);
		}

		if (page) {
			queryParams.append('page', page.toString());
		}

		if (session_id) {
			queryParams.append('session_id', session_id);
		}

		if (sort_by) {
			queryParams.append('sort_by', sort_by);
		}

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return await this.apiInstance.GET<FavoriteTvResponse>(endpoint);
	}
}
