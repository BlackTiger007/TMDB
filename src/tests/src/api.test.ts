import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { API } from '../../api/index';

describe('API Class', () => {
	const fakeApiKey = 'FAKE_API_KEY';
	let api: API;

	beforeEach(() => {
		// Reset fetch mock before each test
		global.fetch = vi.fn();
	});

	it('should throw error if no API key is provided', () => {
		// @ts-expect-error: Testing error case
		expect(() => new API()).toThrow('API key is required');
	});

	it('should build correct URL', async () => {
		api = new API(fakeApiKey);

		(fetch as unknown as Mock).mockResolvedValue({
			ok: true,
			status: 200,
			json: () => Promise.resolve({ success: true })
		});

		const url = api['buildUrl']('test-endpoint');
		expect(url).toBe('https://api.themoviedb.org/3/test-endpoint');
	});

	it('should build query params with default language', async () => {
		api = new API(fakeApiKey, 'de');

		(fetch as unknown as Mock).mockResolvedValue({
			ok: true,
			status: 200,
			json: () => Promise.resolve({ success: true })
		});

		const params = api.buildQueryParams({ query: 'test', page: 2 });
		expect(params.get('language')).toBe('de');
		expect(params.get('query')).toBe('test');
		expect(params.get('page')).toBe('2');
	});

	it('should fail initialization with invalid API key', async () => {
		// Mock muss vor Konstruktor gesetzt werden!
		(global.fetch as unknown as Mock).mockResolvedValue({
			ok: false,
			status: 401,
			statusText: 'Unauthorized'
		});

		// Konstruktor ruft initialize() direkt auf
		api = new API(fakeApiKey);

		// Warte kurz, damit die async initialize() ausgeführt wird
		await new Promise((resolve) => setTimeout(resolve, 0));
	});

	it('should retry on 429 rate limit response', async () => {
		let callCount = 0;

		(fetch as unknown as Mock).mockImplementation(() => {
			callCount++;
			return Promise.resolve({
				ok: callCount > 1, // beim zweiten Versuch erfolgreich
				status: callCount > 1 ? 200 : 429,
				json: () => Promise.resolve({ success: true })
			});
		});

		api = new API(fakeApiKey);
		const result = await api['validateKey'](fakeApiKey);
		expect(result.success).toBe(true);
		expect(callCount).toBeGreaterThan(1);
	});
});
