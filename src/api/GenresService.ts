import { api } from '.';
import { GenreList } from '../types/genres';

export class GenresService {
	private apiInstance: api;

	/**
	 * Initializes the GenresService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Retrieves the list of movie genres.
	 *
	 * This method fetches the list of available genres for movies. The language parameter can be used
	 * to specify the language for the genre names. If no language is provided, the default language
	 * set in the API instance will be used.
	 *
	 * @param language - Optional. The language code for the genre names. If omitted, defaults to the API instance's language.
	 * @returns A promise that resolves to an object containing the list of movie genres.
	 */
	async movieList(language?: string): Promise<GenreList> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `genre/movie/list${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<GenreList>(endpoint);
	}

	/**
	 * Retrieves the list of TV genres.
	 *
	 * This method fetches the list of available genres for TV shows. The language parameter can be used
	 * to specify the language for the genre names. If no language is provided, the default language
	 * set in the API instance will be used.
	 *
	 * @param language - Optional. The language code for the genre names. If omitted, defaults to the API instance's language.
	 * @returns A promise that resolves to an object containing the list of TV genres.
	 */
	async tvList(language?: string): Promise<GenreList> {
		const queryParams = this.apiInstance.buildQueryParams({ language });
		const endpoint = `genre/tv/list${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
		return this.apiInstance.GET<GenreList>(endpoint);
	}
}
