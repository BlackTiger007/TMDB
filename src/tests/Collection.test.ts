import { describe, it, expect } from 'vitest';
import { tmdb } from '.';

describe('TMDB Collection Tests', () => {
	it('should fetch collection details successfully', async () => {
		const collectionId = 10;

		const details = await tmdb.collections.details(collectionId);

		// Hier kannst du genauer prüfen, was zurückkommen soll, z.B.:
		expect(details).toBeDefined();
		expect(details.id).toBe(collectionId);
		expect(details.name).toBeTypeOf('string');
	});
});
