import { DELETE, post } from '../types';
import type { Url } from '../types/movie';

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

		this.initialize().catch((error) => {
			console.error('Initialization failed:', error);
			throw new Error('Failed to initialize TMDB instance.');
		});
	}

	protected async initialize() {
		const isValid = await this.validateKey(this.apiKey);
		if (!isValid.success) {
			throw new Error('Invalid API key');
		}
	}

	protected buildUrl(endpoint: string): string {
		return `${this.url}/${endpoint}`;
	}

	protected async delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	protected async validateKey(apiKey: string, retries = api.MAX_RETRIES): Promise<post> {
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

			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}

			return (await response.json()) as post;
		} catch (error) {
			console.error('Failed to fetch:', error);
			throw error;
		}
	}

	public buildQueryParams(params: { [key: string]: any }): URLSearchParams {
		const queryParams = new URLSearchParams();
		queryParams.append('language', params.language || this.language);

		Object.keys(params).forEach((key) => {
			if (key !== 'language' && params[key] !== undefined) {
				queryParams.append(key, params[key].toString());
			}
		});

		return queryParams;
	}

	private async fetchRequest<T>(
		endpoint: string,
		method: 'GET' | 'POST' | 'DELETE',
		body?: Record<string, any>,
		retries = api.MAX_RETRIES
	): Promise<T> {
		try {
			const headers: Record<string, string> = {
				accept: 'application/json',
				Authorization: `Bearer ${this.apiKey}`
			};

			if (method === 'POST') {
				headers['Content-Type'] = 'application/json';
			}

			const response = await fetch(this.buildUrl(endpoint), {
				method,
				headers,
				body: method === 'POST' ? JSON.stringify(body) : undefined
			});

			if (response.status === 429 && retries > 0) {
				console.warn(`Rate limit exceeded. Retrying in ${api.RETRY_DELAY}ms...`);
				await this.delay(api.RETRY_DELAY);
				return this.fetchRequest<T>(endpoint, method, body, retries - 1);
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

	public async GET<T>(endpoint: string, retries = api.MAX_RETRIES): Promise<T> {
		return this.fetchRequest<T>(endpoint, 'GET', undefined, retries);
	}

	public async POST(
		endpoint: string,
		body: Record<string, any>,
		retries = api.MAX_RETRIES
	): Promise<post> {
		return this.fetchRequest<post>(endpoint, 'POST', body, retries);
	}

	public async DELETE<T = DELETE>(endpoint: string, retries = api.MAX_RETRIES): Promise<T> {
		return this.fetchRequest<T>(endpoint, 'DELETE', undefined, retries);
	}
}
