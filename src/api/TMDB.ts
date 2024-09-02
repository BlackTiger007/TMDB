import type { Movie, AlternativeTitlesResponse, Url, validateKeyResponse } from '../types';

export class TMDB {
	private apiKey: string;
	private language: string;
	private url: Url = 'https://api.themoviedb.org/3';
	private static readonly MAX_RETRIES = 3;
	private static readonly RETRY_DELAY = 1000;

	constructor(apiKey: string, language: string = 'en-US') {
		if (!apiKey) {
			throw new Error('API key is required');
		}
		this.apiKey = apiKey;
		this.language = language;

		// Initialisierungsprozess starten
		this.initialize().catch((error) => {
			console.error('Initialization failed:', error);
			throw new Error('Failed to initialize TMDB instance.');
		});
	}

	private async initialize() {
		// API-Key validieren
		const isValid = await this.validateKey(this.apiKey);
		if (!isValid.success) {
			throw new Error('Invalid API key');
		}
	}

	private buildUrl(endpoint: string): string {
		return `${this.url}/${endpoint}?language=${encodeURIComponent(this.language)}`;
	}

	private async delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	private async GET<T>(endpoint: string, retries = TMDB.MAX_RETRIES): Promise<T> {
		try {
			const headers: Record<string, string> = {
				accept: 'application/json',
				Authorization: `Bearer ${this.apiKey}`
			};

			const response = await fetch(this.buildUrl(endpoint), {
				method: 'GET',
				headers
			});

			if (response.status === 429 && retries > 0) {
				console.warn(`Rate limit exceeded. Retrying in ${TMDB.RETRY_DELAY}ms...`);
				await this.delay(TMDB.RETRY_DELAY);
				return this.GET<T>(endpoint, retries - 1);
			}

			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}

			return (await response.json()) as T;
		} catch (error) {
			console.error('Failed to fetch:', error);
			throw error;
		}
	}

	private async validateKey(
		apiKey: string,
		retries = TMDB.MAX_RETRIES
	): Promise<validateKeyResponse> {
		try {
			const headers: Record<string, string> = {
				accept: 'application/json',
				Authorization: `Bearer ${apiKey}`
			};

			const response = await fetch(this.buildUrl('authentication'), {
				method: 'GET',
				headers
			});

			if (response.status === 429 && retries > 0) {
				console.warn(`Rate limit exceeded. Retrying in ${TMDB.RETRY_DELAY}ms...`);
				await this.delay(TMDB.RETRY_DELAY);
				return this.validateKey(apiKey, retries - 1);
			}

			return (await response.json()) as validateKeyResponse;
		} catch (error) {
			console.error('Failed to fetch:', error);
			throw error;
		}
	}

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
