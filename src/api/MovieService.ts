import { api } from '.';
import { AlternativeTitlesResponse, changesResponse, Movie } from '../types';

export class MovieService extends api {
	async getMovie(id: number): Promise<Movie> {
		return this.GET<Movie>(`movie/${id}`);
	}

	async alternativeTitle(movieId: number, country?: string): Promise<AlternativeTitlesResponse> {
		let endpoint = `movie/${movieId}/alternative_titles`;

		if (country) {
			endpoint += `?country=${encodeURIComponent(country)}`;
		}

		return this.GET<AlternativeTitlesResponse>(endpoint);
	}

	async changes(
		movieId: number,
		start_date?: string,
		end_date?: string,
		page: number = 1
	): Promise<changesResponse> {
		let endpoint = `movie/${movieId}/changes`;

		const queryParams = new URLSearchParams();

		if (start_date) {
			queryParams.append('start_date', start_date);
		}

		if (end_date) {
			queryParams.append('end_date', end_date);
		}

		queryParams.append('page', page.toString());

		if (queryParams.toString()) {
			endpoint += `?${queryParams.toString()}`;
		}

		return this.GET<changesResponse>(endpoint);
	}
}
