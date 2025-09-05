import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { API } from '../../api/index'; // Pfad ggf. anpassen

describe('API Class', () => {
	const fakeApiKey = 'FAKE_API_KEY';
	let api: API;

	beforeEach(() => {
		// Mock fetch global
		global.fetch = vi.fn();
	});

	it('should throw error if no API key is provided', () => {
		// @ts-expect-error: Testing error case
		expect(() => new API()).toThrow('API key is required');
	});

	it('should build correct URL', () => {
		api = new API(fakeApiKey);
		const url = api['buildUrl']('test-endpoint');
		expect(url).toBe('https://api.themoviedb.org/3/test-endpoint');
	});

	it('should build query params with default language', () => {
		api = new API(fakeApiKey, 'de');
		const params = api.buildQueryParams({ query: 'test', page: 2 });

		expect(params.get('language')).toBe('de');
		expect(params.get('query')).toBe('test');
		expect(params.get('page')).toBe('2');
	});

	it('should fail initialization with invalid API key', async () => {
		(fetch as unknown as Mock).mockResolvedValue({
			ok: false,
			status: 401,
			statusText: 'Unauthorized'
		});

		api = new API(fakeApiKey);

		await expect(api['initialize']()).rejects.toThrow('Error: 401 Unauthorized');
	});

	it('should retry on 429 rate limit response', async () => {
		let callCount = 0;

		(fetch as unknown as Mock).mockImplementation(() => {
			callCount++;
			return Promise.resolve({
				ok: callCount > 1, // beim zweiten Versuch okay
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
