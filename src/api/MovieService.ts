import { api } from '.';
import { AlternativeTitlesResponse, Movie } from '../types';

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
}
