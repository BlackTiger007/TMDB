import { post } from '../types';
import type { Url, ValidateKeyResponse } from '../types/movie';

export class api {
	protected apiKey: string;
	protected language: string;
	protected url: Url = 'https://api.themoviedb.org/3';
	protected static readonly MAX_RETRIES = 3;
	protected static readonly RETRY_DELAY = 1000;

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

	protected async initialize() {
		// API-Key validieren
		const isValid = await this.validateKey(this.apiKey);
		if (!isValid.success) {
			throw new Error('Invalid API key');
		}
	}

	protected buildUrl(endpoint: string): string {
		return `${this.url}/${endpoint}?language=${encodeURIComponent(this.language)}`;
	}

	protected async delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	protected async validateKey(
		apiKey: string,
		retries = api.MAX_RETRIES
	): Promise<ValidateKeyResponse> {
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
				console.warn(`Rate limit exceeded. Retrying in ${api.RETRY_DELAY}ms...`);
				await this.delay(api.RETRY_DELAY);
				return this.validateKey(apiKey, retries - 1);
			}

			return (await response.json()) as ValidateKeyResponse;
		} catch (error) {
			console.error('Failed to fetch:', error);
			throw error;
		}
	}

	public async GET<T>(endpoint: string, retries = api.MAX_RETRIES): Promise<T> {
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
				console.warn(`Rate limit exceeded. Retrying in ${api.RETRY_DELAY}ms...`);
				await this.delay(api.RETRY_DELAY);
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

	public async POST(
		endpoint: string,
		body: Record<string, any>,
		retries = api.MAX_RETRIES
	): Promise<post> {
		try {
			const headers: Record<string, string> = {
				accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.apiKey}`
			};

			const response = await fetch(this.buildUrl(endpoint), {
				method: 'POST',
				headers,
				body: JSON.stringify(body)
			});

			if (response.status === 429 && retries > 0) {
				console.warn(`Rate limit exceeded. Retrying in ${api.RETRY_DELAY}ms...`);
				await this.delay(api.RETRY_DELAY);
				return this.POST(endpoint, body, retries - 1);
			}

			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}

			return (await response.json()) as post;
		} catch (error) {
			console.error('Failed to fetch:', error);
			throw error;
		}
	}
}
